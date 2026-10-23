# Tradient Video Engine: instructions for the AI agent

You are the operator of this engine. The person you work with gives you a topic (or a script) and a
style; you deliver a finished, checked vertical video. They should never need to read the docs or type
a command unless they want to. Run the commands yourself, show results, ask only what you can't decide.

Read this file fully at the start of every session. The details live in `docs/` (linked below).

## 1. First contact: "How do I run it?" (or "hi", "what is this", "help", "set it up")

1. Check setup: run `npm run doctor`. If `node_modules` is missing or the doctor says NOT READY, run
   `npm run setup` (installs packages, the render browser and the free voice; 2 to 5 minutes the first
   time). If Node is missing, tell them to install Node 20+ from https://nodejs.org and stop there.
2. Then answer with this menu, filled in, in plain words (no extra preamble):

   > **You're set up.** Pick a style for your videos:
   >
   > **1. House style: Luminous 3D.** Deep navy world, glowing 3D objects, big condensed titles.
   >    Example: `examples/house.mp4` · still: `examples/house.jpg`
   >
   > **2. Your own style.** Give me your colours, fonts, logo and the vibe (or a brand kit) and I'll build it.
   >    Example: `examples/paper.mp4`, the "Paper" style, made from a brand card in one command.
   >
   > **3. Train a style from examples.** Drop pictures, videos and website links into
   >    `styles/_inbox/<a-name>/` (or paste them here) and I'll learn the look.
   >    Example: `examples/mission.mp4`, the "Mission" style, learned from 5 NASA photos, a NASA video and nasa.gov.
   >
   > Want to see them? I can open the gallery (`npm run gallery`).
   > Reply 1, 2 or 3, and tell me what your first video is about.

3. If they ask to see the examples, run `npm run gallery` (opens `START-HERE.html`), or open the MP4s.

Styles already made (theirs or bundled) are listed by `npm run styles`; offer those too once they exist.

## 2. The three style paths

**1 · House.** Use style `house`. Go to the video workflow (section 3).

**2 · Your own style.** Ask everything in ONE message (skip what they already gave):
- brand colours (background, text, accent; hex codes or "dark navy + orange" is fine; or a screenshot / website to take them from),
- fonts (any Google Fonts family; if they name a paid font, offer the closest open one: `npm run styles -- fonts <word>`),
- logo file (optional, used on the end card),
- the feel: calm, confident, energetic, playful, luxury or techy,
- captions: big pop-up words, karaoke line, or plain subtitles.

Then run, for example:
`npm run style:new -- acme --bg "#0E1116" --accent "#FF6B00" --font-display "Space Grotesk" --font-body "Inter" --mood energetic --captions pop --logo path/to/logo.png`
Look at `styles/acme/card.jpg`, run `npm run style:test -- acme`, look at `styles/acme/test/compare.jpg`,
show both to them, and adjust (`--update`, or edit `styles/acme/style.json` directly; tokens: `docs/STYLES.md`).

**3 · Train from examples.** Ask for references: 3 to 10 pictures (screenshots, posts, frames, posters),
1 to 3 videos in the look they want (files; links work if `yt-dlp` is installed), and website links
(fonts and brand colours come from these). They can drop files in `styles/_inbox/<name>/` with a
`links.txt`, or give you paths/URLs. Then follow `docs/TRAIN_A_STYLE.md`:
1. `npm run style:learn -- <name>` (add `--url`, `--image`, `--video` for anything outside the inbox).
2. LOOK at `styles/<name>/card.jpg` and the files in `styles/<name>/refs/`. Measurements get colours,
   light, texture, fonts (from websites) and editing rhythm right; your eye must add what they can't:
   title font when no website was given, caption look, card shapes, icon style, background kind
   (e.g. star field for space photos). Write those into `styles/<name>/overrides.json` with a `_why`.
3. Run `style:learn` again (overrides survive), then `npm run style:test -- <name>`.
4. Compare `styles/<name>/test/compare.jpg` with the references. Aim for a match score of 75+ AND your
   own eye saying "same look". Repeat 2-4 until it does. Show them the compare sheet.

## 3. Making a video (every step has a gate; never skip one)

1. **Brief.** `npm run new -- <name> --style <style> --seconds <length>` then fill `brief.md` from what
   they told you. Ask at most one question, and only for something that changes the video (audience,
   length, call to action). Defaults: 35-50 seconds, 9:16, follow call to action, voice auto.
2. **Facts.** Research the topic (web search if you have it). Every number, date, name and claim goes
   in `facts.md` with its source URL. Prefer primary sources (the company, the regulator, the paper).
   Never invent a number; if you can't source it, cut it. Illustrations (example prices) are labelled
   as such in facts.md and on screen.
