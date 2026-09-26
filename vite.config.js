import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { handleChatRequest, handleHealthRequest } from './server/routes/chatHandler.js';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load all environment variables (including server secrets) into process.env for server dev use
  const env = loadEnv(mode, process.cwd(), '');
  for (const key in env) {
    if (process.env[key] === undefined) {
      process.env[key] = env[key];
    }
  }

  return {
    plugins: [
      react(),
      {
        name: 'llama-api-dev-server',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            const url = new URL(req.url, 'http://localhost');
            if (req.method === 'POST' && url.pathname === '/api/chat') {
              await handleChatRequest(req, res);
              return;
            }
            if (req.method === 'GET' && url.pathname === '/api/health') {
              handleHealthRequest(req, res);
              return;
            }
            next();
          });
        }
      }
    ]
  };
});
