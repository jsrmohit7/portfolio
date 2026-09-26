/**
 * Server-Side Gemini Service
 * Interacts with Google's Generative Language API (Gemini).
 * Enforces timeout, input validation, context assembly, and clean response normalization.
 * NEVER exposes GEMINI_API_KEY to the browser or logs.
 */

import { selectContext } from './contextSelector.js';
import { buildSystemPrompt } from './systemPrompt.js';
import { getEnvConfig } from './envLoader.js';

const DEFAULT_TIMEOUT_MS = 20000;
const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_MESSAGES = 6;
const DEFAULT_MODEL = 'gemini-3.5-flash-lite';

/**
 * Formats conversation history into Gemini's multi-turn content format.
 * Gemini rules:
 * - Roles must be 'user' or 'model'
 * - First message must be 'user'
 * - Cannot have consecutive messages with the identical role
 */
export function formatGeminiContents(message, history = []) {
  const contents = [];

  if (Array.isArray(history)) {
    for (const item of history.slice(-MAX_HISTORY_MESSAGES)) {
      if (!item || !item.content || typeof item.content !== 'string') continue;
      const text = item.content.trim().slice(0, MAX_MESSAGE_LENGTH);
      if (!text) continue;

      const role =
        item.role === 'assistant' || item.role === 'model' || item.sender === 'assistant'
          ? 'model'
          : 'user';

      if (contents.length > 0 && contents[contents.length - 1].role === role) {
        contents[contents.length - 1].parts[0].text += `\n${text}`;
      } else {
        if (contents.length === 0 && role === 'model') {
          // Gemini requires the first turn to be 'user'
          continue;
        }
        contents.push({
          role,
          parts: [{ text }]
        });
      }
    }
  }

  // Append current user message
  if (contents.length > 0 && contents[contents.length - 1].role === 'user') {
    contents[contents.length - 1].parts[0].text += `\n${message}`;
  } else {
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });
  }

  return contents;
}

/**
 * Executes a chat query through the configured Google Gemini model.
 *
 * @param {string} rawMessage - User query
 * @param {Array<{ role: string, content: string }>} rawHistory - Previous messages
 * @returns {Promise<{ answer: string }>}
 */
export async function generateGeminiResponse(rawMessage, rawHistory = []) {
  // 1. Input Validation
  if (!rawMessage || typeof rawMessage !== 'string' || !rawMessage.trim()) {
    const error = new Error('Invalid request: message cannot be empty.');
    error.status = 400;
    throw error;
  }

  const message = rawMessage.trim();
  if (message.length > MAX_MESSAGE_LENGTH) {
    const error = new Error(
      `Invalid request: message exceeds maximum allowed length of ${MAX_MESSAGE_LENGTH} characters.`
    );
    error.status = 400;
    throw error;
  }

  // 2. Configuration Extraction
  const config = getEnvConfig();
  const apiKey = config.apiKey;
  const model = config.model || DEFAULT_MODEL;
  const timeoutMs = config.timeoutMs || DEFAULT_TIMEOUT_MS;

  if (!apiKey) {
    const error = new Error('GEMINI_API_KEY is not configured on the server.');
    error.status = 503;
    error.isConfigError = true;
    error.userMessage = 'Portfolio AI is temporarily unavailable. Please try again.';
    throw error;
  }

  // 3. Context Selection & System Prompt Assembly
  const selectedContext = selectContext(message, rawHistory);
  const systemPrompt = buildSystemPrompt(selectedContext);
  const contents = formatGeminiContents(message, rawHistory);

  // 4. Gemini Request Payload
  const payload = {
    system_instruction: {
      parts: [{ text: systemPrompt }]
    },
    contents,
    generationConfig: {
      temperature: 0.2,
      maxOutputTokens: 800
    }
  };

  const endpointUrl = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    model
  )}:generateContent`;

  // 5. AbortController for Timeout Protection
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(endpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const errBody = await res.text().catch(() => '');
      let sanitizedMessage = `HTTP ${res.status}`;
      try {
        const parsed = JSON.parse(errBody);
        sanitizedMessage = parsed?.error?.message || sanitizedMessage;
      } catch {
        // errBody is not JSON
      }

      console.warn(`[Gemini Service] API Error (${res.status}): ${sanitizedMessage}`);

      // If preferred model returns 404 (not supported/found), attempt fallback to gemini-2.5-flash or gemini-1.5-flash
      if (res.status === 404 && model !== 'gemini-3.5-flash' && model !== 'gemini-3.5-flash-lite') {
        console.info('[Gemini Service] Retrying with fallback model gemini-3.5-flash...');
        return await attemptFallbackModel(payload, apiKey, 'gemini-3.5-flash', timeoutMs);
      }

      const error = new Error('Gemini API call failed');
      error.status = res.status === 401 || res.status === 403 ? 401 : 502;
      error.userMessage = 'Portfolio AI is temporarily unavailable. Please try again.';
      throw error;
    }

    const data = await res.json();
    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!answer || typeof answer !== 'string') {
      const error = new Error('Invalid or empty response structure from Gemini API');
      error.status = 502;
      error.userMessage = 'Portfolio AI is temporarily unavailable. Please try again.';
      throw error;
    }

    return {
      answer: answer.trim()
    };
  } catch (err) {
    clearTimeout(timeoutId);

    if (err.name === 'AbortError') {
      console.warn(`[Gemini Service] Request timed out after ${timeoutMs}ms`);
      const timeoutError = new Error('Gemini API request timed out');
      timeoutError.status = 504;
      timeoutError.userMessage = 'Portfolio AI is temporarily unavailable. Please try again.';
      throw timeoutError;
    }

    if (!err.userMessage) {
      err.userMessage = 'Portfolio AI is temporarily unavailable. Please try again.';
    }

    throw err;
  }
}

/**
 * Graceful fallback to alternate model if initial model is not found in user tier.
 */
async function attemptFallbackModel(payload, apiKey, fallbackModel, timeoutMs) {
  const fallbackUrl = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(
    fallbackModel
  )}:generateContent`;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(fallbackUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      const error = new Error('Fallback Gemini model also failed');
      error.status = 502;
      error.userMessage = 'Portfolio AI is temporarily unavailable. Please try again.';
      throw error;
    }

    const data = await res.json();
    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!answer) {
      throw new Error('Empty answer from fallback Gemini model');
    }

    return { answer: answer.trim() };
  } catch (err) {
    clearTimeout(timeoutId);
    if (!err.userMessage) {
      err.userMessage = 'Portfolio AI is temporarily unavailable. Please try again.';
    }
    throw err;
  }
}

/**
 * Health check helper returning current configuration status without leaking keys.
 */
export function getGeminiHealthStatus() {
  const config = getEnvConfig();
  const apiKey = config.apiKey;
  const model = config.model || DEFAULT_MODEL;

  return {
    status: 'ok',
    provider: 'gemini',
    llm: apiKey ? 'configured' : 'demo_only',
    model,
    demoMode: config.demoMode
  };
}
