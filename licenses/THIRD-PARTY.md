# Third-party material

## Fonts (bundled in `public/fonts/` and in style folders)

All from Google Fonts, under open licences that allow bundling and use in videos.

| font | where | licence | copyright |
|---|---|---|---|
| Anton | house style titles | SIL OFL 1.1 (`ANTON-OFL.txt`) | The Anton Project Authors |
| Roboto Condensed | house style labels, captions | Apache 2.0 (`APACHE-2.0.txt`) | Google LLC |
| Inter | base style, clean, mission | SIL OFL 1.1 (`OFL-1.1.txt`) | The Inter Project Authors |
| JetBrains Mono | mono text | SIL OFL 1.1 (`OFL-1.1.txt`) | The JetBrains Mono Project Authors |
| Fraunces | paper style titles | SIL OFL 1.1 (`OFL-1.1.txt`) | The Fraunces Project Authors |
| Archivo, Archivo Black | bold style | SIL OFL 1.1 (`OFL-1.1.txt`) | The Archivo Project Authors |

Styles you make download their fonts from Google Fonts into the style folder; those are open
licences too. Proprietary fonts found on websites are never copied: the closest open family is used.

## Icons

Lucide (https://lucide.dev), ISC licence (`LUCIDE-ISC.txt`), used through the `lucide-static` package.

## Code

- CStack helpers (globe, phone, frame sync, finish): Charles Zheng, MIT (`CSTACK-MIT.txt`, `CSTACK-UPSTREAM.txt`).
- Remotion (renderer, npm dependency): Remotion licence (`REMOTION-LICENSE.md`): free for individuals,
  non-profits and companies of up to 3 people; larger companies need a company licence.
- three.js, React and the other npm dependencies keep their own licences (see `node_modules/*/LICENSE`).

## Media

- Earth textures (`public/textures/`): NASA Blue Marble / Black Marble, public domain. Credit NASA.
- Example photos and video frames (`videos/moon-distance/assets/`, `styles/mission/refs/`): NASA
  (Apollo 8 AS08-14-2383, Apollo 11 AS11-40-5903, Apollo 17 AS17-148-22727, ISS035-E-17673,
  Artemis I NHQ202211160030, Artemis I Resource Reel, August 2022), public domain per NASA's media
  guidelines. NASA's insignia is not used. Credit NASA.
- Sound effects (`public/sfx/`) and music beds (`public/music/`): synthesised by this project's own
  code (`tools/sfx-gen/`); free to use in any video.
- Example narration (`videos/*/voice/`): generated locally with Kokoro-82M (Apache 2.0).
