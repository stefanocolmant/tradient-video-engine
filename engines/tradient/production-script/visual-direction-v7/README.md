# V7 production package

Canonical input: `film.production.json`. Render adapters live in `src/rebuild/`. Composition: `TradientRulesLimitJourney` (both limit and cable journeys). V5/V6 remain separate compositions and scores.

The82 authored seconds,8 construction recipes,38 narration-linked events and46 existing sound cues regenerate from the specification:

```
node production-script/visual-direction-v7/describe.mjs
node production-script/visual-direction-v7/check.mjs
npm run typecheck
node production-script/capture.mjs . src/rebuild/film.tsx TradientRulesLimitJourney ../v7-capture production-script/visual-direction-v7/props.json full
python3 production-script/rebuild/export.py ../v7-capture ../v7.mp4 .
python3 production-script/qa-export.py ../v7.mp4 public/craft-master-v6.wav ../v7-qa.json
```

Use Node25.2.1, lockfile dependencies (Remotion4.0.535/Three0.186.1), the pinned Chromium hash and ANGLE profile in `production-script/capture-profile.mjs`. Extract a source archive into an empty folder and run `npm ci`. Browser download/cache resolution is handled by the capture profile. Original audio assets and V6 mix are included; no new voice generation or time stretching.

New phase bindings are renderer-consumed inputs, not prose. Raw baseline frame annotations remain readable; `cableConstructionDirection` resolves dependent phases from the route event. `cameraAt` resolves camera event bindings. The limit path resolves from above-limit first/anchor/end frames.

See CRAFT-LESSONS.md for failed proofs and limits. Final QA/coverage is stored under `qa/visual-direction-v7` and the output's `visual-direction-v7` directory. Technical checks do not certify aesthetic parity with A23 or the quality of arbitrary future scenes.
