#!/usr/bin/env node
// npm run new -- <name> [--style house] [--seconds 45] [--topic "..."]
// Makes videos/<name>/ with the files every video needs, each one explaining what goes in it.
import fs from 'node:fs';
import path from 'node:path';
import {args, exists, rel, VIDEOS, STYLES, writeJSON} from './lib/paths.mjs';

const a = args();
const name = String(a._[0] ?? '').toLowerCase().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
if (!name) { console.log('Usage: npm run new -- my-video-name [--style house] [--seconds 45] [--topic "what it is about"]'); process.exit(1); }
const dir = path.join(VIDEOS, name);
if (exists(dir)) { console.log(`${rel(dir)} already exists. Pick another name or work in that folder.`); process.exit(1); }
const style = String(a.style ?? 'house');
if (!exists(path.join(STYLES, style, 'style.json'))) { console.log(`No style "${style}". See: npm run styles`); process.exit(1); }
const seconds = Number(a.seconds ?? 45);
const topic = String(a.topic ?? '');
fs.mkdirSync(path.join(dir, 'assets'), {recursive: true});

fs.writeFileSync(path.join(dir, 'brief.md'), `# Brief

- Topic: ${topic || '(one line: what this video is about)'}
- Audience: (who is watching, what they already know)
- The one thing they should remember:
- Length: ${seconds} seconds
- Style: ${style}
- Voice: (auto | kokoro af_heart | elevenlabs <voice id> | openai ash | my own recording)
- Call to action: (follow / comment a word / link in bio / nothing)
- Must say / must not say:
`);

fs.writeFileSync(path.join(dir, 'facts.md'), `# Facts

Every number, date, name and claim in the script needs a line here with its source.
The script checker fails any number in the script that is not in this file.

| # | Fact (as it will be said) | Source (URL or document) | Checked |
|---|---|---|---|
| F1 | | | |
`);

fs.writeFileSync(path.join(dir, 'script.md'), `---
seconds: ${seconds}
---
<!-- The spoken words only. One idea per sentence. Blank line between beats.
     Rules: docs/SCRIPT.md. Check with: npm run script:check -- ${name} -->

`);

writeJSON(path.join(dir, 'storyboard.json'), {
  title: topic || name,
  style,
  music: {track: 'auto'},
  scenes: [],
  _help: 'One scene per line of the script. Each scene starts on a phrase from the narration ("at"). Scene types and their props: docs/SCENES.md. Check with: npm run storyboard:check -- ' + name,
});

console.log(`Made ${rel(dir)}/
  brief.md        what the video is for (fill this first)
  facts.md        every claim with its source
  script.md       the spoken words
  storyboard.json one scene per line, keyed to the narration
  assets/         your images, screenshots, logo

Next: fill brief.md, research facts.md, write script.md, then:
  npm run script:check -- ${name}
  npm run voice -- ${name}
  npm run storyboard:check -- ${name}
  npm run stills -- ${name}
  npm run render -- ${name}`);
