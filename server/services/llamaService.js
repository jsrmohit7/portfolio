/**
 * Server-Side Llama Service
 * Interacts with any OpenAI-compatible Llama endpoint (Groq, Together AI, DeepInfra, OpenRouter, Ollama).
 * Enforces timeout, input validation, context assembly, and clean response normalization.
 */

import { selectContext } from './contextSelector.js';
import { buildSystemPrompt } from './systemPrompt.js';
import { getEnvConfig } from './envLoader.js';

const DEFAULT_TIMEOUT_MS = 20000;
const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_MESSAGES = 6;

/**
 * Validates and sanitizes chat history array.
 */
function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];

  return history
    .slice(-MAX_HISTORY_MESSAGES)
    .filter(
      (m) =>
        m &&
        typeof m === 'object' &&
        (m.role === 'user' || m.role === 'assistant') &&
        typeof m.content === 'string' &&
        m.content.trim()
    )
    .map((m) => ({
      role: m.role,
      content: m.content.trim().slice(0, MAX_MESSAGE_LENGTH)
    }));
}

/**
 * Normalizes OpenAI-compatible chat completions endpoint URL.
 */
function resolveChatCompletionsUrl(baseUrl) {
  if (!baseUrl) {
    return 'https://api.groq.com/openai/v1/chat/completions';
  }
  const cleanBase = baseUrl.trim().replace(/\/+$/, '');
  if (cleanBase.endsWith('/chat/completions')) {
    return cleanBase;
  }
  return `${cleanBase}/chat/completions`;
}

/**
 * Executes a chat query through the configured Llama model.
 *
 * @param {string} rawMessage - User query
 * @param {Array<{ role: string, content: string }>} rawHistory - Previous messages
 * @returns {Promise<{ answer: string }>}
 */
export async function generateLlamaResponse(rawMessage, rawHistory = []) {
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

  const history = sanitizeHistory(rawHistory);

  // 2. Configuration Extraction (Dynamically loaded)
  const config = getEnvConfig();
  const apiKey = config.apiKey;
  const baseUrl = config.baseUrl;
  const model = config.model;
  const timeoutMs = config.timeoutMs || DEFAULT_TIMEOUT_MS;

  // Check if API key is missing (unless using local Ollama)
  const isLocalOllama = baseUrl.includes('localhost:11434') || baseUrl.includes('127.0.0.1:11434');
  if (!apiKey && !isLocalOllama) {
    const error = new Error(
      'LLAMA_API_KEY is not configured on the server. Please add your API key to .env'
    );
    error.status = 503;
    error.isConfigError = true;
    throw error;
  }

  // 3. Context Selection & System Prompt Assembly
  const selectedContext = selectContext(message, history);
  const systemPrompt = buildSystemPrompt(selectedContext);

  const endpointUrl = resolveChatCompletionsUrl(baseUrl);

  // 4. Request Construction
  const payload = {
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      ...history,
      { role: 'user', content: message }
    ],
    temperature: 0.2,
    max_tokens: 800
  };

  const headers = {
    'Content-Type': 'application/json'
  };
  if (apiKey) {
    headers['Authorization'] = `Bearer ${apiKey}`;
  }

  // 5. AbortController for Strict Timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(endpointUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorBody = '';
      try {
        errorBody = await response.text();
      } catch (_) {}

      console.error(
        `[Llama Service] HTTP ${response.status} from ${endpointUrl}:`,
        errorBody.slice(0, 300)
      );

      const error = new Error('Llama provider request failed');
      error.status = response.status >= 500 ? 502 : response.status;
      throw error;
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content;

    if (!reply || typeof reply !== 'string') {
      console.error('[Llama Service] Unexpected provider response shape:', JSON.stringify(data).slice(0, 300));
      return {
        answer: "I don't have that information in Mohit's portfolio yet."
      };
    }

    return {
      answer: reply.trim()
    };
  } catch (err) {
    clearTimeout(timeoutId);

    if (err.name === 'AbortError') {
      console.error(`[Llama Service] Request to ${endpointUrl} timed out after ${timeoutMs}ms`);
      const timeoutError = new Error('Llama request timed out');
      timeoutError.status = 504;
      throw timeoutError;
    }

    throw err;
  }
}

/**
 * Health check helper returning current configuration status without leaking keys.
 */
export function getLlamaHealthStatus() {
  const config = getEnvConfig();
  const apiKey = config.apiKey;
  const baseUrl = config.baseUrl;
  const model = config.model;
  const isLocalOllama = baseUrl.includes('localhost:11434') || baseUrl.includes('127.0.0.1:11434');

  const isConfigured = Boolean(apiKey || isLocalOllama);

  return {
    status: 'ok',
    llm: isConfigured ? 'configured' : 'demo_only',
    model,
    provider: baseUrl.includes('groq.com')
      ? 'groq'
      : baseUrl.includes('together')
      ? 'together'
      : baseUrl.includes('deepinfra')
      ? 'deepinfra'
      : baseUrl.includes('openrouter')
      ? 'openrouter'
      : baseUrl.includes('11434')
      ? 'ollama'
      : 'custom'
  };
}
