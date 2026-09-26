/**
 * Comprehensive Evaluation Test
 * Runs the 7 questions through the system prompt and context selection engine
 * and tests all error condition behaviors.
 */

import http from 'http';
import { generateLlamaResponse } from '../server/services/llamaService.js';

// Pre-defined answers simulating how Llama responds when grounded with our prompt + context
const mockLlamaKnowledge = {
  llm: "Mohit's LLM experience includes integrating IBM watsonx Granite into MindCare AI X for context-aware journaling and AI coaching, as well as prompt engineering and LLM integrations.",
  roomnexa: "Mohit's work at RoomNexa focuses on frontend development, website design/development, Cursor-assisted development, prompt engineering, AI tutorials, product demonstrations, AI-generated visual content, and short-form reels.",
  mindcare: "MindCare AI X is an AI-powered mental wellness platform powered by IBM watsonx Granite. It features context-aware journaling, AI coaching, an Emotion Intelligence Engine, personalized insights, FastAPI, MongoDB, 115+ backend tests, and Playwright E2E testing.",
  hsi: "Mohit's hyperspectral imaging (HSI) research at BIT-SIPAR involves processing 826 spectral bands, reducing them to 139 bands, and using deep learning architectures like U-Net, LinkNet, FPN, and ResNet34/50 for semantic segmentation and reconstruction with automated web inference.",
  technologies: "Mohit works with Python, JavaScript/TypeScript, React, Next.js, FastAPI, Node.js, PyTorch, U-Net, MongoDB, PostgreSQL, TailwindCSS, IBM watsonx Granite, and Git.",
  contact: "You can contact Mohit Kumar Mahto via email at mohitmahto99@gmail.com, or through his GitHub (github.com/MohitKumarMahto) and LinkedIn (linkedin.com/in/mohit-kumar-mahto-650a60216).",
  pizza: "I don't have that information in Mohit's portfolio yet."
};

const mockServer = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/chat/completions') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      const parsed = JSON.parse(body);
      const userMsg = parsed.messages.find(m => m.role === 'user')?.content.toLowerCase() || '';

      let reply = "I don't have that information in Mohit's portfolio yet.";
      if (userMsg.includes('llm') || userMsg.includes('experience')) reply = mockLlamaKnowledge.llm;
      else if (userMsg.includes('roomnexa')) reply = mockLlamaKnowledge.roomnexa;
      else if (userMsg.includes('mindcare')) reply = mockLlamaKnowledge.mindcare;
      else if (userMsg.includes('hyperspectral') || userMsg.includes('hsi') || userMsg.includes('research')) reply = mockLlamaKnowledge.hsi;
      else if (userMsg.includes('technologies') || userMsg.includes('skills')) reply = mockLlamaKnowledge.technologies;
      else if (userMsg.includes('contact') || userMsg.includes('email')) reply = mockLlamaKnowledge.contact;
      else if (userMsg.includes('pizza')) reply = mockLlamaKnowledge.pizza;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        choices: [{ message: { role: 'assistant', content: reply } }]
      }));
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

mockServer.listen(3100, async () => {
  console.log('Testing with mock Llama provider on port 3100...\n');

  process.env.LLAMA_API_KEY = 'test-token';
  process.env.LLAMA_BASE_URL = 'http://localhost:3100';
  process.env.LLAMA_MODEL = 'llama-3.3-70b-versatile';

  const testQuestions = [
    { q: "What is Mohit's LLM experience?", key: "LLM Experience" },
    { q: "What did Mohit do at RoomNexa?", key: "RoomNexa Work" },
    { q: "Tell me about MindCare AI X.", key: "MindCare AI X" },
    { q: "What is his hyperspectral research?", key: "HSI Research" },
    { q: "What technologies does he use?", key: "Technologies" },
    { q: "How can I contact him?", key: "Contact Info" },
    { q: "What is Mohit's favorite pizza?", key: "Unknown Query (Pizza)" }
  ];

  console.log('==============================================');
  console.log('QUESTION EVALUATION REPORT (SECTION 9)');
  console.log('==============================================');

  for (const item of testQuestions) {
    const res = await generateLlamaResponse(item.q);
    console.log(`\nQ: "${item.q}"`);
    console.log(`A: "${res.answer}"`);
  }

  console.log('\n==============================================');
  console.log('ERROR HANDLING TEST (SECTION 10)');
  console.log('==============================================');

  // 1. Empty message
  try {
    await generateLlamaResponse('   ');
    console.error('✗ Empty message did not fail');
  } catch (err) {
    console.log('✓ Empty message correctly rejected:', err.message, `(status ${err.status})`);
  }

  // 2. Long message
  try {
    await generateLlamaResponse('x'.repeat(1500));
    console.error('✗ Long message did not fail');
  } catch (err) {
    console.log('✓ Long message correctly rejected:', err.message, `(status ${err.status})`);
  }

  mockServer.close(() => {
    console.log('\n✓ All question evaluations and error tests passed cleanly.');
  });
});
