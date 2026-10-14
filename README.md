# Tradient Video Engine

A portable Remotion + Three.js engine for scripted 3D explainers. It includes the latest **V8 Tradient film**, the **A23 reconstruction scene library and executable production script**, and the **CStack storyboard workflow**. Scenes, timing, cameras, materials, typography and audio are editable code and data.

## Quick start

Install **Node.js 22 or newer** and **FFmpeg**. Then:

```sh
git clone https://github.com/stefanocolmant/tradient-video-engine.git
cd tradient-video-engine
npm ci
npm run check
npm start
```

In Remotion Studio select **TradientRulesHandoff** for the latest film. `TradientRulesLimitJourney` preserves V7; earlier compositions remain available for comparison. Studio preview does not export a video.

```sh
# Three-second test export. Outputs are always written to a new directory.
npm run render -- --range 430:519

# The full 81.53-second V8 film
npm run render

# Five still proofs, or select exact frames
npm run proof -- --frames 430,478,535,628,695

# Reusable scene demos
npm run preview -- --engine cable
npm run render -- --engine network
npm run render -- --engine ship

# A23 production-script replay (public replacement photo/audio/font)
npm run preview -- --engine reference
```

The first export downloads the Chromium runtime used by Remotion. Rendering is local; no AI subscription, API key, ElevenLabs account or After Effects installation is needed to run the included examples. Exports use PNG intermediates and FFmpeg, so allow several GB of temporary disk space. Each output includes its settings, browser hash, frame range and video SHA-256.

## Make your own film

```sh
npm run new-film -- my-new-reel
```

Read [the authoring workflow](docs/AUTHORING.md), complete the new script, and work with your coding assistant using [AGENTS.md](AGENTS.md). For a different film, author the objects and choreography needed by its meaning; use the supplied scene library, recipes, exact event anchors and review process. The V8 example's trading state and numeric relationships are deliberately validated. Changing its prose alone does not create arbitrary new animations.

For an edited V8-compatible score:

```sh
npm run preview -- --score my-films/my-new-reel/film.production.json
npm run render -- --score my-films/my-new-reel/film.production.json --range 0:89
```

A blank template is an authoring brief, **not** a renderable V8 score. New visuals need scene adapters and moving proofs. New narration can be your own recording or an authorized voice service; save the audio locally, align its words, and retime the events. No voice-cloning service or paid generation is bundled.

## What is included

| Folder | Contents |
|---|---|
| `engines/tradient` | Latest V8 film; connected rule extraction, dimensional chart, optical sample inspection, cable entry, partial fills and report return; V5–V7 recipes preserved |
| `engines/reference` | A23's 39-shot choreography, scene construction recipes, executable replay, cable/globe/phone/underwater/tower/router/reassembly libraries |
| `engines/cstack` | Creator-style timeline/storyboard workflow, shared luminous 3D kit and network/cable/ship demos |
| `templates` | Second-by-second production authoring structure |
| `tools` | Preview, PNG proof, frame export, full-decode check and scaffold commands |
| `docs` | Scene map, quality rules, portability, asset provenance and release coverage |

See [ENGINE-MAP](docs/ENGINE-MAP.md), [quality rules](docs/QUALITY.md), [release coverage](docs/RELEASE-COVERAGE.md) and [asset provenance](docs/ASSETS.md).

## Public-package differences

The original Instagram soundtrack, photograph and proprietary DIN font are **not distributed**. The reference and CStack examples use a generated geometric image, a silent WAV, and a redistributable font instead. Their geometry and animation sources remain included. Therefore this public reference demo is **not a bit-identical copy of the private A23 export**. The current Tradient example includes its saved soundtrack and redistributable fonts.

Private production logs, workstation paths, credentials, browser bundles, old rendered exports and historical Git data are excluded. No live trading integration, broker connection, publishing automation or schedule is included.

## Rendering and licenses

Use `npm run render` for the supplied export profile. Studio and a generic `remotion render` can differ from the reviewed capture path. Portable mode records the local Chromium binary; it does not promise identical pixels across operating systems. See [portability](docs/PORTABILITY.md).

Authored engine code is MIT; CStack attribution and MIT terms are preserved. Assets have their own notices in [licenses](licenses) and [ASSETS](docs/ASSETS.md). Remotion is a dependency with its own [license](licenses/REMOTION-LICENSE.md); the engine's MIT license does not relicense Remotion or third-party media.
