# Troubleshooting

Run `npm run doctor` first: it says what is missing and how to fix each line.

| problem | fix |
|---|---|
| `node: command not found` | Install Node 20+ from https://nodejs.org, open a new terminal. |
| `npm run setup` stops during `npm install` | Check your internet connection and run it again. On a work network, ask for npm access or set `HTTPS_PROXY`. |
| "The free local voice is not installed" | `npm install kokoro-js`, or use another provider (`--provider say` on a Mac, an API key, or `--provider file` with your own recording). |
| The voice skips or garbles a word | Add it to `pronounce.json` (`{"word": "how it sounds"}`) and run `npm run voice -- <video>` again. |
| "Phrase not in the voice: ..." | The `at` text must match the narration. The error lists the closest real phrases; or open `voice/words.json`. If you changed the script, re-run the voice first. |
| "text-too-long" in the audit | The text doesn't fit its scene at the minimum size: shorten it (titles ≤ 7 words, labels ≤ 5) or use another scene type. |
| "no icon ..." | `npm run icons -- <word>` lists real icon names. |
| A font isn't found | Only open fonts can ship in a style; `npm run styles -- fonts <word>` finds a close one. |
| 3D scenes render black on Linux | `RENDER_GL=angle-egl npm run render -- <video>` (or `swangle` on machines without a GPU). |
| Rendering is slow or the computer struggles | `npm run render -- <video> --draft` for half-size previews; `--workers 2` to use fewer cores; close other heavy apps. |
| "Missing files" before a render | Put images in the video's `assets/` folder and reference them as `assets/name.png`. |
| QA fails on loudness or peaks | Re-render; if your own music is very loud, lower `"music": {"volume": 0.1}`. |
| Disk filling up | Delete old versions in `videos/<name>/out/` (keep the one you like). Temporary render files clean themselves. |
| A style learned the wrong background | Pictures decide the background; add better pictures, or set it in `styles/<name>/overrides.json` and re-learn. |
| A video link won't download for style training | Install `yt-dlp`, or download the video and drop the file into `styles/_inbox/<name>/`. |
| Studio preview has no sound | Run `npm run preview -- <video>` again after `npm run voice`; it rebuilds the mix. |

Still stuck: run the failing command again and give the full output to your AI agent.
