/**
 * Provider Mock Test
 * Tests LlamaService with a real local HTTP server acting as an OpenAI-compatible Llama endpoint.
 * Validates:
 * 1. Happy path: Llama returns valid completion
 * 2. Provider error: Llama returns 500
 * 3. Provider timeout: Llama server delays past timeout
 */

import http from 'http';
import { generateLlamaResponse } from '../server/services/llamaService.js';

let mockMode = 'ok'; // 'ok' | 'error' | 'hang'

const mockServer = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/chat/completions') {
    if (mockMode === 'ok') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          choices: [
            {
              message: {
                role: 'assistant',
                content: "At RoomNexa, Mohit works on frontend development, Cursor workflows, and creating video tutorials for YouTube."
              }
            }
          ]
        })
      );
    } else if (mockMode === 'error') {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: { message: 'Internal Server Error' } }));
    } else if (mockMode === 'hang') {
      // Do not respond; wait to trigger timeout
    }
  } else {
    res.writeHead(404);
    res.end();
  }
});

mockServer.listen(3099, async () => {
  console.log('[Mock Llama Server] Running on http://localhost:3099');

  process.env.LLAMA_API_KEY = 'test-key-mock';
  process.env.LLAMA_BASE_URL = 'http://localhost:3099';
  process.env.LLAMA_MODEL = 'llama-3.3-70b-versatile';
  process.env.REQUEST_TIMEOUT_MS = '500'; // short timeout for test

  let testsPassed = 0;

  // 1. Happy Path
  try {
    mockMode = 'ok';
    const res = await generateLlamaResponse('What did Mohit do at RoomNexa?');
    if (res.answer && res.answer.includes('RoomNexa')) {
      console.log('✓ Mock Llama Happy Path Succeeded:', res.answer);
      testsPassed++;
    } else {
      console.error('✗ Unexpected response:', res);
    }
  } catch (err) {
    console.error('✗ Happy path failed:', err.message);
  }

  // 2. Provider 500 Error
  try {
    mockMode = 'error';
    await generateLlamaResponse('Hello');
    console.error('✗ Should have failed on 500');
  } catch (err) {
    if (err.status === 502 || err.status === 500) {
      console.log('✓ Provider 500 correctly mapped to 502/500 error');
      testsPassed++;
    } else {
      console.error('✗ Unexpected status:', err.status);
    }
  }

  // 3. Timeout
  try {
    mockMode = 'hang';
    await generateLlamaResponse('Hello');
    console.error('✗ Should have timed out');
  } catch (err) {
    if (err.status === 504) {
      console.log('✓ Provider timeout correctly triggered AbortController and status 504');
      testsPassed++;
    } else {
      console.error('✗ Unexpected status on timeout:', err);
    }
  }

  mockServer.close(() => {
    console.log(`\nMock Provider Tests Completed: ${testsPassed} / 3 PASSED`);
    if (testsPassed !== 3) process.exit(1);
  });
});
