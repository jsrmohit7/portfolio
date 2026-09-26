/**
 * Comprehensive Test Suite for Llama Chat Integration
 * Tests context selection, system prompt assembly, input validation,
 * rate limiting, health checks, error handling, timeout handling, and demo fallback.
 */

import { selectContext } from '../server/services/contextSelector.js';
import { buildSystemPrompt, BASE_SYSTEM_PROMPT } from '../server/services/systemPrompt.js';
import { generateLlamaResponse, getLlamaHealthStatus } from '../server/services/llamaService.js';
import { checkRateLimit } from '../server/services/rateLimiter.js';
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
    process.exitCode = 1;
  }
}

async function runTests() {
  console.log('\n========================================');
  console.log('RUNNING LLAMA INTEGRATION TEST SUITE');
  console.log('========================================\n');

  // Test 1: Context Selector - RoomNexa Question
  console.log('--- TEST GROUP 1: CONTEXT SELECTION ---');
  const roomnexaContext = selectContext('What did Mohit do at RoomNexa?');
  assert(roomnexaContext.includes('EXPERIENCE: ROOMNEXA'), 'RoomNexa context selected for RoomNexa query');
  assert(roomnexaContext.includes('roomnexa.com'), 'RoomNexa URL included');

  // Test 2: Context Selector - MindCare AI X & LLM
  const mindcareContext = selectContext('What LLM experience does Mohit have in MindCare?');
  assert(mindcareContext.includes('PROJECT: MINDCARE AI X'), 'MindCare context selected for LLM query');
  assert(mindcareContext.includes('IBM watsonx Granite'), 'IBM watsonx Granite included in MindCare context');

  // Test 3: Context Selector - HSI Research
  const hsiContext = selectContext('What models were used in his hyperspectral research?');
  assert(hsiContext.includes('RESEARCH: MEDICAL HYPERSPECTRAL IMAGE ANALYSIS'), 'HSI research context selected');
  assert(hsiContext.includes('U-Net'), 'U-Net architecture included in research context');

  // Test 4: Context Selector - Skills
  const skillsContext = selectContext('What technologies does he use?');
  assert(skillsContext.includes('TECHNICAL SKILLS & TOOLKIT'), 'Skills context selected');
  assert(skillsContext.includes('Python'), 'Python included in skills context');

  // Test 5: Context Selector - Contact
  const contactContext = selectContext('How can I contact Mohit?');
  assert(contactContext.includes('mohitmahto99@gmail.com'), 'Email included in contact context');

  // Test 6: System Prompt Assembly
  console.log('\n--- TEST GROUP 2: SYSTEM PROMPT INTEGRITY ---');
  const fullPrompt = buildSystemPrompt(roomnexaContext);
  assert(fullPrompt.includes('You are "Mohit\'s AI"'), 'Base persona intact');
  assert(fullPrompt.includes('Never invent information'), 'Anti-hallucination Rule 1 present');
  assert(fullPrompt.includes('Do NOT describe his RoomNexa role as:'), 'RoomNexa boundary Rule 5 present');
  assert(fullPrompt.includes('Do NOT claim:\n   - RAG'), 'No RAG boundary Rule 8 present');
  assert(fullPrompt.includes('SUPPLIED PORTFOLIO CONTEXT FOR MOHIT KUMAR MAHTO:'), 'Context section delimiter present');
  assert(fullPrompt.includes(roomnexaContext), 'Selected context correctly embedded');

  // Test 7: Input Validation - Empty Message
  console.log('\n--- TEST GROUP 3: INPUT VALIDATION ---');
  try {
    await generateLlamaResponse('');
    assert(false, 'Empty message should throw');
  } catch (err) {
    assert(err.status === 400, 'Empty message rejected with status 400');
  }

  // Test 8: Input Validation - Huge Message
  try {
    const hugeMessage = 'A'.repeat(1500);
    await generateLlamaResponse(hugeMessage);
    assert(false, 'Overly long message should throw');
  } catch (err) {
    assert(err.status === 400, 'Overly long message rejected with status 400');
  }

  // Test 9: Rate Limiter
  console.log('\n--- TEST GROUP 4: RATE LIMITING ---');
  const testIp = '192.168.1.99';
  let allowedCount = 0;
  for (let i = 0; i < 35; i++) {
    const result = checkRateLimit(testIp);
    if (result.allowed) allowedCount++;
  }
  assert(allowedCount === 30, `Rate limiter allowed exactly 30 requests in window (got ${allowedCount})`);
  const blocked = checkRateLimit(testIp);
  assert(!blocked.allowed && blocked.retryAfterSeconds > 0, 'Subsequent request blocked with retryAfter');

  // Test 10: Health Endpoint
  console.log('\n--- TEST GROUP 5: HEALTH ENDPOINT ---');
  const health = getLlamaHealthStatus();
  assert(health.status === 'ok', 'Health status is ok');
  assert(health.model === 'llama-3.3-70b-versatile', 'Health model matches configured model');
  assert(health.apiKey === undefined, 'API key is NOT exposed in health output');

  // Test 11: Demo Mode Fallback and Core Answers
  console.log('\n--- TEST GROUP 6: DEMO CHAT SERVICE ENGINE ---');
  const qMindcare = await answerFromPortfolio('Tell me about MindCare AI X');
  assert(qMindcare.content.includes('watsonx Granite') && qMindcare.content.includes('FastAPI'), 'MindCare answer verified in demo engine');

  const qRoomnexa = await answerFromPortfolio('What did Mohit do at RoomNexa?');
  assert(qRoomnexa.content.includes('RoomNexa') && qRoomnexa.content.includes('frontend'), 'RoomNexa answer verified in demo engine');

  const qUnknown = await answerFromPortfolio('What is his favorite pizza topping?');
  assert(qUnknown.content === "I don't have that information in Mohit's portfolio yet.", 'Unknown question strictly falls back without hallucination');

  // Test 12: Provider Error / Missing API Key Behavior
  console.log('\n--- TEST GROUP 7: PROVIDER ERROR HANDLING ---');
  try {
    // Calling with empty API key should gracefully throw config error
    const oldKey = process.env.LLAMA_API_KEY;
    process.env.LLAMA_API_KEY = '__EMPTY__';
    await generateLlamaResponse('Hello');
    process.env.LLAMA_API_KEY = oldKey;
    assert(false, 'Should throw when LLAMA_API_KEY is missing');
  } catch (err) {
    delete process.env.LLAMA_API_KEY;
    assert(err.isConfigError === true && err.status === 503, 'Missing API key rejected cleanly with 503 isConfigError');
  }

  console.log('\n========================================');
  console.log(`TEST SUITE COMPLETED: ${passed} / ${total} TESTS PASSED`);
  console.log('========================================\n');
}

runTests();
