/**
 * Live end-to-end test against real Gemini API.
 * Tests 6 factual questions + 1 unknown (pizza).
 */

import { readFileSync } from 'fs';

const env = readFileSync('.env', 'utf8');
const key = env.match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();
const model = env.match(/GEMINI_MODEL=(.+)/)?.[1]?.trim() || 'gemini-3.5-flash-lite';

if (!key) { console.error('No GEMINI_API_KEY in .env'); process.exit(1); }

process.env.GEMINI_API_KEY = key;
process.env.GEMINI_MODEL = model;

import { generateGeminiResponse } from '../server/services/geminiService.js';

const questions = [
  { q: "What is Mohit's LLM experience?", expect: ['watsonx', 'Granite', 'MindCare', 'LLM'] },
  { q: "What did Mohit do at RoomNexa?", expect: ['frontend', 'RoomNexa'] },
  { q: "Tell me about MindCare AI X.", expect: ['MindCare', 'Emotion'] },
  { q: "What is his hyperspectral research?", expect: ['826', 'spectral', 'U-Net'] },
  { q: "What technologies does he use?", expect: ['Python', 'React'] },
  { q: "How can I contact him?", expect: ['mohitmahto99@gmail.com'] },
  { q: "What is Mohit's favorite pizza?", expect: ["don't have that information"] }
];

console.log(`\n${'='.repeat(60)}`);
console.log(`LIVE GEMINI API TEST — Model: ${model}`);
console.log(`${'='.repeat(60)}\n`);

let passed = 0;
for (const { q, expect } of questions) {
  try {
    const result = await generateGeminiResponse(q);
    const ans = result.answer;
    const ok = expect.some(e => ans.toLowerCase().includes(e.toLowerCase()));
    const status = ok ? '✓' : '✗';
    console.log(`${status} Q: ${q}`);
    console.log(`  A: ${ans.slice(0, 120)}${ans.length > 120 ? '...' : ''}\n`);
    if (ok) passed++;
    else console.error(`  Expected one of: ${expect.join(', ')}\n`);
  } catch (err) {
    console.error(`✗ Q: ${q}`);
    console.error(`  ERROR: ${err.message} (status ${err.status})\n`);
  }
}

console.log(`${'='.repeat(60)}`);
console.log(`LIVE RESULT: ${passed} / ${questions.length} questions answered correctly`);
console.log(`${'='.repeat(60)}\n`);
if (passed < questions.length) process.exit(1);
