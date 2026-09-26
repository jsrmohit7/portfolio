import { generateGeminiResponse, getGeminiHealthStatus } from '../services/geminiService.js';
import { checkRateLimit } from '../services/rateLimiter.js';
import { getEnvConfig } from '../services/envLoader.js';
import { answerFromPortfolio } from '../../src/services/demoChatService.js';

export async function handleChatRequest(req, res) {
  // Rate limiting check
  const clientIp =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    '127.0.0.1';

  const rateCheck = checkRateLimit(clientIp);
  if (!rateCheck.allowed) {
    res.statusCode = 429;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Retry-After', String(rateCheck.retryAfterSeconds));
    res.end(
      JSON.stringify({
        error: 'Too many requests',
        answer: 'Too many requests. Please wait a moment before sending another message.'
      })
    );
    return;
  }

  // Parse JSON Body if not already parsed
  let body = req.body;
  if (!body) {
    try {
      body = await parseJsonBody(req);
    } catch (parseErr) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid JSON request payload' }));
      return;
    }
  }

  const userMessage = body?.message;
  const history = body?.history || body?.messages || [];

  if (!userMessage || typeof userMessage !== 'string' || !userMessage.trim()) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        error: 'Invalid request: message is required and cannot be empty.'
      })
    );
    return;
  }

  const config = getEnvConfig();

  // If server is configured in DEMO_MODE, route directly to demo portfolio engine
  if (config.demoMode) {
    const demoReply = await answerFromPortfolio(userMessage);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        answer: demoReply.content,
        mode: 'DEMO'
      })
    );
    return;
  }

  try {
    const result = await generateGeminiResponse(userMessage, history);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        answer: result.answer,
        mode: 'GEMINI'
      })
    );
  } catch (err) {
    console.error('[Chat Handler Error]:', err.message);

    const statusCode = err.status || 500;
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');

    // Never leak stack traces, provider keys, or internal errors to client
    const clientMessage =
      statusCode === 400
        ? err.message
        : err.userMessage || 'Portfolio AI is temporarily unavailable. Please try again.';

    res.end(
      JSON.stringify({
        error: 'Service temporarily unavailable',
        answer: clientMessage,
        isConfigError: Boolean(err.isConfigError)
      })
    );
  }
}

export function handleHealthRequest(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(getGeminiHealthStatus()));
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (chunk) => {
      raw += chunk;
      // Guard against huge payload attacks
      if (raw.length > 50000) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      if (!raw.trim()) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', (err) => reject(err));
  });
}
