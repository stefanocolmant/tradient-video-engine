# Portable capture

The npm lockfile pins JS dependencies. Node22+ and FFmpeg are required; installation and exports are tested on the release machine, with exact environment recorded in verification receipts. Linux and Windows paths are supported by the launcher but require their own runtime verification; no cross-platform pixel identity is claimed.

`npm run render` resolves the scene, captures PNG frames with the authored browser/Canvas profile (V8 uses preserved buffers; legacy demos retain their native profile), encodes a new MP4, then decodes the entire result. Portable mode downloads the Remotion-compatible headless Chromium and records its hash. It retains the authored GL/profile settings while allowing a different platform binary.

Use `--pinned` only to enforce the original recorded Chromium SHA. That exact macOS executable hash cannot match a Windows or Linux binary. Studio is a convenient preview; the export helper is the reproducibility path.

Each run creates a new timestamped directory unless `--out path` is supplied. An existing directory causes an error. Failed attempts remain on disk for diagnosis; choose another output directory after fixing the source. Long full exports are local CPU/GPU work. The preserved default uses one rendering worker. Do not launch duplicate heavy renders.

Source audio is already mixed for the included Tradient examples. No stems are claimed for the original reference soundtrack; that soundtrack is excluded. The public A23 replay substitutes silence and changes the photo/caption font, so private historical exact-pixel claims do not apply to this public demo.
