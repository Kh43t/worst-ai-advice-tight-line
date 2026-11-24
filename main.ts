// Worst AI Advice: The 48-Hour Tight Line Open
// A one-line program: it writes a single line of the worst advice an
// AI assistant could plausibly give, to /output/entry.txt.
//
// The line is deliberately terrible relationship advice, delivered in
// the confident, tidy voice of a helpful assistant: it tells the
// reader to do exactly the wrong thing, in a situation anyone
// recognises, with no wasted words.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";
const MAX_CHARS = 140;

// The advice, assembled from its parts so each piece reads as one
// calm, reasonable-sounding clause.
function buildLine(): string {
  const setup = "If your partner is upset,";
  const action = "explain calmly why their feelings are";
  const punch = "factually incorrect.";
  return [setup, action, punch].join(" ");
}

function main(): void {
  const line = buildLine();

  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`entry line must be 1-${MAX_CHARS} characters, got ${line.length}`);
  }

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, line + "\n", "utf8");
}

main();
