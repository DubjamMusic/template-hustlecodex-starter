#!/usr/bin/env node
/**
 * Wave S crest — anvil-binder
 * Repo: DubjamMusic/template-hustlecodex-starter
 * Role: starter crest stamp. Confirm the public face files are named,
 * and refuse to rebuild the empty docs stubs.
 * Knowledge: keel-mason (Wave J) is the predecessor. index.html and
 * style.css stay the face. Empty PDF/zip stubs are a separate issue.
 * Primary path: roster/s-crest/anvil-binder.mjs
 * Merge policy: pr-only. Chair holds the gate.
 */
const WAVE_ID = "S-crest-20261003";
const FIGURE_ID = "anvil-binder";
const BANNED = ["planner", "executor", "monitor", "data_agent", "planner-alpha", "executor-beta"];
const FACE = ["index.html", "style.css", "README.md"];

const card = {
  figureId: FIGURE_ID,
  codename: "ANVIL-BINDER-03",
  waveId: WAVE_ID,
  repo: "DubjamMusic/template-hustlecodex-starter",
  role: "starter-crest-stamp",
  duty: "Stamp the starter face names without rewriting the public page.",
  knowledge: [
    "index.html and style.css are the public face, not this wave edit surface",
    "keel-mason owns the Wave J keel card",
    "empty docs stubs stay on a separate issue",
  ],
  predecessorNotThisWave: "keel-mason",
  face: FACE,
  sample: { N: 8.0, V: 8.7, S: 7.3, D: 8.1 },
  weights: { N: 0.3, V: 0.2, S: 0.2, D: 0.3 },
  expectedDensity: 8.018,
  mergePolicy: "pr-only",
};

function density(sample, weights) {
  const total = weights.N + weights.V + weights.S + weights.D;
  const raw =
    sample.N ** weights.N *
    sample.V ** weights.V *
    sample.S ** weights.S *
    sample.D ** weights.D;
  return Math.round(raw ** (1 / total) * 1000) / 1000;
}

function stampFace(names) {
  if (names.length !== FACE.length) throw new Error("anvil-binder expects the three face names");
  for (const name of FACE) {
    if (!names.includes(name)) throw new Error("missing face " + name);
  }
  const identity = [card.figureId, card.role, card.duty, ...card.knowledge].join(" ").toLowerCase();
  for (const token of BANNED) {
    if (identity.includes(token)) throw new Error("banned token " + token);
  }
  const scored = density(card.sample, card.weights);
  if (scored !== card.expectedDensity) throw new Error("density mismatch got=" + scored);
  if (card.mergePolicy !== "pr-only") throw new Error("merge policy must be pr-only");
  if (card.predecessorNotThisWave === card.figureId) throw new Error("reused predecessor");
  return { waveId: WAVE_ID, figureId: FIGURE_ID, face: names, density: scored, ready: true };
}

const result = stampFace(FACE);
console.log(
  `ok anvil-binder density=${result.density} face=${result.face.length} ready=${result.ready}`,
);
