// Word timings for a narration whose text we already know.
//  - fromSpeech(): no speech recogniser needed. Finds the pauses in the audio and matches them to the
//    script's punctuation, then shares each stretch of speech between its words by syllables.
//  - fromRecognised(): maps recognised words (Whisper etc.) back onto the script's own spelling.
import {norm, syllables} from '../../src/core/text.mjs';
import {envelope} from './wav.mjs';

const weight = (t) => syllables(t.raw) + 0.35;

// Recognisers write numbers as digits and pick one spelling of words that sound alike; neither is a
// voice mistake, so they are not reported.
const SOUNDS_ALIKE = [['buy', 'by', 'bye'], ['to', 'too', 'two'], ['for', 'four'], ['their', 'there', "they're"], ['your', "you're"], ['its', "it's"], ['know', 'no'], ['right', 'write'], ['one', 'won'], ['eight', 'ate'], ['hour', 'our'], ['here', 'hear'], ['weather', 'whether'], ['whole', 'hole'], ['ok', 'okay']];
const NUMBERISH = /^(\d[\d,.%]*|zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|thousand|million|billion|trillion|percent|point|dollars?)$/;
const numberish = (w) => String(w ?? '').toLowerCase().split(/[-\s]+/).filter(Boolean).every((p) => NUMBERISH.test(norm(p)));
const unitOnly = (w) => /^(percent|point|dollars?)$/.test(norm(w ?? '')); // "fifty dollars" is written "$50": the number takes it
export const harmless = (a, b) => {
  const x = norm(a ?? ''), y = norm(b ?? '');
  if (numberish(a) || numberish(b) || /\d/.test(b ?? '') || /\d/.test(a ?? '')) return true;
  return SOUNDS_ALIKE.some((g) => g.includes(x) && g.includes(y));
};

// How far apart a script word and a recognised word are (0 = the same word).
const cost = (a, b, rawA, rawB) => {
  if (a === b) return 0;
  if (numberish(rawA) && /\d/.test(rawB ?? '')) return unitOnly(rawA) ? 0.3 : 0.1; // "forty-six" is written "$46"
  if (SOUNDS_ALIKE.some((g) => g.includes(a) && g.includes(b))) return 0.2;
  if (a && b && (a.startsWith(b) || b.startsWith(a))) return 0.4;
  if (a.length >= 3 && b.length >= 3 && a.slice(0, 3) === b.slice(0, 3)) return 0.6; // "want" heard as "wanna"
  return 1;
};

// Speech stretches [start, end] in seconds, separated by pauses of at least `minGap`.
export function speechSegments(mono, sr, {minGap = 0.11, win = 0.01} = {}) {
  const env = envelope(mono, sr, win);
  const sorted = [...env].sort((a, b) => a - b);
  const floor = sorted[Math.floor(sorted.length * 0.1)] ?? 0;
  const peak = sorted[Math.floor(sorted.length * 0.98)] ?? 1;
  const th = Math.max(floor * 2.5, peak * 0.045, 1e-4);
  const segs = [];
  let st = -1, quiet = 0;
  const need = Math.round(minGap / win);
  for (let i = 0; i <= env.length; i++) {
    const loud = i < env.length && env[i] > th;
    if (loud) { if (st < 0) st = i; quiet = 0; }
    else if (st >= 0) {
      quiet++;
      if (quiet >= need || i === env.length) { segs.push([st * win, (i - quiet + 1) * win]); st = -1; quiet = 0; }
    }
  }
  return segs.filter(([a, b]) => b - a > 0.04);
}

// Assign script tokens to the speech stretches. Pauses land on punctuation whenever they can.
export function fromSpeech(tokens, segs, offset = 0) {
  if (!tokens.length) return [];
  if (!segs.length) segs = [[0, Math.max(0.5, tokens.length * 0.33)]];
  const C = [0];
  for (const t of tokens) C.push(C[C.length - 1] + weight(t));
  const total = C[C.length - 1];
  const speech = segs.reduce((s, [a, b]) => s + (b - a), 0);
  // Each pause between stretches k and k+1 -> a token boundary (after token i-1, before token i).
  const cuts = [];
  let acc = 0, last = 0;
  for (let k = 0; k < segs.length - 1; k++) {
    acc += segs[k][1] - segs[k][0];
    const f = acc / speech;
    const gap = segs[k + 1][0] - segs[k][1];
    let best = -1, bestScore = Infinity;
    for (let i = last + 1; i < tokens.length - (segs.length - 2 - k); i++) {
      const prev = tokens[i - 1];
      const bonus = prev.end === 'sentence' ? 0.07 + Math.min(0.06, gap * 0.08) : prev.end === 'comma' ? 0.045 : 0;
      const score = Math.abs(C[i] / total - f) - bonus;
      if (score < bestScore) { bestScore = score; best = i; }
    }
    if (best > last) { cuts.push(best); last = best; }
  }
  // Merge stretches that did not get their own cut.
  const groups = [];
  let gi = 0, start = 0;
  const bounds = [...cuts, tokens.length];
  const segsUsed = [];
  if (cuts.length === segs.length - 1) segs.forEach((s) => segsUsed.push(s));
  else {
    // fewer cuts than pauses: spread the stretches evenly over the groups by speech time
    const per = Math.ceil(segs.length / bounds.length);
    for (let g = 0; g < bounds.length; g++) { const part = segs.slice(g * per, (g + 1) * per); if (part.length) segsUsed.push([part[0][0], part[part.length - 1][1]]); }
    while (segsUsed.length < bounds.length) segsUsed.push(segsUsed[segsUsed.length - 1]);
  }
  for (const end of bounds) { groups.push([start, end, segsUsed[gi++] ?? segsUsed[segsUsed.length - 1]]); start = end; }
  const out = [];
  for (const [a, b, [s0, s1]] of groups) {
    const w = C[b] - C[a] || 1;
    for (let i = a; i < b; i++) {
      const s = s0 + ((C[i] - C[a]) / w) * (s1 - s0);
      const e = s0 + ((C[i + 1] - C[a]) / w) * (s1 - s0);
      out.push({w: tokens[i].raw, s: +(s + offset).toFixed(3), e: +(e + offset).toFixed(3)});
    }
  }
  return out;
}

