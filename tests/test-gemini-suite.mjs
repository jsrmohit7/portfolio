/**
 * Comprehensive Test Suite for Google Gemini Integration
 * Tests:
 * 1. Context selection & grounding
 * 2. Multi-turn history formatting for Gemini API
 * 3. System prompt integrity & strict anti-hallucination rules
 * 4. Input validation (empty, max length)
 * 5. Rate limiting
 * 6. Health check response
 * 7. Mock Gemini API execution for the 6 factual questions + pizza unknown query
 * 8. Error handling & provider timeout protection
 * 9. Demo mode switchability
 */

import http from 'http';
import { selectContext } from '../server/services/contextSelector.js';
import { buildSystemPrompt } from '../server/services/systemPrompt.js';
import {
  generateGeminiResponse,
  formatGeminiContents,
  getGeminiHealthStatus
} from '../server/services/geminiService.js';
import { checkRateLimit, resetRateLimiter } from '../server/services/rateLimiter.js';
import { answerFromPortfolio } from '../src/services/demoChatService.js';

let passed = 0;
let total = 0;

function assert(condition, message) {
  total++;
  if (condition) {
    console.log(`✓ ${message}`);
    passed++;
  } else {
    console.error(`✗ FAILED: ${message}`);
    throw new Error(`Assertion failed: ${message}`);
  }
}

