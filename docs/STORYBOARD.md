# The storyboard: turning lines into visuals

`storyboard.json` lists the scenes in order. Each scene starts on a phrase from the narration, so
picture and voice stay locked together even if the voice is re-recorded. The scene types and every
prop are in [SCENES.md](SCENES.md). `npm run storyboard:check -- <video>` checks the rules below.

## Director rules

1. **Frame one is the hook.** Open on the biggest thing you have: a title, a number, a hero object,
   a striking image. It is fully on screen in the first frame.
2. **Every line gets its own visual.** A new scene for each sentence, or a new element arriving on
   its words inside a scene. Nothing on screen for more than ~6 seconds without a change.
3. **Show the noun.** If a line names a thing, show that thing: `hero` (an icon drawn big), `image`
   (a real photo or screenshot), `phone`, `globe`. Abstract lines get the concrete version of the idea.
4. **Pick the scene by what the line does:**

   | the line... | use |
   |---|---|
   | opens or names a chapter | `title` |
   | is the key sentence of the video | `statement` |
   | says a number | `number` (with `countAt` on the spoken number) |
   | lists things | `list` (each item `at` its word) |
   | describes steps or a journey | `flow` |
   | sets two things against each other | `compare` or `split` |
   | gives a share ("7 in 10") | `grid` |
   | shows change over time | `chart` or `timeline` |
   | names places or routes | `globe` |
   | involves a message, an app, a notification | `phone` |
   | quotes someone (real quote, sourced) | `quote` |
   | needs proof (headline, post, filing) | `image` with `frame: "browser"` (`npm run grab`) |
   | asks the viewer to act | `cta` |

5. **Land on the word.** A scene starts on the first words of its line (`"at"`). Things inside it
   (list items, flow nodes, a count, a callout) take their own `"at"` so they appear when said.
6. **Less text than talk.** On-screen words are a headline for the line, not the line: titles up to
   7 words, labels up to 5. Captions carry the full sentence. Use `statement` only for the line that
   matters most (captions hide automatically under it).
7. **Vary the shots.** Never the same scene type twice in a row; no type above 40% of the video;
   at least five types in a 45-second video.
8. **Use the style's rhythm.** Aim for the style's average shot length (`motion.avgShot`, shown by the
   checker). Faster styles cut every 2 seconds, calmer ones hold 3 to 4.
9. **End on the ask.** The last scene is a `cta` when the brief has a call to action.
10. **Real over drawn when you have it.** A real screenshot or photo (with rights and a credit) beats
    an icon. Never fake a document, a post, or a person.

## Format

```json
{
  "title": "What happens after you tap Buy",
  "style": "house",
  "music": {"track": "auto"},
  "scenes": [
    {"type": "title", "line": "You tap Buy. A moment later,", "props": {"text": "You tap *Buy*", "icon": "mouse-pointer-click"}},
    {"type": "phone", "at": "your app says", "props": {"screen": "notification", "notification": {"app": "Your broker", "title": "Order filled", "body": "Bought 10 shares", "at": "filled"}}},
    {"type": "number", "at": "More than ninety percent", "props": {"value": 90, "suffix": "%", "label": "of everyday investors' market orders", "countAt": "ninety percent"}}
  ]
}
```

- `at` is a phrase exactly as spoken (punctuation doesn't matter). If a phrase is said twice, the
  engine takes the first time it's said after the previous scene began. To pick one yourself use an
  object: `{"phrase": "buy", "nth": 1}` is the second time "buy" is said in the whole narration;
  `"offset": -0.2` starts 0.2 s earlier; `"edge": "end"` uses the end of the phrase.
- `line` is optional: the narration the scene covers, for the review sheet.
- `music`: `{"track": "auto"}` uses the style's bed; a file name in the video folder or `public/music/`
  uses that; `false` for none. `{"volume": 0.1}` sets the level.
- `transition`, `captions`, `sound`, `sfx` per scene: see [SCENES.md](SCENES.md).
- Files (images, logos) live in the video's `assets/` folder and are referenced as `assets/name.png`.

## Before you render

- `npm run storyboard:check -- <video>` must PASS: every cue is really said, text fits its scene,
  icons and files exist, scenes are readable (≥ 0.9 s) and alive (≤ 7 s), shots vary, every sentence
  has its own visual, every number on screen has a source.
- `npm run stills -- <video>` and look at each frame: is the thing being said visible and big?
