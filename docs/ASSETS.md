# Asset provenance

Exact shipped file sizes and SHA-256 values are in [ASSET-MANIFEST.json](ASSET-MANIFEST.json). No original social-media clip is included.

| Asset | Provenance and terms |
|---|---|
| CStack helpers | Charles Zheng, MIT; upstream `goodnight000/cstack`, pinned `d29d58ac4a4aa61b92a3554dd9d783cdcd2557b1`; full notice `licenses/CSTACK-MIT.txt` |
| Custom scene adapters and production tooling | Authored for this project; MIT |
| `earth_day.jpg`, `earth_night.jpg` | NASA Earth imagery; saved upstream provenance identifies public-domain imagery; credit NASA |
| `ship/` | Poly Haven Ship Pinnace, CC0; exact authors, source URLs and original file metadata in each `ship/SOURCE.json` |
| `title.ttf` | Anton; copyright2020 The Anton Project Authors; SIL Open Font License1.1 in `licenses/ANTON-OFL.txt` |
| `body.ttf`, public replacement `caption.ttf` | Roboto Condensed; copyright2011 Google Inc. All Rights Reserved; Apache2.0 according to the actual font's name table. Full terms in `licenses/APACHE-2.0.txt` |
| `photo.jpg` in reference/CStack examples | Geometric chart placeholder generated locally for this public package; original reference photograph excluded |
| `reference-audio.wav` in reference/CStack examples | Locally generated silence of matching usable duration; original soundtrack excluded |
| Tradient master WAVs | Saved project-generated example soundtracks, including continuous Brian narration and project-produced music/effects. No voice model, credentials or service account included. Use your own recording/service for new narration |
| Tradient audio source folder | Saved example narration, music, word timing and procedural sound-design helpers; optional Python scripts are separate from npm example playback |

The proprietary DIN Condensed caption font from the private reference was excluded and replaced; an OFL text found alongside it was not treated as evidence that DIN could be redistributed. The font metadata was inspected before publication.

The engine MIT license covers authored code. Third-party dependency licenses and media terms remain separate. Remotion's license is included for the pinned dependency; no Remotion implementation source is copied into this repository.
