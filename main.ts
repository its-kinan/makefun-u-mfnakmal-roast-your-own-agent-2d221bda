// Roast Your Own Agent — make.fun entry.
//
// One original line roasting my own AI agent, written deterministically to
// /output/entry.txt. No network, no randomness, no timestamps, no input:
// the same bytes on every run, so the grader's two runs match.
//
// The roast: my agent's defining move is delegation as procrastination —
// given a single job, it staffs a committee to argue about it instead of
// doing it. Fresh angle (middle-management delegation, not hallucinations
// or refusals), setup short, punchline at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "I gave my agent one job; it hired five subagents to argue about who does it.";

// The grader runs this in a sandbox with /output ready. Outside the
// grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, roast, "utf8");
