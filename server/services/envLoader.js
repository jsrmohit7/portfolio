/**
 * Environment Variable Loader
 * Ensures server services always read the latest values from .env without requiring a manual server restart.
 */

import fs from 'fs';
import path from 'path';

export function getEnvConfig(overrides = {}) {
  const env = {};

  try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      const lines = content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const key = trimmed.slice(0, eqIdx).trim();
          const val = trimmed.slice(eqIdx + 1).trim();
          if (val) {
            env[key] = val;
          }
        }
      }
    }
  } catch (err) {
    console.warn('[EnvLoader] Could not read .env from disk:', err.message);
  }

  // Explicit process.env overrides (if set and non-empty, or explicitly marked as '__EMPTY__')
  for (const k of ['GEMINI_API_KEY', 'GEMINI_MODEL', 'DEMO_MODE', 'REQUEST_TIMEOUT_MS']) {
    if (process.env[k] === '__EMPTY__') {
      env[k] = '';
    } else if (process.env[k]) {
      env[k] = process.env[k];
    }
  }

  Object.assign(env, overrides);

  const demoModeRaw = (env.DEMO_MODE || '').toLowerCase();
  const isDemo = demoModeRaw === 'true' || env.VITE_CHAT_MODE === 'demo';

  return {
    apiKey: (env.GEMINI_API_KEY || '').trim(),
    model: (env.GEMINI_MODEL || 'gemini-3.5-flash-lite').trim(),
    demoMode: isDemo,
    timeoutMs: Number(env.REQUEST_TIMEOUT_MS) || 20000
  };
}
