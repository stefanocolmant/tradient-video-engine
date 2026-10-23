#!/usr/bin/env node
// npm run script:check -- <video>
// Checks script.md against the rules in docs/SCRIPT.md: length for the target duration, a hook that
// lands in the first line, sentences short enough to say, spoken (not written) English, no AI
// cliches, nothing the voice will misread, and a source in facts.md for every number.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {args, exists, rel, videoDir} from './lib/paths.mjs';
import {frontMatter, norm, scriptText, sentences, syllables} from '../src/core/text.mjs';
import {findNumbers, isClaim} from '../src/core/numbers.mjs';

export const BANNED = [
  'delve', 'tapestry', 'testament to', 'in today\'s fast-paced', 'fast-paced world', 'ever-evolving', 'ever-changing landscape', 'game-changer', 'game changer',
  'unlock the', 'unleash', 'let\'s dive in', 'dive into', 'deep dive', 'navigate the', 'navigating the', 'in the realm of', 'realm', 'the landscape of', 'harness the', 'elevate your',
  'seamless', 'seamlessly', 'robust', 'cutting-edge', 'revolutionize', 'revolutionary', 'it\'s important to note', 'it is important to note', 'in conclusion', 'moreover', 'furthermore',
  'embark', 'pivotal', 'vibrant', 'bustling', 'intricate', 'multifaceted', 'paramount', 'plethora', 'myriad', 'buckle up', 'spoiler alert', 'secret sauce', 'imagine a world',
  'look no further', 'without further ado', 'at the end of the day', 'when it comes to', 'a world where', 'not only', 'stands as', 'serves as a', 'boasts', 'nestled', 'beacon',
  'ultimately,', 'in essence', 'symphony', 'unprecedented', 'transformative', 'synergy', 'leverage', 'empower', 'holistic', 'paradigm',
];
const WEAK_OPEN = [/^(hey|hi|hello)\b/i, /^welcome\b/i, /^in this video\b/i, /^today,? (we|i)('re| are| will|'ll)/i, /^so,? today/i, /^let('s| us) talk about/i, /^let me tell you/i];
const CLICHE_OPEN = [/^did you know\b/i, /^have you ever wondered\b/i, /^imagine\b/i, /^what if i told you/i];
const STOP = new Set("the a an and or but of to in on at for with by from is are was were be been it its it's this that that's these those you your you're you'll i i'm we we're they they're he she them his her our their as not no so if then than there there's here what what's which who how why when where do does did don't doesn't didn't isn't aren't can't won't have has had will would can could just only also more most very really about into over out up down".split(' '));
const CONTRACTION = /\b\w+'(s|re|ve|ll|d|m|t)\b|\b(can't|won't|don't|isn't|aren't|wasn't|weren't|doesn't|didn't|haven't|hasn't|couldn't|shouldn't|wouldn't)\b/gi;

const row = (status, check, detail) => ({status, check, detail});

export function checkScript(dir, {pace} = {}) {
  const file = path.join(dir, 'script.md');
  if (!exists(file)) throw new Error(`No ${rel(file)} yet.`);
  const md = fs.readFileSync(file, 'utf8');
  const fm = frontMatter(md);
  const text = scriptText(md);
  const rows = [];
  if (!text) return {rows: [row('FAIL', 'script', 'script.md has no spoken text yet')], fails: 1};
  const sents = sentences(text);
  const words = text.split(/\s+/).filter((w) => norm(w));
  const target = Number(fm.seconds ?? 45);
  const wps = Number(pace ?? fm.pace ?? 2.8);
  const est = words.length / wps;

  // Length.
  const lo = target * 0.75, hi = target * 1.12;
  rows.push(est > hi || est < lo ? row('FAIL', 'length', `${words.length} words ≈ ${est.toFixed(0)} s at ${wps} words/s; target ${target} s (keep it between ${Math.round(lo * wps)} and ${Math.round(hi * wps)} words)`)
    : Math.abs(est - target) / target > 0.06 ? row('WARN', 'length', `${words.length} words ≈ ${est.toFixed(0)} s for a ${target} s target`)
    : row('PASS', 'length', `${words.length} words ≈ ${est.toFixed(0)} s (target ${target} s)`));

  // Hook.
  const first = sents[0] ?? '';
  const fw = first.split(/\s+/).length;
  if (WEAK_OPEN.some((r) => r.test(first))) rows.push(row('FAIL', 'hook', `opens with a throat-clear: "${first.slice(0, 60)}". Start on the most surprising fact, the stakes, or the question.`));
  else if (CLICHE_OPEN.some((r) => r.test(first))) rows.push(row('WARN', 'hook', `"${first.split(/\s+/).slice(0, 4).join(' ')}..." is a tired opener; lead with the fact itself`));
  else if (fw > 20) rows.push(row('FAIL', 'hook', `first sentence is ${fw} words; the hook must land in under 3 seconds (≤ 14 words)`));
  else if (fw > 14) rows.push(row('WARN', 'hook', `first sentence is ${fw} words; aim for ≤ 14`));
  else rows.push(row('PASS', 'hook', `"${first}" (${fw} words)`));
  const opening = sents.slice(0, 2).join(' ').toLowerCase();
  rows.push(/\byou\b|\byour\b|\?/.test(opening) || /\d|million|billion|percent/.test(opening) ? row('PASS', 'viewer', 'the opening talks to the viewer or leads with a number') : row('WARN', 'viewer', 'the first two sentences never say "you" or give a number: pull the viewer in'));

  // Sentences.
  const lens = sents.map((s) => s.split(/\s+/).length);
  const longest = Math.max(...lens), avg = lens.reduce((a, b) => a + b, 0) / lens.length;
  const long = sents.filter((s) => s.split(/\s+/).length > 24);
  rows.push(longest > 28 ? row('FAIL', 'sentence length', `${long.length} sentence(s) over 24 words, longest ${longest}: "${long[0]?.slice(0, 70)}..." Split them.`)
    : longest > 22 ? row('WARN', 'sentence length', `longest sentence ${longest} words (avg ${avg.toFixed(1)}); spoken lines read best under 20`)
    : row('PASS', 'sentence length', `avg ${avg.toFixed(1)} words, longest ${longest}`));

  // Spoken English.
  const contractions = (text.match(CONTRACTION) ?? []).length;
  const per100 = (contractions / words.length) * 100;
  rows.push(per100 < 2 ? row('WARN', 'spoken style', `${contractions} contractions (${per100.toFixed(1)} per 100 words): say "it's", "you're", "don't" the way people talk`) : row('PASS', 'spoken style', `${per100.toFixed(1)} contractions per 100 words`));
  const syl = words.reduce((s, w) => s + syllables(w), 0);
  const flesch = 206.835 - 1.015 * (words.length / sents.length) - 84.6 * (syl / words.length);
  rows.push(flesch < 55 ? row('WARN', 'plain words', `reading ease ${flesch.toFixed(0)} (aim for 60+): swap long words for short ones`) : row('PASS', 'plain words', `reading ease ${flesch.toFixed(0)}`));

  // AI tells and punctuation the voice stumbles on.
  const lower = ' ' + text.toLowerCase().replace(/[’]/g, "'") + ' ';
  const hits = BANNED.filter((b) => new RegExp(`(^|[^a-z])${b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^a-z]|$)`).test(lower));
  rows.push(hits.length ? row('FAIL', 'AI cliches', `remove: ${hits.map((h) => `"${h}"`).join(', ')}`) : row('PASS', 'AI cliches', 'none of the banned phrases'));
  const dashes = (text.match(/\s[—–]\s|—|–/g) ?? []).length;
  rows.push(dashes ? row('FAIL', 'dashes', `${dashes} em/en dash(es): use a period or comma (the voice reads dashes badly and they read as AI text)`) : row('PASS', 'dashes', 'none'));
  const traps = [];
  for (const [re, say] of [[/&/g, '"and"'], [/\be\.g\./gi, '"for example"'], [/\bi\.e\./gi, '"that is"'], [/\betc\./gi, '"and so on"'], [/\bvs\.?\b/gi, '"versus"'], [/\d+\s*[-–]\s*\d+/g, 'say the range in words ("ten to fifteen")'], [/\d+\/\d+/g, 'fractions in words ("one in three")'], [/#/g, '"number"'], [/\bw\/\b/gi, '"with"']]) {
    const m = text.match(re);
    if (m) traps.push(`${m[0]} -> ${say}`);
  }
  rows.push(traps.length ? row('WARN', 'voice traps', traps.join('; ')) : row('PASS', 'voice traps', 'nothing the voice is likely to misread'));
  const process_ = ['this video', 'in this reel', 'ai-generated', 'storyboard', 'voiceover', 'the engine'].filter((p) => lower.includes(p));
  rows.push(process_.length ? row('WARN', 'process talk', `talks about making the video: ${process_.join(', ')}`) : row('PASS', 'process talk', 'none'));

  // Repetition.
  const counts = new Map();
  for (const w of words) { const n = norm(w); if (n.length > 3 && !STOP.has(n)) counts.set(n, (counts.get(n) ?? 0) + 1); }
  const rep = [...counts].filter(([, c]) => c >= 4).map(([w, c]) => `${w} ×${c}`);
  const openers = sents.map((s) => norm(s.split(/\s+/)[0]));
  let triple = null;
  for (let i = 2; i < openers.length; i++) if (openers[i] && openers[i] === openers[i - 1] && openers[i] === openers[i - 2]) triple = openers[i];
  rows.push(rep.length || triple ? row('WARN', 'repetition', [rep.length ? `repeated words: ${rep.join(', ')}` : '', triple ? `three sentences in a row start with "${triple}"` : ''].filter(Boolean).join('; ')) : row('PASS', 'repetition', 'no word overused'));

  // Facts: every number that is a claim must appear in facts.md.
  const factsFile = path.join(dir, 'facts.md');
  const facts = exists(factsFile) ? fs.readFileSync(factsFile, 'utf8') : '';
  const factVals = new Set(findNumbers(facts).map((n) => n.value));
  const claims = findNumbers(text).filter(isClaim);
  const unsourced = claims.filter((n) => !factVals.has(n.value));
  rows.push(!claims.length ? row('PASS', 'sources', 'no numbers to source') : unsourced.length ? row('FAIL', 'sources', `not in facts.md: ${unsourced.map((n) => `"${n.text}${n.unit ? ' ' + n.unit : ''}"`).join(', ')}`) : row('PASS', 'sources', `all ${claims.length} number(s) found in facts.md`));
  const sourcedRows = (facts.match(/https?:\/\/\S+/g) ?? []).length;
  if (claims.length && !sourcedRows) rows.push(row('WARN', 'sources', 'facts.md has no links: add the URL each fact came from'));

  // Ending and call to action.
  const last = sents[sents.length - 1] ?? '';
  const briefFile = path.join(dir, 'brief.md');
  const brief = exists(briefFile) ? fs.readFileSync(briefFile, 'utf8') : '';
  const cta = brief.match(/Call to action:\s*(.+)/i)?.[1]?.trim() ?? '';
  const wantsCta = cta && !/^\(|nothing|none/i.test(cta);
  const tail = sents.slice(-2).join(' ').toLowerCase();
  if (wantsCta && !/follow|comment|link|save|share|subscribe|bio|dm|part \w+/.test(tail)) rows.push(row('WARN', 'ending', `the brief asks for "${cta}" but the last lines don't ask for it`));
  else rows.push(last.split(/\s+/).length > 18 ? row('WARN', 'ending', 'the last sentence is long; end on a short, punchy line') : row('PASS', 'ending', `"${last}"`));

  const fails = rows.filter((r) => r.status === 'FAIL').length;
  return {rows, fails, warns: rows.filter((r) => r.status === 'WARN').length, words: words.length, seconds: est, target};
}

const isMain = path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMain) {
  const a = args();
  try {
    const dir = videoDir(a._[0]);
    const r = checkScript(dir, {pace: a.pace});
    console.log(`Script check: ${rel(path.join(dir, 'script.md'))}`);
    for (const x of r.rows) console.log(`  ${x.status}  ${x.check.padEnd(16)} ${x.detail}`);
    console.log(`\n${r.fails ? 'FAIL' : 'PASS'}: ${r.fails} to fix, ${r.warns} to consider.`);
    process.exit(r.fails ? 1 : 0);
  } catch (e) {
    console.error(e?.message ?? e);
    process.exit(1);
  }
}