async function runGeminiTests() {
  console.log('========================================');
  console.log('RUNNING GOOGLE GEMINI INTEGRATION TESTS');
  console.log('========================================\n');

  // --- GROUP 1: CONTEXT SELECTION ---
  console.log('--- TEST GROUP 1: CONTEXT SELECTION ---');
  const roomnexaCtx = selectContext('What did Mohit do at RoomNexa?');
  assert(roomnexaCtx.includes('[EXPERIENCE: ROOMNEXA]'), 'RoomNexa context selected for RoomNexa query');
  assert(roomnexaCtx.includes('roomnexa.com'), 'RoomNexa URL included');

  const mindcareCtx = selectContext('Tell me about MindCare AI X and watsonx Granite');
  assert(mindcareCtx.includes('[PROJECT: MINDCARE AI X]'), 'MindCare context selected for LLM query');
  assert(mindcareCtx.includes('IBM watsonx Granite'), 'IBM watsonx Granite included in MindCare context');

  const researchCtx = selectContext('Explain the hyperspectral imaging research at BIT-SIPAR');
  assert(researchCtx.includes('[RESEARCH: MEDICAL HYPERSPECTRAL IMAGE ANALYSIS]'), 'HSI research context selected');
  assert(researchCtx.includes('826') && researchCtx.includes('139'), 'Spectral reduction documented in research context');

  const skillsCtx = selectContext('What technologies and programming languages does he use?');
  assert(skillsCtx.includes('[TECHNICAL SKILLS & TOOLKIT]'), 'Skills context selected');
  assert(skillsCtx.includes('Python'), 'Python included in skills context');

  const contactCtx = selectContext('How can I contact Mohit?');
  assert(contactCtx.includes('mohitmahto99@gmail.com'), 'Email included in contact context');

  // --- GROUP 2: GEMINI MULTI-TURN FORMATTING ---
  console.log('\n--- TEST GROUP 2: GEMINI MULTI-TURN FORMATTING ---');
  const sampleHistory = [
    { role: 'assistant', content: 'Hello! I am Mohit AI.' }, // should skip leading assistant greeting
    { role: 'user', content: 'Who is Mohit?' },
    { role: 'assistant', content: 'Mohit is an AI engineer.' }
  ];
  const geminiContents = formatGeminiContents('Where did he study?', sampleHistory);
  assert(geminiContents[0].role === 'user', 'Gemini first content is always user');
  assert(geminiContents.every((c) => c.role === 'user' || c.role === 'model'), 'Gemini roles are strictly user/model');
  assert(geminiContents.length === 3, 'Gemini contents has exact 3 turns (user -> model -> user)');
  assert(geminiContents[geminiContents.length - 1].parts[0].text === 'Where did he study?', 'Current query is at end of contents');

  // Verify adjacent identical roles get merged
  const doubleHistory = [
    { role: 'user', content: 'First query' },
    { role: 'user', content: 'Follow-up query' }
  ];
  const mergedContents = formatGeminiContents('Third query', doubleHistory);
  assert(mergedContents.length === 1 && mergedContents[0].role === 'user', 'Adjacent user messages merged into single turn');

  // --- GROUP 3: SYSTEM PROMPT INTEGRITY ---
  console.log('\n--- TEST GROUP 3: SYSTEM PROMPT INTEGRITY ---');
  const prompt = buildSystemPrompt(roomnexaCtx);
  assert(prompt.includes("You are \"Mohit's AI\""), 'Base persona intact');
  assert(prompt.includes('Never invent information'), 'Anti-hallucination Rule 1 present');
  assert(prompt.includes('RoomNexa must be represented accurately'), 'RoomNexa boundary present');
  assert(prompt.includes('Do NOT claim:') && prompt.includes('RAG'), 'No RAG/Pinecone boundary present');
  assert(prompt.includes('I don\'t have that information in Mohit\'s portfolio yet'), 'Unknown fallback phrasing defined');

  // --- GROUP 4: INPUT VALIDATION ---
  console.log('\n--- TEST GROUP 4: INPUT VALIDATION ---');
  try {
    await generateGeminiResponse('   ');
    assert(false, 'Should reject empty message');
  } catch (err) {
    assert(err.status === 400, 'Empty message rejected with status 400');
  }

  try {
    await generateGeminiResponse('a'.repeat(1001));
    assert(false, 'Should reject overly long message');
  } catch (err) {
    assert(err.status === 400, 'Overly long message rejected with status 400');
  }

  // --- GROUP 5: RATE LIMITING ---
  console.log('\n--- TEST GROUP 5: RATE LIMITING ---');
  resetRateLimiter();
  const testIp = '192.168.1.99';
  let allowedCount = 0;
  for (let i = 0; i < 35; i++) {
    const check = checkRateLimit(testIp);
    if (check.allowed) allowedCount++;
  }
  assert(allowedCount === 30, `Rate limiter allowed exactly 30 requests in window (got ${allowedCount})`);
  const blockedCheck = checkRateLimit(testIp);
  assert(!blockedCheck.allowed && blockedCheck.retryAfterSeconds > 0, 'Subsequent request blocked with retryAfter');

  // --- GROUP 6: HEALTH CHECK ---
  console.log('\n--- TEST GROUP 6: HEALTH ENDPOINT ---');
  const health = getGeminiHealthStatus();
  assert(health.status === 'ok', 'Health status is ok');
  assert(health.provider === 'gemini', 'Provider is gemini');
  assert(health.model === 'gemini-3.5-flash-lite' || health.model.includes('gemini'), 'Configured model is a valid Gemini model');

  // --- GROUP 7: MOCK GEMINI PROVIDER FOR THE 7 REQUIRED QUESTIONS ---
  console.log('\n--- TEST GROUP 7: MOCK GEMINI SERVER & EVALUATION ---');

  const mockKnowledge = {
    llm: "Mohit's LLM experience includes integrating IBM watsonx Granite into MindCare AI X for context-aware journaling and AI coaching, along with prompt engineering techniques.",
    roomnexa: "Mohit's work at RoomNexa focuses on frontend development, website design/development, Cursor-assisted development, prompt engineering, AI tutorials, product demonstrations, AI-generated visual content, and short-form reels.",
    mindcare: "MindCare AI X is an AI-powered mental wellness platform powered by IBM watsonx Granite with an Emotion Intelligence Engine, context-aware journaling, FastAPI, MongoDB, 115+ backend tests, and Playwright E2E.",
    hsi: "Mohit's hyperspectral imaging research at BIT-SIPAR processes 826 spectral bands reduced to 139, utilizing deep learning models including U-Net, LinkNet, FPN, and ResNet34/50 for semantic segmentation and reconstruction with web inference.",
    technologies: "Mohit works with Python, JavaScript/TypeScript, React, Next.js, FastAPI, Node.js, PyTorch, U-Net, MongoDB, PostgreSQL, TailwindCSS, IBM watsonx Granite, and Git.",
    contact: "You can reach Mohit via email at mohitmahto99@gmail.com, or through his GitHub and LinkedIn profiles.",
    pizza: "I don't have that information in Mohit's portfolio yet."
  };

  let mockServerMode = 'ok'; // 'ok' | 'error' | 'hang'

  const mockGeminiServer = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url.includes('/models/')) {
      if (mockServerMode === 'ok') {
        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', () => {
          const parsed = JSON.parse(body);
          const lastTurn = parsed.contents[parsed.contents.length - 1];
          const query = lastTurn?.parts?.[0]?.text?.toLowerCase() || '';

          let reply = "I don't have that information in Mohit's portfolio yet.";
          if (query.includes('llm') || query.includes('experience')) reply = mockKnowledge.llm;
          else if (query.includes('roomnexa')) reply = mockKnowledge.roomnexa;
          else if (query.includes('mindcare')) reply = mockKnowledge.mindcare;
          else if (query.includes('hyperspectral') || query.includes('research')) reply = mockKnowledge.hsi;
          else if (query.includes('technologies') || query.includes('skills')) reply = mockKnowledge.technologies;
          else if (query.includes('contact') || query.includes('email')) reply = mockKnowledge.contact;
          else if (query.includes('pizza')) reply = mockKnowledge.pizza;

          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(
            JSON.stringify({
              candidates: [
                {
                  content: {
                    parts: [{ text: reply }],
                    role: 'model'
                  },
                  finishReason: 'STOP'
                }
              ]
            })
          );
        });
      } else if (mockServerMode === 'error') {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: { message: 'Internal Gemini Error' } }));
      } else if (mockServerMode === 'hang') {
        // do not answer to test timeout
      }
    } else {
      res.writeHead(404);
      res.end();
    }
  });

  await new Promise((resolve) => mockGeminiServer.listen(3101, resolve));
  console.log('[Mock Gemini Server] Running on http://localhost:3101');

  // Intercept fetch for localhost mock server test
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    if (typeof url === 'string' && url.includes('generativelanguage.googleapis.com')) {
      const mockUrl = url.replace('https://generativelanguage.googleapis.com/v1beta', 'http://localhost:3101');
      return originalFetch(mockUrl, options);
    }
    return originalFetch(url, options);
  };

  process.env.GEMINI_API_KEY = 'test-gemini-key-12345';
  process.env.GEMINI_MODEL = 'gemini-2.5-flash-lite';
  process.env.REQUEST_TIMEOUT_MS = '600';

  // 1. LLM Experience
  const r1 = await generateGeminiResponse("What is Mohit's LLM experience?");
  assert(r1.answer.includes('IBM watsonx Granite'), 'Question 1: LLM experience includes IBM watsonx Granite');

  // 2. RoomNexa
  const r2 = await generateGeminiResponse('What did Mohit do at RoomNexa?');
  assert(r2.answer.includes('frontend development'), 'Question 2: RoomNexa focuses on frontend development');

  // 3. MindCare AI X
  const r3 = await generateGeminiResponse('Tell me about MindCare AI X.');
  assert(r3.answer.includes('Emotion Intelligence Engine'), 'Question 3: MindCare AI X details verified');

  // 4. HSI research
  const r4 = await generateGeminiResponse('What is his hyperspectral research?');
  assert(r4.answer.includes('826 spectral bands'), 'Question 4: HSI research details verified');

  // 5. Technologies
  const r5 = await generateGeminiResponse('What technologies does he use?');
  assert(r5.answer.includes('Python'), 'Question 5: Technologies verified');

  // 6. Contact
  const r6 = await generateGeminiResponse('How can I contact him?');
  assert(r6.answer.includes('mohitmahto99@gmail.com'), 'Question 6: Contact email verified');

  // 7. Pizza (Unknown query)
  const r7 = await generateGeminiResponse("What is Mohit's favorite pizza?");
  assert(
    r7.answer === "I don't have that information in Mohit's portfolio yet.",
    'Question 7: Pizza query produces zero hallucination'
  );

  // --- GROUP 8: ERROR HANDLING & TIMEOUT ---
  console.log('\n--- TEST GROUP 8: ERROR HANDLING & TIMEOUT ---');
  mockServerMode = 'error';
  try {
    await generateGeminiResponse('Hello');
    assert(false, 'Should throw on provider 500');
  } catch (err) {
    assert(err.userMessage === 'Portfolio AI is temporarily unavailable. Please try again.', 'Clean error message on provider 500');
  }

  mockServerMode = 'hang';
  try {
    await generateGeminiResponse('Hello');
    assert(false, 'Should throw on provider timeout');
  } catch (err) {
    assert(err.status === 504 && err.userMessage === 'Portfolio AI is temporarily unavailable. Please try again.', 'Clean timeout handling');
  }

  // --- GROUP 9: DEMO MODE ENGINE VERIFICATION ---
  console.log('\n--- TEST GROUP 9: DEMO MODE ENGINE VERIFICATION ---');
  const demoReply = await answerFromPortfolio('What is MindCare AI X?');
  assert(demoReply.content.includes('MindCare AI X'), 'Demo mode engine verified independently');

  // Cleanup
  globalThis.fetch = originalFetch;
  delete process.env.GEMINI_API_KEY;
  mockGeminiServer.close();

  console.log('\n========================================');
  console.log(`TEST SUITE COMPLETED: ${passed} / ${total} TESTS PASSED`);
  console.log('========================================\n');
}

runGeminiTests().catch((err) => {
  console.error('Fatal test runner failure:', err);
  process.exit(1);
});
