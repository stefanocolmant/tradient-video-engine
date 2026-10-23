# Writing the script

The script decides whether the video works. The visuals can only show what the words give them.
`npm run script:check -- <video>` enforces the measurable rules below; the rest is craft.

## Length

The voice reads about 2.7 words a second. Write to the length you want; never pad, never cram.

| length | words |
|---|---|
| 20 s | 50-55 |
| 30 s | 75-85 |
| 45 s | 115-125 |
| 60 s | 155-165 |
| 90 s | 230-250 |

Set the target at the top of `script.md` (`seconds: 45`). The checker fails a script more than 12%
long or 25% short.

## Shape

1. **Hook (0-3 s).** The most surprising true thing, the stakes, or the question the viewer already
   has. Fourteen words or fewer. It must make sense with the sound off when shown as a title.
2. **Why it matters (3-8 s).** Tie it to the viewer: their money, their phone, their day.
3. **Beats (most of the video).** One idea per sentence, each a step further than the last. Every
   sentence names something that can be shown: a thing, a number, a place, a comparison.
4. **Payoff.** The answer, the twist, or the "so that's why".
5. **Call to action.** One short line (follow, comment a word, link in bio), only what the brief asks.

## Hooks that work (write five, keep the best)

- **The surprising fact:** "Your phone has never felt your finger."
- **The stakes:** "A trading firm lost four hundred sixty million dollars in forty-five minutes."
- **The hidden process:** "You tap Buy. In that moment, your order takes a trip you never see."
- **The wrong belief:** "You'd think the Moon is close. It isn't."
- **The direct question:** "Why does your phone die at twenty percent when it's cold?"

Avoid openers that delay: "Hey guys", "In this video", "Today we're going to", "Let me tell you".
"Did you know" and "Imagine" are allowed but tired; the checker warns.

## Lines

- One idea per sentence. Most sentences 5-15 words, none over 24.
- Say it the way people talk: contractions (it's, you're, don't), fragments are fine ("Done."),
  questions you answer right away ("The good news? It's temporary.").
- Concrete over abstract: "a giant trading firm" beats "a market participant".
- Talk to one person: "you".
- Numbers: exact, sourced, and said the way you'd say them. Digits are fine for years ("May 2024");
  write amounts the voice might misread in words ("three hundred eighty-four thousand kilometers").
- No dashes (use a period or comma), no "&", no "e.g.", no "vs", no slashes or number ranges with a
  hyphen ("ten to fifteen", not "10-15").
- No talk about making the video ("in this video", "the engine", "AI-generated").

## Banned (the checker fails these)

Phrases that make text sound machine-written: delve, tapestry, testament to, in today's fast-paced
world, ever-evolving, game-changer, unlock the, unleash, dive into, navigate the, realm, landscape of,
harness, elevate your, seamless, robust, cutting-edge, revolutionize, it's important to note, in
conclusion, moreover, furthermore, embark, pivotal, vibrant, bustling, intricate, multifaceted,
paramount, plethora, myriad, buckle up, secret sauce, imagine a world, at the end of the day, when it
comes to, unprecedented, transformative, synergy, leverage, empower, holistic, paradigm, and a few
more (full list in `tools/script-check.mjs`).

## Facts

Every number, date, name and claim needs a row in `facts.md` with its source. The checker fails any
number in the script (and the storyboard's on-screen text) that isn't in facts.md. Prefer primary
sources: the company's own page, the regulator, the original study. Write the fact the way it will be
said, and paste the exact sentence it came from. Illustrations (an example price, a sample reading)
get their own row marked "Illustration" and are labelled on screen.

Finance and health topics: no promises, no advice, no performance figures, no "guaranteed".

## The read-aloud pass

Before the voice: read the script start to finish at speaking pace. Mark any sentence you'd stumble
on, any word repeated close together, any line that doesn't move the story. Fix them, run the check
again. If the person gave you their own script, keep their words and fix only typos.

## Example

Before (fails: throat-clear hook, written English, an em dash, a cliché, no source):

> Today we're going to delve into what happens when you place a trade — it's a fascinating journey
> through the landscape of modern markets.

After (passes):

> You tap Buy. A moment later, your app says filled. In that moment, your order took a trip you never
> see.
