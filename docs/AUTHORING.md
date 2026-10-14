# Author a film from meaning

## Start with the explanation

Specify audience, a single takeaway, narration, duration, and what the viewer must understand at each phrase. Establish which assets you own. Record narration as a continuous performance and align words before final timing. The included Brian take is an example asset, not a voice model.

Run `npm run new-film -- name`. Fill its canonical production specification. Copy an existing complete score only when intentionally adapting that authored film; a general blank template cannot be passed straight to the trading-only adapter.

## Required direction for every second

Include the final partial second. Each second records narration and visible text; what enters, changes, interacts, holds and leaves; foreground/context/background; camera eye, target, projection, path and focus; precise intra-second event frames and easing; material/light response; sound onset and why; previous-state continuity and next-shot handoff. For a hold, say what stays fixed and what continues moving. Generate readable documentation from the same records that the renderer consumes.

Each scene also needs a construction recipe: geometry dimensions, hierarchy, assembly, materials/textures/shaders, light/shadow setup, camera control points, formulas, seeds, constraints, component and asset paths, adjustable parameters, coupled parameters and failure cases. `scene: cable` is insufficient; explain how the surface pulse ends where the internal signal starts, how the camera crosses the jacket, and how scale/light/focus remain continuous.

## Use the library without inheriting the wrong story

`engines/tradient/src/rebuild/film.tsx` registers examples; each family adapter returns geometry, an absolute-frame update and optional camera/depth instructions. `runtime.mjs` validates events and evaluates state. V8's rule-handoff adapter is a concrete example: pixels from three actual editor fields leave their screen coordinates, travel into dimensional data, then yield to geometry on the spoken cues. The same chart identity remains through the move.

For completely different visuals, create a new component/adapter and composition. Preserve the render kit and production structure, not the trading semantics. Register an entry under your chosen engine's `src`, then use:

```sh
npm run preview -- --source engines/tradient --entry src/my-film.tsx
npm run render -- --source engines/tradient --entry src/my-film.tsx --composition MyFilm --props my-films/name/props.json --range 0:89
```

The default preset injects its V8 score. For custom props that do not use it, supply a `score` in your props or select a non-score preset such as `--engine network`, together with your `--source`, `--entry` and `--composition`. A new composition can ignore unknown props.

## Audio and personal media

Place your own media inside the chosen engine's `public/` directory and use Remotion `staticFile()`. Use your own face/recording as appropriate; there is no built-in talking-head generator. Never upload keys or private footage by accident. The provided single-master exporter supports one baked soundtrack. For multiple simultaneous audio/video tracks, use Remotion's `stitchFramesToVideo` pipeline and verify its asset timing; the CLI rejects unsupported audio layouts rather than dropping tracks.

For a new voice take, align words locally (the included example alignment is `audio/words.json`). Update captions, action anchors and camera arrivals together. Do not force paragraph-length stretching or pitch lowering to fit old motion. Optional audio design scripts use Python, NumPy and SciPy; they are not required for example rendering.

## Review before a full export

Prove the opening, hardest transformation and ending as short moving passages. Fix confusing object meaning before adding polish. Check that the intended visual has readable projected size by its spoken word. Review scale changes, focus transitions and physical materials at 720px and 360px widths. Then review every scene, boundary and order/state transition in motion. Make direct and reverse seek comparisons. Save both passing and failed attempts.

Full export follows those proofs. Decode the complete MP4, verify frame/audio offsets, then review the actual file. Keep technical and aesthetic acceptance separate. Record exactly what was and was not checked.
