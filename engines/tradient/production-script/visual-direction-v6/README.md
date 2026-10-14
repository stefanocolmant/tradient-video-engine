# V6 optical market and execution revision

This is a separately versioned candidate for the Rules Before Reactions reel. A23 remains the visual target; V4 was rejected and V5 was insufficient. Technical checks are not aesthetic acceptance.

## Build

Use the pinned package-lock.json with Node v25.2.1 (the recorded capture environment) and npm ci. The capture profile pins the Chromium executable hash, ANGLE rendering and CPU canvas rasterization. Original Brian narration and the music source remain unchanged; the new master adds effects tied to the same production events.

```sh
npm ci --ignore-scripts --no-audit --no-fund
node production-script/visual-direction-v6/describe.mjs
npm run typecheck
node production-script/visual-direction-v6/check.mjs
node production-script/capture.mjs . src/rebuild/film.tsx TradientRulesCraft /absolute/new-capture production-script/visual-direction-v6/props.json full
python3 production-script/rebuild/export.py /absolute/new-capture /absolute/new-movie.mp4 .
python3 production-script/qa-export.py /absolute/new-movie.mp4 public/craft-master-v6.wav /absolute/new-QA.json
```

Capture and export refuse to overwrite completed results. Heavy captures run sequentially. For a short proof, use the final two capture arguments `full 736:1165` (inclusive global frames); export keeps the matching source-audio offset. Do not stretch or lower the pitch of Brian's recording.

## Authoring and reuse

`film.production.json` is canonical: 82 authored second records, eight construction recipes, exact event timing, camera paths, object identities and state relationships. `describe.mjs` resolves its camera/state and generates the readable production script and executable props. It preserves the authored direction, rather than regenerating it from a generic template. `CRAFT-LESSONS.md` records concrete proof failures and the construction corrections.

Scene adapters are `src/rebuild/data-craft.ts` and `book-craft.ts`; shared V6 flags in the desk, configuration and comparison builders preserve older compositions. `craft-state.mjs` defines seek-safe optical phases and report/camera motion. The imported A23 lens and depth pass remain editable components. New visuals require newly authored geometry, correspondence, camera paths and moving proof: this package does not promise arbitrary high-quality scenes from narration alone.

The final QA and delivery receipt live beside the movie; their coverage must be read separately from this build guide. Previous versions and failed proofs are retained. The old scheduled loop remains paused.
