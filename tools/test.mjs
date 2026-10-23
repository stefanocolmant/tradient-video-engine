#!/usr/bin/env node
// npm test   fast checks of the engine's logic (no rendering): cues, captions, numbers, colours,
// styles, the script checker and every bundled storyboard and style.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {ROOT, STYLES, VIDEOS, exists, readJSON} from './lib/paths.mjs';
import {findPhrase, resolveCue, resolveStoryboard} from '../src/core/timeline.mjs';
import {chunkWords, overlap} from '../src/core/captions.mjs';
import {findNumbers, isClaim} from '../src/core/numbers.mjs';
import {contrast, readable, hex} from '../src/core/color.mjs';
import {normalizeStyle, validateStyle} from '../src/core/style.mjs';
import {CATALOG} from '../src/core/catalog.mjs';
import {beats, sceneSounds} from '../src/core/beats.mjs';
import {fromSpeech, fromRecognised} from './lib/align.mjs';
import {tokens} from '../src/core/text.mjs';

let pass = 0, fail = 0;
const t = (name, fn) => { try { fn(); pass++; console.log(`  ok   ${name}`); } catch (e) { fail++; console.log(`  FAIL ${name}\n       ${e.message}`); } };
const W = (text, step = 0.3) => tokens(text).map((tk, i) => ({w: tk.raw, s: +(i * step).toFixed(2), e: +(i * step + step * 0.9).toFixed(2)}));

console.log('timeline');
t('phrase across split ASR tokens', () => { const w = [{w: '4', s: 0, e: 0.2}, {w: ',000', s: 0.2, e: 0.5}, {w: 'meters', s: 0.5, e: 1}]; assert.deepEqual(findPhrase(w, '4,000 meters'), [[0, 2]]); });
t('repeated phrase resolves after the previous scene', () => { const w = W('buy now and buy later'); assert.equal(resolveCue('buy', w, {after: 0.5}).time, w[3].s); });
t('missing phrase gives suggestions', () => { const r = resolveCue('by later', W('buy now and buy later')); assert.equal(r.ok, false); assert.ok(r.suggest.length > 0); });
t('first scene starts at frame 0, scenes are contiguous', () => {
  const w = W('one two three four five six seven eight');
  const r = resolveStoryboard({scenes: [{type: 'title', props: {text: 'x'}}, {type: 'title', at: 'four', props: {text: 'y'}}]}, w, {});
  assert.equal(r.errors.length, 0); assert.equal(r.scenes[0].start, 0); assert.equal(r.scenes[0].end, r.scenes[1].start);
});
t('sub-cues resolve relative to their scene', () => {
  const w = W('first we go to the broker then the wholesaler');
  const r = resolveStoryboard({scenes: [{type: 'flow', props: {nodes: [{label: 'a'}, {label: 'b', at: 'wholesaler'}]}}]}, w, {});
  assert.ok(r.scenes[0].props.nodes[1].atFrame > 0);
});
t('no voice: holds', () => { const r = resolveStoryboard({scenes: [{type: 'title', hold: 2}, {type: 'title', hold: 3}]}, [], {}); assert.equal(r.durationInFrames, 150); });

console.log('captions');
t('chunks break on punctuation and budget', () => { const c = chunkWords(W('This is short. And this one keeps going for a while longer'), {maxWords: 3}); assert.ok(c.every((x) => x.words.length <= 4)); assert.equal(c[0].text, 'This is short.'); });
t('overlap detects repeated narration', () => { assert.ok(overlap('Never a worse price', W('it can never give you a worse price')) >= 0.5); });

console.log('numbers');
t('digits and words', () => { assert.equal(findNumbers('$460 million')[0].value, 460e6); assert.equal(findNumbers('ninety percent')[0].value, 90); assert.equal(findNumbers('three hundred eighty-four thousand km')[0].value, 384000); assert.equal(findNumbers('since May 2024.')[0].value, 2024); });
t('small counts are not claims', () => { assert.equal(isClaim(findNumbers('two things')[0]), false); assert.equal(isClaim(findNumbers('3 days')[0]), true); });

