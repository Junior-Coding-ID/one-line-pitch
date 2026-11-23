import { mkdirSync, writeFileSync } from 'node:fs';

const TEXT =
  'Tell an AI agent on make.fun what your app idea should do, and it builds the whole thing while you watch — no coding, no experience needed, just your idea.';

const argv = process.argv.slice(2);
const flagIdx = argv.indexOf('--output');
const flagDir = flagIdx >= 0 ? argv[flagIdx + 1] : undefined;

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? flagDir ?? './output';

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, TEXT, 'utf8');
