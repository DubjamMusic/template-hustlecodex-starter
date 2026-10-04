/**
 * kiln-spar — Wave Q spar
 * Repo: template-hustlecodex-starter
 * Job: stamp starter-bundle readiness without rewriting PDFs or zips.
 * Run: node docs/kiln-spar.contract.js
 */
'use strict';

const WAVE_ID = 'Q-20261004-spar';
const FIGURE_ID = 'kiln-spar';

function clampScore(value) {
  if (typeof value !== 'number' || Number.isNaN(value)) return 0;
  return Math.max(0, Math.min(100, Math.round(value)));
}

function kilnReadiness(input) {
  const nodes = clampScore(input.nodes);
  const velocity = clampScore(input.velocity);
  const streak = clampScore(input.streak);
  const decision = clampScore(input.decision);
  const density = Math.round(
    Math.pow(nodes * velocity * streak * decision, 0.25)
  );
  const ready = density >= 60 && nodes >= 50 && decision >= 50;
  return {
    figureId: FIGURE_ID,
    waveId: WAVE_ID,
    primaryPath: 'docs/kiln-spar.contract.js',
    nodes,
    velocity,
    streak,
    decision,
    density,
    ready,
    nextAction: ready ? 'ship-starter-checklist' : 'reheat-decision',
  };
}

function assert(cond, message) {
  if (!cond) throw new Error(message);
}

function selfCheck() {
  const hot = kilnReadiness({ nodes: 80, velocity: 70, streak: 75, decision: 82 });
  assert(hot.ready === true, 'hot kiln should be ready');
  assert(hot.density >= 60, 'hot density floor');
  assert(hot.figureId === 'kiln-spar', 'figure id drift');
  const cold = kilnReadiness({ nodes: 20, velocity: 90, streak: 90, decision: 20 });
  assert(cold.ready === false, 'cold decision must block ready');
  const junk = kilnReadiness({ nodes: -5, velocity: 140, streak: 'nope', decision: 50 });
  assert(junk.nodes === 0 && junk.velocity === 100 && junk.streak === 0, 'clamp failed');
  return { passed: 3, waveId: WAVE_ID, figureId: FIGURE_ID };
}

module.exports = { kilnReadiness, WAVE_ID, FIGURE_ID, selfCheck };

if (require.main === module) {
  const result = selfCheck();
  console.log(JSON.stringify(result));
}
