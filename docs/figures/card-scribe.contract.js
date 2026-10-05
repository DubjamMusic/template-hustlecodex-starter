/**
 * Wave Q prism — card-scribe
 * Repo: template-hustlecodex-starter
 * Role: faction card stamper for the starter download shelf.
 * Knowledge required: only the three published starter skus may
 * receive a stamp. PDF binaries and social links stay untouched.
 * Primary path: docs/figures/card-scribe.contract.js
 *
 * Measurable check:
 *   node docs/figures/card-scribe.contract.js
 * Expected stdout: {"pass":true,"unknownRejected":true,"shelf":3}
 */
"use strict";

const WAVE_ID = "Q-prism-20261005";
const FIGURE_ID = "card-scribe";
const ROLE = "faction-stamper";

const SHELF = Object.freeze([
  "faction-cards",
  "starter-codex",
  "hardware-quickstart",
]);

function stamp(sku) {
  const trimmed = String(sku || "").trim();
  if (!SHELF.includes(trimmed)) {
    throw new Error("card-scribe only stamps published starter skus");
  }
  return {
    waveId: WAVE_ID,
    figureId: FIGURE_ID,
    role: ROLE,
    sku: trimmed,
    stamped: true,
  };
}

function isStamped(card) {
  return (
    card &&
    card.figureId === FIGURE_ID &&
    card.stamped === true &&
    SHELF.includes(card.sku)
  );
}

function selfCheck() {
  const card = stamp("faction-cards");
  let unknownRejected = false;
  try {
    stamp("secret-bundle");
  } catch (_err) {
    unknownRejected = true;
  }
  return {
    pass: isStamped(card) && card.role === ROLE,
    unknownRejected,
    shelf: SHELF.length,
  };
}

module.exports = { WAVE_ID, FIGURE_ID, ROLE, SHELF, stamp, isStamped, selfCheck };

if (require.main === module) {
  process.stdout.write(JSON.stringify(selfCheck()));
}
