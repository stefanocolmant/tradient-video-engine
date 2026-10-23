# Quality gates

A video goes out only when every gate passes and someone has looked at the frames.

## 1. Script (`npm run script:check -- <video>`)

| check | fails when | fix |
|---|---|---|
| length | words ÷ 2.8 per second is 12% over or 25% under the target | cut or add a beat |
| hook | the first sentence throat-clears ("In this video") or runs over 20 words | lead with the fact |
| sentence length | a sentence over 28 words | split it |
| AI cliches | a banned phrase (delve, game-changer, seamless...) | say it plainly |
| dashes | an em or en dash | period or comma |
| sources | a number that isn't in facts.md | source it or cut it |

Warnings (worth fixing): tired openers, no "you" in the opening, few contractions, long words,
repeated words, voice traps (&, e.g., 10-15), talk about the video itself, a weak ending.

## 2. Storyboard (`npm run storyboard:check -- <video>`)

| check | fails when |
|---|---|
| scenes & props | unknown type, missing required prop, text far over its limit, unknown icon, missing file, unknown sound |
| cues | a phrase in `at` isn't in the voice (it suggests the closest real phrase) |
| too short | a scene under 0.9 s |
| on-screen facts | a number shown on screen isn't in facts.md |

Warnings: short scenes (under 1.3 s), long holds (over 7 s), repeats and low variety, a sentence
with no visual of its own, a weak first scene.

## 3. The renderer's own audit (during stills and render)

Each scene reports what it can see: text squeezed below the style's minimum size (44 px), a missing
icon or file, a callout outside its image, an unknown scene type. Any report fails QA.

## 4. The file (`npm run qa -- <video>`, runs after every render)

| check | passes when |
|---|---|
| video stream | H.264, yuv420p, the timeline's size and frame rate |
| length | matches the timeline within a frame |
| audio | present when there is a voice; AAC 48 kHz |
| full decode | every frame decodes with zero errors |
| loudness | -14 LUFS ±1.2 (what Instagram, TikTok and YouTube normalise to) |
| true peak | under -1 dBTP |
| black frames | none |
| motion | nothing frozen for 1.2 s; warns when barely moving for 2.5 s |
| flashes | at most 3 hard brightness jumps |
| empty screen | something on screen throughout |
| frame one | the first frame already shows the hook |
| pacing | no scene holds over 7.5 s (warning) |

It also writes `<name>_vN_review.jpg`: one real frame per scene from the finished file. Look at it.

## 5. Eyes

Automated checks can't judge taste. Before delivering, look at the stills sheet and the review sheet
and ask, scene by scene: does this show what is being said? Is the main thing big and clear? Does
it feel like the style? Would someone scrolling stop at frame one?
