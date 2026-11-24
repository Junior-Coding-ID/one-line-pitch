import { writeFileSync } from "node:fs";

// A Day of One-Line Pitches — v3 entry.
// One sentence (max 240 chars) to convince a friend who has never coded
// to let an AI agent build their first app idea on make.fun.
const pitch =
  "Pick one thing you want your first app to do, and let's ask an AI agent to build just that on make.fun so you can try it without having to write the code yourself.";

if (pitch.length > 240) {
  throw new Error(`pitch is ${pitch.length} chars, over the 240 limit`);
}

// The grader runs main.ts with no arguments and reads /output.
// An optional first argument overrides the output path (used for testing).
const outPath = process.argv[2] ?? "/output";
writeFileSync(outPath, pitch, "utf8");
