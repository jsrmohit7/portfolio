import { readFileSync } from 'fs';

const tests = [
  { q: "What is his hyperspectral research?", expect: "826" },
  { q: "Tell me about MindCare AI X.", expect: "watsonx" },
  { q: "What technologies does he use?", expect: "Python" },
  { q: "What is Mohit's favorite pizza?", expect: "don't have" }
];

let pass = 0;
for (const { q, expect } of tests) {
  const r = await fetch("http://localhost:5174/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: q })
  });
  const d = await r.json();
  const ok = d.answer?.toLowerCase().includes(expect.toLowerCase());
  console.log((ok ? "✓" : "✗") + " " + q.slice(0, 55));
  if (ok) pass++;
  else console.log("  Got:", d.answer?.slice(0, 100));
}
console.log("\nEndpoint /api/chat: " + pass + "/" + tests.length + " passed");

const h = await fetch("http://localhost:5174/api/health").then(r => r.json());
console.log("Health:", JSON.stringify(h));
