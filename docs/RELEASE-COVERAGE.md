# Public release coverage

This release packages the latest Tradient V8 example, A23 component/replay library and CStack workflow. It is a usable authored production engine, not a claim that arbitrary new scripts automatically produce accepted artwork.

## Checked on the release machine

- Fresh `npm ci` from the pinned lockfile; dependency audit reported zero vulnerabilities.
- Typecheck across all three source trees.
- V8 event/state validation, forward/backward state evaluation, required-input rejection, geometry handoff and narration-anchor mutation tests.
- A23's39-shot/4865-frame coverage and public asset hashes.
- Root new-film scaffold and real Remotion Studio preview.
- V8 portable export:30 frames430–459, full MP4 decode, and30/30 decoded lossless frames exactly equal to the frozen V8 family render on this machine.
- Separate short reference, ship and CStack exports completed and fully decoded; receipts are in `verification/exports.json`.
- Curated publication scan found no credential patterns or private workstation paths. Exact scope is in `verification/publication-scan.json`.

Fresh GitHub HTTPS clone, installation, checks and a six-frame V8 export all passed. The clone was in an independent path containing spaces. Its six lossless frames exactly match the working-package sample. See `verification/clone-check.json` for the tested commit and explicit exclusions.

## Explicitly not covered

- Full rerender of every historical movie from the public snapshot.
- Cross-platform installation or pixel identity on Windows/Linux.
- Automatic creation of arbitrary new scenes, new voice generation, talking-head generation, social publishing or live trading.
- User aesthetic approval or A23-level parity for arbitrary future visuals.
- Complete actual-file playback of final V8: background playback was paused at the user's request. Local V8 has full decode/audio-alignment checks and a reviewed15.3-second changed passage; coverage is separate from full visual acceptance.

Original local exports and source archives remain preserved. Public reference examples deliberately substitute the original soundtrack, photograph and proprietary font; exact private A23 parity claims do not transfer to those substitutions.
