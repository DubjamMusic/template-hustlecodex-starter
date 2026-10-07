/** node figures/kiln-binder.check.mjs */
import { readFileSync } from "node:fs";

const contract = JSON.parse(readFileSync(new URL("./kiln-binder.contract.json", import.meta.url), "utf8"));
const w = contract.weights;
const sum = w.nodes + w.velocity + w.streak + w.decision;
if (Math.abs(sum - 1) > 1e-9) {
  console.error("FAIL weights", sum);
  process.exit(1);
}
if (contract.figureId !== "kiln-binder" || contract.waveId !== "Q-keel-20261007") {
  console.error("FAIL identity");
  process.exit(1);
}
if (!contract.checklist.includes("no-secret-env")) {
  console.error("FAIL missing secret guard");
  process.exit(1);
}
const scores = { nodes: 8, velocity: 7, streak: 6, decision: 9 };
const density = Math.pow(
  scores.nodes ** w.nodes *
    scores.velocity ** w.velocity *
    scores.streak ** w.streak *
    scores.decision ** w.decision,
  1
);
const keel = `keel:kiln-binder:${contract.checklist.length}:${density.toFixed(3)}`;
if (!keel.startsWith("keel:kiln-binder:4:")) {
  console.error("FAIL keel", keel);
  process.exit(1);
}
console.log("PASS", keel);
