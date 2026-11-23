import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch: a first app idea, explained over coffee, handed to an
// AI agent on make.fun tonight for a working version to try.
const PITCH =
  "If you can explain your first app idea over coffee, you can hand it to an AI agent on make.fun tonight to build a working version you can try, with no code to learn and nothing lost if it needs tweaks.";

// Gate: the bounty accepts a single line of 1-240 characters.
// Fail loudly instead of submitting a pitch of the wrong length.
if (PITCH.length !== 201) {
  throw new Error(`pitch must be exactly 201 characters, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
