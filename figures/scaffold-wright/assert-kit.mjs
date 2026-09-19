#!/usr/bin/env node
import { readFileSync, statSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const manifest = JSON.parse(
  readFileSync(join(root, "figures/scaffold-wright/kit-manifest.json"), "utf8")
);

const BANNED = ["planner", "executor", "monitor", "data_agent"];
if (manifest.figureId !== "scaffold-wright") throw new Error("wrong figureId");
if (BANNED.includes(manifest.figureId)) throw new Error("boardroom clone");
if (manifest.mergePolicy !== "pr-only") throw new Error("merge policy");

for (const rel of manifest.requiredLive) {
  const p = join(root, rel);
  if (!existsSync(p)) throw new Error(`missing live file: ${rel}`);
  if (statSync(p).size === 0) throw new Error(`live file empty: ${rel}`);
}

let emptyHits = 0;
for (const rel of manifest.knownEmpty) {
  const p = join(root, rel);
  if (!existsSync(p)) throw new Error(`knownEmpty path missing: ${rel}`);
  if (statSync(p).size === 0) emptyHits += 1;
}
if (emptyHits !== manifest.knownEmpty.length) {
  throw new Error(`empty-blob count drift: ${emptyHits}");
}

console.log("ok scaffold-wright kit");
