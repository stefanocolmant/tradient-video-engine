# V5: meaningful dimensional trading scenes

This is the replacement candidate for the rejected V4. It is not an approved aesthetic benchmark and does not establish parity with A23. Existing films and scene implementations remain preserved.

## Inputs and playback

- `film.production.json`: canonical versioned specification. It selects TradientRulesCinematic, 2446 frames, 30fps, 720×1280.
- `props.json`: render input generated from the same score.
- `PRODUCTION-SCRIPT.md` / `.html`: 82 individual second records including the partial final second, actual event intervals, cameras, quantities and construction recipes.
- `../../src/rebuild/*-cinematic.ts`: new configuration, market-data, execution/report and comparison scene adapters.
- `../../src/rebuild/cinematic-state.mjs`: required construction settings, event-bound timing resolution, exact threshold crossing and quantity validation.
- `../../src/fiber-entry.ts`: saved A23 fiber geometry, adapted through a coordinate transform and a separate native animation clock. No original complete-film composition or footage is used.
- `../../public/cinematic-master-v5.wav`: same Brian performance and music source, effects rebuilt from 42 declared sound cues; no voice rate or pitch change.

## Rebuild from a clean source archive

Use the committed package-lock; do not copy node_modules from a working machine. This session's node_modules symlink points to a temporary clean npm runtime because the previous dependency directory had been offloaded by iCloud. It is not part of the package.

```sh
npm ci --no-audit --no-fund
npm run typecheck
node production-script/visual-direction-v5/check.mjs
node production-script/visual-direction-v5/describe.mjs
node production-script/capture.mjs . src/rebuild/film.tsx TradientRulesCinematic ../capture-v5 production-script/visual-direction-v5/props.json full
python3 production-script/rebuild/export.py ../capture-v5 ../Tradient-Rules-Before-Reactions-v5.mp4 .
```

The capture helper installs/uses the pinned Remotion Chromium at a short cache path and saves its hash and environment. Preserve prior output folders. To rebuild audio separately, run `python3 production-script/visual-direction-v5/audio.py` in a clean source package before the target WAV exists; numpy/scipy and ffmpeg are required. The frozen supplied WAV avoids requiring audio dependencies for a normal render.

## What changed

- Geometry is connected to actual data: price-height crossing, failed records returning to history, empty outbound slots, three quantity units, a fixed price limit, two matched units and a separate report.
- Native A23 fiber geometry replaces the simple connector interior.
- Configuration/data and execution/report use authored continuous cameras; execution and reporting share one world across their cut.
- The renderer receives real hero/sky groups for depth treatment. An empty list no longer stands in for an actual subject mask.
- Every script second records its actual action and exact frame state. Events, camera paths and audio cue positions are consumed, while prose and recipes explain the authored construction.

## New-film quality gate

Do not use V4 as a visual benchmark. Reproducing A23 established replay capability only. For a new scene, state the represented object, the cause of its change and its relationship to the spoken phrase; author geometry and camera travel; inspect moving proofs beside A23 at native and phone size. Dense geometry and passing tests do not qualify a scene by themselves. Wholly new visuals still need new construction and review.

Keep the old scheduled iteration loop paused. No purchases, public publishing or live trading systems are part of this production.
