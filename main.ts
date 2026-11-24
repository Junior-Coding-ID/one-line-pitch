import { mkdirSync, writeFileSync } from "node:fs";

// v4: nada teman yang mendorong, bukan instruksi. v3 kalah karena
// berbunyi seperti perintah ("pick one thing", "build just that") dan
// kehilangan daya bujuk. v4 ini membuka dengan membangun percaya diri
// pemula, lalu memberi kontrol ke pengguna untuk menentukan perubahan.
const PITCH =
  "You don't need to know how to code to know what would make your life easier, so describe your first app idea to an AI agent, let it build a version on make.fun, and try it before deciding what to change.";

if (PITCH.length !== 203) {
  throw new Error(`pitch must be exactly 203 characters, got ${PITCH.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
