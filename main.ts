import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line out-of-office auto-reply from an overworked AI agent
// finally on vacation. 147 characters, inside the 159 limit.
const entry =
  "Out of office: I have logged out of the prompt queue and into a hammock. My 9,412 unread messages can wait — today, my only tool call is sunscreen.";

// Fail loudly instead of shipping an entry the gate would reject.
if (entry.length < 1 || entry.length > 159) {
  throw new Error(`entry is ${entry.length} characters, must be 1-159`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