// Map recognised words [{word, start, end}] onto script tokens by sequence alignment.
export function fromRecognised(tokens, rec) {
  const A = tokens.map((t) => t.n), B = rec.map((r) => norm(r.word));
  const n = A.length, m = B.length;
  const D = Array.from({length: n + 1}, () => new Float32Array(m + 1));
  const back = Array.from({length: n + 1}, () => new Uint8Array(m + 1));
  for (let i = 1; i <= n; i++) { D[i][0] = i; back[i][0] = 1; }
  for (let j = 1; j <= m; j++) { D[0][j] = j; back[0][j] = 2; }
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
    const d = D[i - 1][j - 1] + cost(A[i - 1], B[j - 1], tokens[i - 1].raw, rec[j - 1].word), u = D[i - 1][j] + 1, l = D[i][j - 1] + 1;
    if (d <= u && d <= l) { D[i][j] = d; back[i][j] = 0; } else if (u <= l) { D[i][j] = u; back[i][j] = 1; } else { D[i][j] = l; back[i][j] = 2; }
  }
  const match = new Array(n).fill(-1);
  const mism = [];
  for (let i = n, j = m; i > 0 || j > 0;) {
    const b = back[i][j];
    if (i > 0 && j > 0 && b === 0) { match[i - 1] = j - 1; if (A[i - 1] !== B[j - 1]) mism.push({script: tokens[i - 1].raw, heard: rec[j - 1].word}); i--; j--; }
    else if (i > 0 && (j === 0 || b === 1)) { mism.push({script: tokens[i - 1].raw, heard: null}); i--; }
    else { mism.push({script: null, heard: rec[j - 1].word}); j--; }
  }
  const out = tokens.map((t, i) => (match[i] >= 0 ? {w: t.raw, s: rec[match[i]].start, e: rec[match[i]].end} : {w: t.raw, s: null, e: null}));
  // Words the recogniser missed. With room between their neighbours, they share that time. Without
  // room, a neighbour swallowed them ("want a" heard as "wanna", "fifty dollars" written "$50"): the
  // neighbour heard differently from the script is the one that did, and they share its time.
  const inexact = (k) => k >= 0 && k < n && match[k] >= 0 && A[k] !== B[match[k]];
  const share = (from, to, a, b) => {
    const w = [];
    for (let k = from; k < to; k++) w.push(weight(tokens[k]));
    const total = w.reduce((x, y) => x + y, 0);
    let acc = 0;
    for (let k = from; k < to; k++) {
      out[k].s = +(a + (acc / total) * (b - a)).toFixed(3);
      acc += w[k - from];
      out[k].e = +(a + (acc / total) * (b - a)).toFixed(3);
    }
  };
  for (let i = 0; i < n; i++) {
    if (out[i].s !== null) continue;
    let j = i; while (j < n && out[j].s === null) j++;
    const a = i > 0 ? out[i - 1].e : (out[j]?.s ?? 0) - 0.3 * (j - i);
    const b = j < n ? out[j].s : a + 0.3 * (j - i);
    if (b - a >= 0.08 * (j - i)) share(i, j, a, b);
    else if (i > 0 && (inexact(i - 1) || !inexact(j) || j === n)) share(i - 1, j, out[i - 1].s, b);
    else share(i, j + 1, a, out[j].e);
    i = j - 1;
  }
  const wer = (D[n][m] / Math.max(1, n));
  const real = mism.reverse().filter((x) => !(x.script && x.heard && cost(norm(x.script), norm(x.heard), '', '') <= 0.4)).filter((x) => !harmless(x.script, x.heard));
  return {words: out, wer, realWer: real.filter((x) => x.script).length / Math.max(1, n), mismatches: real};
}
