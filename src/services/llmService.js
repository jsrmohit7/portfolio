/**
 * Client-Side LLM Service
 * Communicates directly with the secure server-side /api/chat endpoint.
 * Never handles API keys or secret credentials.
 */

export const sendToLLM = async (message, history = []) => {
  const API_ENDPOINT = '/api/chat';

  const sanitizedHistory = Array.isArray(history)
    ? history.slice(-6).map((m) => ({
        role: m.role || (m.sender === 'user' ? 'user' : 'assistant'),
        content: m.content
      }))
    : [];

  const res = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message,
      history: sanitizedHistory
    })
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.warn(`[llmService] /api/chat error ${res.status}:`, data.error);
    const friendlyError =
      data.answer || 'Portfolio AI is temporarily unavailable. Please try again.';

    return {
      content: friendlyError,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      mode: 'ERROR',
      isError: true,
      isConfigError: Boolean(data.isConfigError)
    };
  }

  if (!data.answer || typeof data.answer !== 'string') {
    throw new Error('Malformed answer from /api/chat');
  }

  return {
    content: data.answer,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    mode: data.mode || 'GEMINI'
  };
};