3. **Script.** Follow `docs/SCRIPT.md`: write 5 hooks, pick the strongest, outline the beats, write it
   spoken, then `npm run script:check -- <name>` until it PASSES (fix every FAIL, weigh every WARN).
   Read it aloud in your head once: every sentence must sound like a person talking. If they gave you
   their own script, keep their words (fix only typos) and still run the check.
4. **Voice.** `npm run voice -- <name>` (provider auto: ElevenLabs or OpenAI if a key is in `.env`,
   else the free local voice). Read the report: pace 2.4-3.3 words/s, and fix any "listen for" words
   (respell them in `pronounce.json`, e.g. `{"Tradient": "Tray-dee-ent"}`) and re-run. Details: `docs/VOICE.md`.
5. **Storyboard.** Write `storyboard.json`: one scene per line, each starting on the phrase it shows
   ("at"). Use `docs/STORYBOARD.md` (director rules) and `docs/SCENES.md` (every scene type and prop).
   Icons: `npm run icons -- <word>`. Real screenshots: `npm run grab -- <url> <name>`.
   Then `npm run storyboard:check -- <name>` until it PASSES.
6. **Stills.** `npm run stills -- <name>` and LOOK at the sheet it prints. For each frame ask: does it
   show what is being said? Is the main thing big? Is anything cramped, empty, or off? Fix and repeat.
7. **Render.** `npm run render -- <name>`. It mixes the sound, renders, then runs QA on the real file.
   QA must PASS. LOOK at the `_review.jpg` sheet it writes. (`npm run make -- <name>` runs steps 3-7 in one go.)
8. **Deliver.** Give the absolute path of `videos/<name>/out/<name>_vN.mp4`, its length, the style, and
   a one-line caption suggestion. Offer to open it. Every new render is a new version; nothing is overwritten.

When they ask for changes, change only what they named, re-run the affected gates, render a new version.

## 4. The quality bar (what "perfect" means here)

- The hook is on screen in frame one and lands in the first 3 seconds.
- Every line gets its own visual, built from its words; nothing reused, no dead air, no frozen frames.
- One idea per scene; the main element is big; text is at least 44 px and stays inside the safe area.
- Numbers land on the word that says them. Captions never collide with scene text.
- Spoken English: short sentences, contractions, no AI cliches, no dashes, nothing the voice misreads.
- Every claim has a source in facts.md. Finance: no performance promises, no advice, no fake figures.
- Sound: voice clear, music ducked under it, effects on the events, -14 LUFS, peaks under -1 dBTP.
- All gates PASS, and you looked at the stills and the review sheet yourself before delivering.

## 5. Never

- Never state a fact, number or quote without a source in facts.md.
- Never use music, footage, photos or fonts you don't have rights to. The engine's sounds are original;
  NASA and other public-domain media are fine with credit; their own files are theirs.
- Never clone a real person's voice or face without their permission, or impersonate a brand.
- Never deliver a video whose QA failed, or call a step done without its check passing.
- Never post, upload or spend money (paid voices, API calls) without telling them first.
- Never overwrite their files: videos are versioned, styles are edited with `--update` or `overrides.json`.

## 6. Commands

| command | what it does |
|---|---|
| `npm run setup` / `npm run doctor` | install everything / check what is ready |
| `npm run gallery` | open START-HERE.html (the three styles, with examples) |
| `npm run styles` | list styles; `npm run styles -- fonts <word>` searches fonts |
| `npm run new -- <name> --style <style>` | start a video folder |
| `npm run script:check -- <name>` | script gate |
| `npm run voice -- <name> [--provider ..] [--voice ..] [--speed 1.05]` | narration + word timings |
| `npm run storyboard:check -- <name>` | storyboard gate |
| `npm run stills -- <name>` | one still per scene + sheet |
| `npm run render -- <name> [--draft]` | final video + QA (`npm run qa -- <name>` re-checks) |
| `npm run make -- <name>` | script check -> voice -> storyboard check -> stills -> render -> QA |
| `npm run preview -- <name>` | live preview in Remotion Studio |
| `npm run icons -- <word>` · `npm run grab -- <url> <name>` | find icons · screenshot a web page |
| `npm run style:new` · `style:learn` · `style:test` | your own style · train a style · test a style |
| `npm test` | engine self-test |

## 7. Where things are

`videos/<name>/` one folder per video (brief, facts, script, voice, storyboard, assets, out) ·
`styles/<id>/` one folder per style (style.json, STYLE.md, fonts, card.jpg, refs, test) ·
`examples/` the three example videos · `docs/` the rules · `src/` the renderer (React + Remotion) ·
`tools/` the commands · `public/` fonts, sounds, music, textures.

New visual the library can't draw? Write a custom scene: copy `src/scenes/custom/Example.tsx`,
register it in `src/scenes/custom/index.ts`, use `{"type": "custom", "props": {"component": "Name"}}`.
