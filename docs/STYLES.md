# Styles

A style is one folder in `styles/`: `style.json` (the tokens below), `STYLE.md` (notes in words),
`fonts/`, optional `assets/` (logo, background image), and `card.jpg` (the style at a glance).
Every scene type reads the style, so the same storyboard renders in any style. Change `"style"` in a
storyboard to try another look; `npm run styles` lists them.

## The three ways to get a style

| | how | command | example |
|---|---|---|---|
| **1. House** | ready to use: the engine's own luminous 3D look | (none) | `styles/house`, `examples/house.mp4` |
| **2. Your own** | from your brand: colours, fonts, logo, a mood word | `npm run style:new -- <name> ...` | `styles/paper`, `examples/paper.mp4` |
| **3. Trained** | learned from example pictures, videos and websites | `npm run style:learn -- <name>` | `styles/mission`, `examples/mission.mp4` |

`clean` and `bold` are extra starting points for option 2 (`--base clean` or `--base bold`).
Test any style with `npm run style:test -- <name>` (sample frames, plus a side-by-side with the
references for trained styles).

### Option 2 in one command

```sh
npm run style:new -- acme --bg "#0E1116" --accent "#FF6B00" --font-display "Space Grotesk" \
  --font-body "Inter" --mood energetic --captions pop --logo ~/Desktop/acme-logo.png
```

Moods: `calm`, `confident`, `energetic`, `playful`, `luxury`, `techy` (each sets motion, captions,
sound and finish). Fonts: any Google Fonts family (`npm run styles -- fonts <word>` to search); they
download into the style folder so the style travels as one folder. Change it later with `--update`.

### Option 3

See [TRAIN_A_STYLE.md](TRAIN_A_STYLE.md).

## Tokens

Only `palette.bg` and `palette.accent` are required; everything else has a default, and missing
colours are derived with guaranteed contrast (text 4.5:1, accents and muted text 3:1 on the background).

| token | values | what it changes |
|---|---|---|
| `palette.bg` / `bg2` | colour | background (bg2 = its lighter/darker partner for gradients) |
| `palette.text` / `muted` | colour | main text / secondary text |
| `palette.accent` / `accent2` / `accent3` | colour | highlight word, numbers, active items / lights and paths / extra |
| `palette.surface` / `surface2` | colour | cards and panels |
| `palette.positive` / `negative` | colour | up/good, down/bad (charts, compare) |
| `palette.glow` / `line` | colour | glow tint / grid lines, dividers |
| `fonts.display` / `body` / `caption` / `mono` | `{family, files: {weight: path}, weight, case: "upper"\|"none", tracking, lineHeight}` | titles / labels and cards / captions / code |
| `type.display` / `body` / `min` | scale, scale, px | size multipliers; the smallest text allowed (44) |
| `background.kind` | `luminous` `gradient` `solid` `grid` `dots` `paper` `aurora` `noise` `stars` `image` | the world behind every scene (`image` uses `background.image`) |
| `background.intensity` / `motion` | 0-1 | how strong / how much it drifts |
| `surface.kind` | `glass` `solid` `outline` `none` | card language |
| `surface.radius` / `border` / `shadow` | px / px / `glow` `soft` `hard` `none` | card shape |
| `emphasis.kind` | `color` `marker` `underline` `box` `glow` | how a `*highlighted*` word looks |
| `icons.kind` / `stroke` | `neon3d` `glass3d` `line` `duotone` `solid` / width | icon look (3D kinds draw real 3D tubes) |
| `motion.energy` | 0-1 | overall pace of entrances |
| `motion.enter` | `rise` `pop` `slam` `mask` `fade` `blur` | how things arrive |
| `motion.ease` | `expo` `back` `smooth` `snap` `spring` | the feel of every move |
| `motion.transition` / `transitionFrames` | `cut` `fade` `slide` `zoom` `whip` `wipe` `flash` `blur` / frames | between scenes |
| `motion.camera` / `idle` / `tilt` | 0-1 | slow push-in / idle drift of held layouts / 3D tilt of scenes |
| `motion.avgShot` | seconds | the rhythm the storyboard aims for |
| `finish.bloom` / `grain` / `vignette` | 0-1.5 / 0-0.4 / 0-1 | glow / film grain / darkened corners |
| `finish.halftone` / `scanlines` / `tint` + `tintAmount` | 0-1 / 0-1 / colour + 0-1 | print dots / screen lines / colour wash |
| `captions.mode` | `subtitle` `pop` `karaoke` `none` | caption look |
| `captions.size` / `position` / `maxWords` / `case` / `font` | px / 0-1 of height / words / `upper`\|`none` / `caption`\|`display`\|`body` | caption details (`box`, `boxColor`, `highlight`, `stroke`, `shadow` too) |
| `layout.safeTop` / `safeBottom` / `safeSide` | 0-1 | margins kept clear of the app's buttons |
| `sound.music` / `musicVolume` / `sfx` | `pulse` `bright` `drive` `calm` or a file / 0-1 / 0-1.5 | soundtrack bed, its level, effects level |
| `render3d` | true/false | allow 3D (globe planet, 3D icons) |
| `logo` | path in the style folder | used on the end card |
| `art.do` / `art.dont` | lists | direction in words for whoever writes storyboards |

## Sharing a style

Zip the style's folder (`styles/<name>/`) and send it; the other person drops it into their
`styles/` folder. Fonts and the logo travel with it. Reference pictures in `refs/` may belong to
someone else: delete `refs/` before sharing unless they are yours.
