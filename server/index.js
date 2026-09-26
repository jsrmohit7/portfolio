/**
 * Standalone Node HTTP Server for /api/chat and /api/health
 * Can be run independently via `node server/index.js` or via container/VPS.
 */

import http from 'http';
import { handleChatRequest, handleHealthRequest } from './routes/chatHandler.js';

const PORT = Number(process.env.PORT) || 3001;

const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (req.method === 'POST' && url.pathname === '/api/chat') {
    await handleChatRequest(req, res);
    return;
  }

  if (req.method === 'GET' && url.pathname === '/api/health') {
    handleHealthRequest(req, res);
    return;
  }

  res.statusCode = 404;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

if (process.argv[1] && process.argv[1].endsWith('index.js')) {
  server.listen(PORT, () => {
    console.log(`[Portfolio AI Server] Running on http://localhost:${PORT}`);
  });
}

export default server;
