# The voice

`npm run voice -- <video>` reads `script.md` and writes `voice/voice.wav` plus `voice/words.json`
(the start and end of every word). Scenes, captions, counts and sound effects all key off those
timings, so re-recording the voice re-times the whole video automatically.

## Providers

| provider | quality | cost | word timings | use it with |
|---|---|---|---|---|
| `elevenlabs` | best, most human | your ElevenLabs plan | exact (from ElevenLabs) | `ELEVENLABS_API_KEY` in `.env`, `--voice <voice id>` |
| `openai` | very good | your OpenAI usage | Whisper (same key) | `OPENAI_API_KEY` in `.env`, `--voice ash` (or alloy, coral, echo, sage...) |
| `kokoro` | good, free, runs on your computer | free (Apache-2.0 model) | estimated (exact with a recogniser) | nothing; `--voice af_heart` (default), `am_michael`, `bm_george`... |
| `say` | robotic, drafts only | free (macOS) | estimated (exact with a recogniser) | Mac only, `--voice Samantha` |
| `file` | your own recording | free | speech check | `--file my-take.wav`, read the script exactly as written |

`--provider auto` (the default) picks ElevenLabs, then OpenAI, then Kokoro, then macOS say.
`--speed 1.1` speeds the read up (0.8-1.3). Kokoro voices: `af_heart`, `af_bella`, `af_nicole`,
`af_sarah`, `bf_emma` (female); `am_michael`, `am_fenrir`, `am_puck`, `bm_george`, `bm_fable` (male).

ElevenLabs default is "Brian" (`nPczCjzI2devNBz1zQrb`, a premade voice). Use any voice you have the
rights to; check your plan's licence before posting commercially.

## The check and exact timing

If a speech recogniser is available (local whisper.cpp after `npm run setup -- --whisper`, or an
OpenAI key), the tool transcribes the new voice and compares it with the script, word by word. It
reports the share of words not heard as written (numbers and sound-alikes like buy/by are ignored)
and a "listen for" list. Fix those words with a pronunciation file and re-run.

The recogniser also gives every word its real start and end. Without one, Kokoro and say timings
are estimated from pauses and syllables: on a 30-second test, half the words landed within 0.17 s
of the recognised timing, but the worst was 0.87 s off. Install whisper.cpp
(macOS: `brew install whisper-cpp`, then `npm run setup -- --whisper`) for captions that hit every word.

## Pronunciation

`pronounce.json` in the video folder (or the engine's root for every video) changes only what the
voice hears; captions keep the script's spelling:

```json
{"Tradient": "Tray-dee-ent", "SQL": "sequel", "GIF": "jif"}
```

## Your own recording

Record in a quiet room, phone close to your mouth, reading `script.md` exactly. Then:
`npm run voice -- <video> --provider file --file ~/Desktop/take1.m4a`. The engine trims the ends,
levels it, and aligns every word (a speech recogniser makes this precise).

## Pace

Short explainers read best at 2.5-3.2 words a second. The report prints it; the tool warns outside
2.2-3.4. Adjust with `--speed`, or trim the script.
