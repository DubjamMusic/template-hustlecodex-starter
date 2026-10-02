/**
 * Wave Q plumb — plumb-gauge
 * Repo: template-hustlecodex-starter
 * Role: scaffold plumb. Measures whether the starter still has its three
 * public surfaces (README, index, style) without reading archives or secrets.
 * Knowledge required: repo is static HTML/CSS plus docs; no package.json.
 * This figure does not unzip HustleCode_StarterCodex_AllInOne.zip and does
 * not replace any prior figure (none shipped here).
 * Primary path: docs/figures/plumb-gauge.contract.js
 */
const WAVE_ID = "Q-plumb-20261002";
const FIGURE_ID = "plumb-gauge";
const ROLE = "scaffold-plumb";

const REQUIRED_SURFACES = ["README.md", "index.html", "style.css"];
const SECRET_KEYS = ["apikey", "api_key", "secret", "token", "password"];

function plumbScaffold(presentFiles) {
  if (!Array.isArray(presentFiles)) {
    throw new Error("plumb-gauge expected a file list");
  }
  const present = new Set(presentFiles);
  const missing = REQUIRED_SURFACES.filter((name) => !present.has(name));
  return {
    waveId: WAVE_ID,
    figureId: FIGURE_ID,
    role: ROLE,
    missing,
    plumb: missing.length === 0,
  };
}

function rejectsSecrets(payload) {
  return Object.keys(payload).some((key) =>
    SECRET_KEYS.includes(String(key).toLowerCase().replace(/[-\s]/g, "_")),
  );
}

/** Measurable self-check. Expected: ok=true, secretBlocked=true, missing=0. */
function selfCheck() {
  const gauged = plumbScaffold(["README.md", "index.html", "style.css", "docs/"]);
  return {
    ok: gauged.plumb === true && gauged.missing.length === 0,
    secretBlocked: rejectsSecrets({ apiKey: "not-a-real-value", surface: "index.html" }),
    missing: gauged.missing.length,
  };
}

module.exports = {
  WAVE_ID,
  FIGURE_ID,
  ROLE,
  REQUIRED_SURFACES,
  plumbScaffold,
  rejectsSecrets,
  selfCheck,
};

if (require.main === module) {
  const result = selfCheck();
  console.log(JSON.stringify(result));
  if (!result.ok || !result.secretBlocked) process.exit(1);
}