console.log('colour and style');
t('contrast', () => { assert.ok(Math.abs(contrast('#FFFFFF', '#000000') - 21) < 0.01); });
t('readable pushes a colour until it passes', () => { assert.ok(contrast(readable('#F4F1EA', ['#F2C14E'], 4.5), '#F4F1EA') >= 4.5); });
t('a style needs only bg + accent', () => { const s = normalizeStyle({palette: {bg: '#101010', accent: '#FF5500'}}); assert.ok(s.palette.text && s.palette.muted && s.palette.surface); assert.ok(contrast(s.palette.text, s.palette.bg) >= 4.5); });
t('bad enums are reported', () => { const r = validateStyle({palette: {bg: '#000', accent: '#f50'}, captions: {mode: 'wobbly'}}); assert.ok(r.problems.some((p) => p.includes('captions.mode'))); });

console.log('alignment');
t('pauses land on punctuation', () => { const tk = tokens('Hello there. How are you?'); const w = fromSpeech(tk, [[0, 0.8], [1.2, 2.0]]); assert.ok(w[2].s >= 1.19); });
t('recognised words map onto the script', () => { const tk = tokens('You tap Buy now'); const r = fromRecognised(tk, [{word: 'You', start: 0, end: 0.2}, {word: 'tap', start: 0.2, end: 0.4}, {word: 'by', start: 0.4, end: 0.6}, {word: 'now', start: 0.6, end: 0.8}]); assert.equal(r.words[2].s, 0.4); assert.equal(r.mismatches.length, 0); });
t('spoken numbers match digits; swallowed words share the time', () => {
  const tk = tokens('filled near forty-six. Want a floor? fifty dollars now');
  const heard = [['filled', 0, 0.5], ['near', 0.5, 0.9], ['$46.', 0.9, 1.9], ['Wanna', 1.9, 2.3], ['floor?', 2.3, 2.8], ['$50', 3, 3.8], ['now', 3.8, 4.1]];
  const w = fromRecognised(tk, heard.map(([word, start, end]) => ({word, start, end}))).words;
  assert.equal(w[2].s, 0.9); assert.equal(w[3].s, 1.9); assert.ok(w[4].s > 1.9 && w[4].e <= 2.3);
  assert.equal(w[6].s, 3); assert.ok(w[6].e > 3.2 && w[7].s === w[6].e && w[7].e === 3.8);
});

console.log('beats and sounds');
t('list items without cues are spread over the scene', () => { const f = beats.list({items: [{text: 'a'}, {text: 'b'}, {text: 'c'}]}, 90, 30); assert.equal(f[0], 0); assert.ok(f[2] > f[1]); });
t('scenes make their own sounds', () => { const s = sceneSounds({type: 'cta', props: {}, start: 0, end: 90, id: 's1', index: 3}, 30); assert.equal(s[0].name, 'click'); });

console.log('bundled styles');
for (const id of fs.readdirSync(STYLES).filter((d) => !d.startsWith('_') && exists(path.join(STYLES, d, 'style.json')))) {
  t(`style ${id} is valid and its fonts exist`, () => {
    const raw = readJSON(path.join(STYLES, id, 'style.json'));
    const r = validateStyle(raw);
    assert.deepEqual(r.problems, []);
    for (const role of Object.keys(raw.fonts ?? {})) for (const f of Object.values(raw.fonts[role].files ?? {})) assert.ok(exists(path.join(STYLES, id, f)) || exists(path.join(ROOT, 'public', f)), `${role} font file ${f} missing`);
  });
}

console.log('bundled videos');
for (const id of fs.readdirSync(VIDEOS).filter((d) => !d.startsWith('_') && exists(path.join(VIDEOS, d, 'storyboard.json')))) {
  t(`storyboard ${id} uses known scene types and resolves`, () => {
    const sb = readJSON(path.join(VIDEOS, id, 'storyboard.json'));
    for (const s of sb.scenes) assert.ok(CATALOG[s.type], `unknown type ${s.type}`);
    const wf = path.join(VIDEOS, id, 'voice', 'words.json');
    if (exists(wf)) { const r = resolveStoryboard(sb, readJSON(wf), normalizeStyle(readJSON(path.join(STYLES, sb.style, 'style.json')))); assert.deepEqual(r.errors, []); }
  });
}

console.log(`\n${fail ? 'FAIL' : 'PASS'}: ${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
