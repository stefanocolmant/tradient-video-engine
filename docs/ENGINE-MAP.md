# Engine map

## Current Tradient

Entry `engines/tradient/src/rebuild/film.tsx`. Default `TradientRulesHandoff`. Canonical score `production-script/visual-direction-v8/film.production.json`.

| Mechanism | Source under `engines/tradient/src/` |
|---|---|
| Editor fields to dimensional chart/configuration | `rebuild/rule-handoff.ts`, `rule-handoff-state.mjs`, `configuration-cinematic.ts` |
| Detailed desk, screen, chart, material response | `rebuild/desk.ts`, `desk-state.mjs`, `chart.ts` |
| Dense updates, fragment assembly, optical inspection | `rebuild/data-craft.ts`, `craft-state.mjs`, `data-shots.ts` |
| Cable jacket, helical strands and internal signal | `rebuild/cable-construction.ts`, `network.ts`, `fiber-entry.ts` |
| Physical order book, fixed price boundary, report return | `rebuild/book-craft.ts`, `craft-state.mjs` |
| Frame-driven event lifecycle and camera | `rebuild/runtime.mjs`, `cinematic-state.mjs` |
| Render surfaces, focus, bloom and grain | `kit/`, `packet-depth.ts` |

## A23 reconstruction library

Entry `engines/reference/production-script/entry.tsx`, independent replay `player.tsx` and explicit `scene-parameters.ts`. Canonical `a23.production.json` includes39 shots and163 second records, construction recipes, layer order and native-clock handling.

Sources in `engines/reference/src`: `cable-macro.ts`, `infrastructure.ts`, `tower-light.ts`, `cutaway-ground.ts`, `marine-shots.ts`, `undersea.ts`, `production-scenes.ts`, `ship-asset.ts`, `globe-shot.tsx`, `phone-radio.ts`, `radio-journey.ts`, `network-shots.ts`, `numbered-packets.ts`, `camera-edit.ts`, and the shared kit. Public substitutions are documented in ASSETS.md.

## CStack workflow

`engines/cstack/src/engine/timeline.ts` and `storyboard.json` retain the separate authored timeline. `production-demo.tsx` has independent6-second network, cable and ship studies. The source namespaces stay separate to preserve each calibrated engine; this intentional duplication avoids changing their relative imports or clocks during publication.
