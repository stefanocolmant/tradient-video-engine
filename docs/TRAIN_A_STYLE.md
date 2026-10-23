# Train a style from examples (option 3)

Give the engine examples of the look you want; it measures them, writes a style, renders a test, and
you (or the agent) refine it until the test matches the references.

## 1. Gather references

Make a folder `styles/_inbox/<name>/` (the name becomes the style's name) and put in:

- **Pictures** (3-10): screenshots of posts or reels you like, posters, brand graphics, frames from
  videos. JPG, PNG, WebP, GIF, AVIF (HEIC is converted on a Mac). They decide colours, light, texture.
- **Videos** (1-3): MP4/MOV/WebM files in the look you want. They decide the editing rhythm: how often
  it cuts, how long shots last, how much moves, hard cuts or dissolves. Links (YouTube, Instagram,
  TikTok...) are downloaded only if `yt-dlp` is installed; otherwise download the file yourself.
- **Websites**: a `links.txt` with one URL per line (or `--url`). Their real CSS gives fonts (mapped to
  the closest open font), brand colours, corner radius, shadows and glass.

Coherent references give a coherent style. If they disagree, pictures and videos decide the colours
and light; websites decide fonts and add accent candidates.

## 2. Learn

```sh
npm run style:learn -- <name>
# or without an inbox:
npm run style:learn -- <name> --image a.jpg --image b.png --video reel.mp4 --url https://brand.com
```

It writes `styles/<name>/`:

| file | what it is |
|---|---|
| `style.json` | the learned style |
| `analysis.json` | every measurement, and `why`: where each value came from |
| `card.jpg` | references next to the learned palette, fonts, rhythm and a sample frame |
| `refs/` | small copies of the references, and one frame per shot of each video |
| `fonts/` | the open fonts it picked, downloaded |

What it measures: a k-means palette in CIELAB across all references, the colour around the frames'
edges (background), brightness, contrast, saturation, warmth, flatness, edge density, grain and
vignette; per video, shot changes (colour jumps for footage, picture jumps for motion graphics), shot
lengths, motion inside shots, dissolves vs hard cuts; per website, colours weighted by the area they
cover, text colours, heading and body fonts, corner radius, shadows, glass, CSS brand variables.

## 3. Look, and add what measurements can't see

Open `card.jpg` and the pictures in `refs/`. Measurements are reliable for colour, light, texture,
fonts from websites, and rhythm. They can't know:

- the title font when no website was given (pick an open family that matches the references),
- the caption look (big pop-up words, karaoke line, subtitles, boxes, all caps),
- card shapes and icon style (glass, outline, solid; line, duotone, solid icons; neon 3D),
- the right background kind (a star field for space photos, paper for print, a grid for tech UI),
- anything about subject matter or mood.

Write those into `styles/<name>/overrides.json`, with a `_why` line saying what you saw:

```json
{
  "_why": "Space photography and a documentary reel: star field, thin technical outlines, film grain, calm subtitles.",
  "background": {"kind": "stars"},
  "surface": {"kind": "outline", "radius": 10, "border": 2, "shadow": "none"},
  "icons": {"kind": "line"},
  "captions": {"mode": "subtitle", "maxWords": 6}
}
```

Then run `npm run style:learn -- <name>` again. Overrides are applied on top every time, so you can
re-learn with more references without losing your corrections.

## 4. Test until it matches

```sh
npm run style:test -- <name>          # add --video for a short silent sampler video
```

`styles/<name>/test/compare.jpg` puts the references on top and the engine's frames in this style
below, and the tool prints a match score (palette distance and light, 0-100). A good style scores 75+
AND looks like the references to a person: titles, captions, cards and icons should feel like
they belong to the same brand. Repeat step 3 until it does.

## The bundled example

`styles/mission` was trained from five NASA photos (public domain), the first four minutes of NASA's
Artemis I resource reel, and nasa.gov. Measured: a near-black background from the photos, NASA red
from the website's buttons, a deep blue from the photos as the second accent (lifted until it reads on
black), Inter from nasa.gov's CSS, 13.5 cuts a minute and 4.3 s median shots from the reel. Added by
eye (`overrides.json`): star field, outlined cards, line icons, film grain, documentary subtitles.
Test score: 80/100 (palette 89; the frames are darker than the photos, as text on a star field should
be). Result: `examples/mission.mp4`. The website screenshots used for learning are kept out of the
shipped `refs/` (they show someone else's site).
