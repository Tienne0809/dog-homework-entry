import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "The page said 'show all work,' so I ate it in forty bites and showed every piece on the carpet. I followed the instructions exactly. Where is my treat?";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, line + "\n");
