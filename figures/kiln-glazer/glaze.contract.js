/**
 * kiln-glazer — Wave Q glaze
 * Repo: DubjamMusic/template-hustlecodex-starter
 * Primary path: figures/kiln-glazer/glaze.contract.js
 *
 * Job: starter-surface inspector.
 * Knowledge: a shippable starter must expose README, index, and style
 * before a figure wave claims the template is glazed.
 * Does not touch secrets, does not merge, does not rewrite faction cards.
 */

const WAVE_ID = "Q-glaze-20261009";
const FIGURE_ID = "kiln-glazer";
const REQUIRED_SURFACES = ["README.md", "index.html", "style.css"];

function glazeStarter(surfaces) {
  const present = new Set(surfaces || []);
  const missing = REQUIRED_SURFACES.filter((name) => !present.has(name));
  return {
    waveId: WAVE_ID,
    figureId: FIGURE_ID,
    role: "starter-surface inspector",
    pass: missing.length === 0,
    missing,
    prestigeHint: missing.length === 0 ? "surface-ready" : "surface-gap",
  };
}

function selfCheck() {
  const ok = glazeStarter(REQUIRED_SURFACES);
  const gap = glazeStarter(["README.md"]);
  if (!ok.pass) throw new Error("expected full starter surface to pass");
  if (gap.pass || gap.missing.length !== 2) {
    throw new Error("expected missing index.html and style.css");
  }
  return { figureId: FIGURE_ID, waveId: WAVE_ID, checks: 2, pass: true };
}

module.exports = { WAVE_ID, FIGURE_ID, REQUIRED_SURFACES, glazeStarter, selfCheck };

if (require.main === module) {
  const result = selfCheck();
  process.stdout.write(JSON.stringify(result) + "\n");
}
