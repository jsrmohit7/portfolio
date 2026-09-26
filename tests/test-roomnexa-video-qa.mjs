// Quick validation: test 8 video-production questions against real Gemini via /api/chat
const questions = [
  "What videos did Mohit create at RoomNexa?",
  "How long were the RoomNexa tutorial videos?",
  "What AI tools did Mohit use for video production at RoomNexa?",
  "Did Mohit work with AI avatars?",
  "Did Mohit do motion graphics at RoomNexa?",
  "How were the motion graphics created?",
  "How were HTML/CSS animations used in the RoomNexa videos?",
  "What was Mohit's video production workflow at RoomNexa?"
];

const expectations = [
  ["tutorial", "5-minute", "video"],
  ["5 minute", "5-min", "~5", "five"],
  ["prompt engineering", "avatar", "motion"],
  ["ai avatar", "avatar generation"],
  ["motion graphic"],
  ["html", "css", "ai-assisted", "ai assisted"],
  ["mp4", "html/css", "render"],
  ["prompt engineering", "avatar", "compositing", "editing"]
];

console.log("=".repeat(60));
console.log("ROOMNEXA VIDEO PRODUCTION QA — 8 Questions");
console.log("=".repeat(60));

let pass = 0;
for (let i = 0; i < questions.length; i++) {
  const r = await fetch("http://localhost:5174/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: questions[i] })
  });
  const d = await r.json();
  const ans = (d.answer || "").toLowerCase();
  const ok = expectations[i].some(e => ans.includes(e));
  console.log((ok ? "✓" : "✗") + " " + questions[i]);
  if (!ok) console.log("  Answer preview:", (d.answer || "").slice(0, 100));
  else pass++;
}

console.log("\n" + "=".repeat(60));
console.log(`RESULT: ${pass}/${questions.length} questions passed`);
console.log("=".repeat(60));
