#!/usr/bin/env node
// npm run make -- <video> [--provider kokoro|elevenlabs|openai|say|file] [--voice NAME] [--revoice] [--draft]
// The whole pipeline once the brief, facts, script and storyboard are written:
// script check -> voice (when missing or older than the script) -> storyboard check -> stills -> render -> QA.
import fs from 'node:fs';
import path from 'node:path';
import {args, exists, rel, videoDir} from './lib/paths.mjs';
import {checkScript} from './script-check.mjs';
import {makeVoice} from './voice.mjs';
import {checkStoryboard} from './storyboard-check.mjs';

const a = args();
const dir = videoDir(a._[0]);
const show = (title, r) => {
  console.log(`\n== ${title}`);
  for (const x of r.rows) if (x.status !== 'PASS') console.log(`  ${x.status}  ${x.check.padEnd(16)} ${x.detail}`);
  console.log(`  ${r.fails ? 'FAIL' : 'PASS'} (${r.fails} to fix, ${r.warns} to consider)`);
};
try {
  const s = checkScript(dir);
  show('Script', s);
  if (s.fails) { console.log('\nFix script.md first (docs/SCRIPT.md).'); process.exit(1); }
  const words = path.join(dir, 'voice', 'words.json');
  const stale = !exists(words) || fs.statSync(path.join(dir, 'script.md')).mtimeMs > fs.statSync(words).mtimeMs;
  if (stale || a.revoice) { console.log('\n== Voice'); await makeVoice(dir, a); }
  else console.log('\n== Voice\n  using the existing voice (script unchanged; --revoice to redo it)');
  const b = checkStoryboard(dir);
  show('Storyboard', b);
  if (b.fails) { console.log('\nFix storyboard.json first (docs/STORYBOARD.md, docs/SCENES.md).'); process.exit(1); }
  const {renderStills, renderVideo} = await import('./render.mjs');
  console.log('\n== Stills');
  const st = await renderStills(dir, {});
  console.log('\n== Render');
  const out = await renderVideo(dir, {draft: !!a.draft, workers: a.workers});
  const qa = renderVideo.lastQA;
  if (qa && qa.verdict !== 'PASS') {
    console.log(`\nQA FAILED for ${rel(out)}: fix the failed checks above, then npm run render -- ${path.basename(dir)}`);
    process.exit(1);
  }
  console.log(`\nDone: ${rel(out)}\nReview sheet from the real file: ${rel(out.replace(/\.mp4$/, '_review.jpg'))}\nStoryboard stills: ${rel(st.sheet)}`);
  process.exit(0);
} catch (e) {
  console.error('\n' + (e?.message ?? e));
  process.exit(1);
}
