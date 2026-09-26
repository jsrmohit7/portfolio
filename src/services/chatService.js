/**
 * Unified Chat Service
 * The client-side single source of truth for the Chat UI.
 * Routes to demoChatService when in demo mode or llmService when in live mode.
 * Never exposes server secrets, API keys, or provider endpoints to the browser.
 */

import { answerFromPortfolio } from './demoChatService.js';
import { sendToLLM } from './llmService.js';

// Configuration-based mode: 'live' or 'demo'
// Driven by public VITE_CHAT_MODE or VITE_DEMO_MODE env variable (defaults to 'live')
const configuredMode = (
  import.meta.env.VITE_CHAT_MODE ||
  (import.meta.env.VITE_DEMO_MODE === 'true' ? 'demo' : 'live')
).toLowerCase();

export const DEMO_MODE = configuredMode === 'demo';

/**
 * Checks if the system is explicitly configured in demo mode.
 */
export function isDemoMode() {
  return DEMO_MODE;
}

/**
 * Retrieves the current operational mode label for the UI badge.
 */
export function getChatModeLabel(activeMode) {
  if (activeMode === 'DEMO' || DEMO_MODE) {
    return 'PORTFOLIO AI · DEMO MODE';
  }
  return 'PORTFOLIO AI · GEMINI';
}

/**
 * Sends a user message and optional recent history to the backend API or demo engine.
 *
 * @param {string} rawMessage - User query text
 * @param {Array<{ role: string, content: string }>} history - Recent conversation history
 * @returns {Promise<{ content: string, timestamp: string, mode: string, isError?: boolean }>}
 */
export const sendMessage = async (rawMessage, history = []) => {
  if (!rawMessage || typeof rawMessage !== 'string' || !rawMessage.trim()) {
    throw new Error('Message cannot be empty.');
  }

  const message = rawMessage.trim();

  // If explicitly configured for local demo mode, route directly to demo engine
  if (DEMO_MODE) {
    const demoResponse = await answerFromPortfolio(message);
    return {
      content: demoResponse.content,
      timestamp: demoResponse.timestamp,
      mode: 'DEMO'
    };
  }

  // Live Mode: Delegate to llmService which communicates with /api/chat
  const liveResponse = await sendToLLM(message, history);
  return liveResponse;
};
