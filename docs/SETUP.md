# Setup

You need a Mac, Windows or Linux computer with about 3 GB free.

## 1. Install Node.js (once)

Download the LTS version from https://nodejs.org and install it (Node 20 or newer).
Check in a terminal: `node --version`.

## 2. Get the engine

```sh
git clone --depth 1 https://github.com/stefanocolmant/tradient-video-engine.git
cd tradient-video-engine
npm run setup
```

No git? On the GitHub page click **Code > Download ZIP**, unzip it, open a terminal in the folder and
run `npm run setup`.

`npm run setup` installs the packages, downloads the render browser (~100 MB) and the free voice model
(~90 MB), makes a `.env` file for optional keys, and prints a health check. It takes 2-5 minutes the
first time and is safe to run again. FFmpeg is included; nothing else to install.

## 3. Open it with your AI agent

Open the folder in **Claude Code** (`claude` in the folder, or the desktop app) or **Codex**, and ask:
**"How do I run it?"** The agent checks the setup and offers the three styles. From then on just
tell it what video you want.

Prefer to look first? `npm run gallery` opens START-HERE.html with the three example videos.

## Optional extras

| extra | why | how |
|---|---|---|
| ElevenLabs voice | the most human narration, exact timings | put `ELEVENLABS_API_KEY=...` in `.env` |
| OpenAI voice | very good narration + Whisper checks | put `OPENAI_API_KEY=...` in `.env` |
| whisper.cpp | free word-by-word check of every voice | macOS: `brew install whisper-cpp`, then `npm run setup -- --whisper` |
| yt-dlp | train styles from video links | macOS: `brew install yt-dlp` · Windows: `winget install yt-dlp` |
| FFmpeg | faster media tools (optional; one is bundled) | macOS: `brew install ffmpeg` |

`.env` stays on your computer (it is git-ignored).

## Licences

- The engine's code: MIT. Remotion (the renderer it uses) is free for individuals and companies of up
  to 3 people; larger companies need a Remotion company licence (https://remotion.dev/license).
- Fonts: open licences (OFL / Apache), notices in `licenses/`.
- Sounds and music in `public/`: made by this project's code (`tools/sfx-gen`), free to use.
- Example photos and video frames: NASA, public domain. Earth textures: NASA.
- Voices: Kokoro is Apache-2.0. ElevenLabs/OpenAI voices follow your plan's terms.
