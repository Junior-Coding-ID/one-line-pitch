import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const pitch =
  "Pick one thing you want your first app to do, and let's ask an AI agent to build just that on make.fun so you can try it without having to write the code yourself.";

if (pitch.length > 240) {
  throw new Error(`pitch too long: ${pitch.length} characters (max 240)`);
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), pitch, "utf8");
