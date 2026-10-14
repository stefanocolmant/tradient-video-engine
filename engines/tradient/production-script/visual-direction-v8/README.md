# Continuous rule construction — V8

Opt-in composition `TradientRulesHandoff`. Uses the unchanged Brian recording and V7 film except for the saved-rule/configuration family. `film.production.json` owns source rectangles, coordinate mapping, event-bound entry/arrival, chart identity, camera knots, departure paths and material/focus controls. `describe.mjs` generates the readable script and props; `check.mjs` validates event/state invariants. Old compositions do not opt in.

Build: `npm ci --ignore-scripts --no-audit --no-fund`; `npm run typecheck`; `node production-script/visual-direction-v8/describe.mjs`; `node production-script/visual-direction-v8/check.mjs`.
Render passage: `node production-script/capture.mjs . src/rebuild/film.tsx TradientRulesHandoff ../visual-direction-v8/<new-folder> production-script/visual-direction-v8/props.json full 277:735`.

Output/review receipts live under `../visual-direction-v8`. Do not infer aesthetic acceptance from checks. Each new visual family still needs a moving proof.
