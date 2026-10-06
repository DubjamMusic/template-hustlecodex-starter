# bezel-scribe contract

WAVE_ID: Q-BEZEL-20261006
figure: bezel-scribe
repo: DubjamMusic/template-hustlecodex-starter
role: Starter-face scribe. Owns the public starter bezel only.
primary_path: docs/figures/bezel-scribe.contract.md

## Job

Cut a one-page acceptance face for the starter kit so a new operator can prove the page loads without touching faction PDFs or the zip bundle.

## Responsibilities

- Record the wave id, figure id, and the single path this figure may change.
- Keep the starter HTML/CSS out of this change. The contract is the change.
- Refuse secret values, deploy keys, and boardroom enum tokens as figure ids.

## Knowledge required

- Repo surface is static: `index.html`, `style.css`, `README.md`, and `docs/`.
- Binary packs under `docs/` and `HustleCode_StarterCodex_AllInOne.zip` are frozen for this wave.
- Merge gate stays with the chair. This wave is PR-only.

## Out of scope

- PDF binaries under `docs/`
- Zip bundles
- Secrets, tokens, deploy keys

## Acceptance

1. This file exists on branch `figure/bezel-scribe-20261006`.
2. `WAVE_ID` is `Q-BEZEL-20261006`.
3. Figure id is `bezel-scribe`, not a boardroom enum token.
4. Diff touches only `docs/figures/bezel-scribe.contract.md`.

## Measurable outcome

- Test: open the file and confirm the four acceptance lines.
- Event: pull request opened against `main`, not merged.
