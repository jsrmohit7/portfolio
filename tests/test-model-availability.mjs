import { readFileSync } from 'fs';

const key = readFileSync('.env', 'utf8').match(/GEMINI_API_KEY=(.+)/)?.[1]?.trim();

async function testModel(modelId) {
  const url = 'https://generativelanguage.googleapis.com/v1beta/models/' + modelId + ':generateContent';
  const r = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: 'Reply with only: WORKING' }] },
      contents: [{ role: 'user', parts: [{ text: 'ping' }] }],
      generationConfig: { maxOutputTokens: 10, temperature: 0.0 }
    })
  });
  const d = await r.json();
  const ans = d?.candidates?.[0]?.content?.parts?.[0]?.text;
  return { status: r.status, answer: ans, error: d?.error?.message };
}

const models = ['gemini-2.5-flash-lite', 'gemini-2.5-flash', 'gemini-3.5-flash-lite', 'gemini-3.5-flash'];
for (const m of models) {
  const result = await testModel(m);
  console.log(m + ':', result.status === 200 ? ('✓ OK - ' + result.answer?.trim()) : ('✗ FAIL (' + result.status + ') - ' + result.error));
}
