/**
 * Lightweight In-Memory Sliding Window Rate Limiter
 * Protects public Llama endpoint from abuse without requiring Redis or external stores.
 */

const ipRequests = new Map();
const WINDOW_MS = 60 * 1000; // 1 minute window
const MAX_REQUESTS_PER_WINDOW = 30; // 30 requests / min per IP

export function checkRateLimit(ip = 'anonymous') {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = (ipRequests.get(ip) || []).filter((t) => t > windowStart);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    ipRequests.set(ip, timestamps);
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil((timestamps[0] + WINDOW_MS - now) / 1000)
    };
  }

  timestamps.push(now);
  ipRequests.set(ip, timestamps);

  // Periodically clean up stale IPs
  if (ipRequests.size > 2000) {
    for (const [key, times] of ipRequests.entries()) {
      const valid = times.filter((t) => t > windowStart);
      if (valid.length === 0) ipRequests.delete(key);
      else ipRequests.set(key, valid);
    }
  }

  return { allowed: true };
}

export function resetRateLimiter() {
  ipRequests.clear();
}
