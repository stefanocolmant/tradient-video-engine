# Working on films in this engine

Read README.md, docs/AUTHORING.md, docs/QUALITY.md and the relevant scene recipes before authoring. Keep previous film versions. Do not automatically substitute the rejected historical machine/panel scenes for the detailed current examples.

1. Turn the narration into causal visual actions. For each object, say what it represents, what changes it, and how that explains the spoken phrase.
2. Write canonical versioned production data before building: every second, exact frames inside it, object identity, before/after state, camera, materials, lighting, supporting motion, audio and handoff.
3. Distinguish reusable geometry from new adapters that still require implementation. Labels are not an animation recipe.
4. Bind action phases to narration events. Missing required events must fail validation. Preserve scene clocks and shared identities across cuts. Avoid accumulated delta-time state.
5. Build three moving passages first: opening, hardest transformation, resolution. Compare projected scale, depth, material response and camera progression against the detailed saved scenes.
6. Inspect native and phone size, transitions, backward seeks, chronology and conservation. Never equate passing a state test or decoder with aesthetic approval.
7. Save script, generated readable directions, exact changes, failed proofs, source commit and review coverage. Never claim coverage that was not performed.
8. Default exports use tools/engine.mjs. Keep credentials in ignored local files. No purchases or publication without user instruction. Never connect this illustration engine to live trading.

For new scripts, maintain strong visual continuity while inventing the right objects for the subject. Do not promise a script alone guarantees A23-level new choreography.
