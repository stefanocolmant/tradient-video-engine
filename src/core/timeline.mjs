// Turns a storyboard (scenes keyed to spoken phrases) plus the voice's word timings into exact frames.
// Used by the renderer, the storyboard checker, the mixer and the QA tool, so they all agree.
import {norm} from './text.mjs';
import {sceneSounds} from './beats.mjs';

const isCueObject = (v) => v && typeof v === 'object' && !Array.isArray(v) && typeof v.phrase === 'string';
export const isCue = (v) => typeof v === 'number' || typeof v === 'string' || isCueObject(v);

// Every [first, last] word-index range whose words spell `phrase` (punctuation and spacing ignored,
// so ASR splits like "4" ",000" still match "4,000").
export function findPhrase(words, phrase) {
  const wanted = String(phrase).split(/\s+/).map(norm).join('');
  const hits = [];
  if (!wanted) return hits;
  for (let i = 0; i < words.length; i++) {
    let text = '';
    for (let j = i; j < words.length && text.length < wanted.length; j++) {
      const piece = norm(words[j].w);
      if (!piece) continue;
      text += piece;
      if (text === wanted) { hits.push([i, j]); break; }
      if (!wanted.startsWith(text)) break;
    }
  }
  return hits;
}

// Resolve one cue to seconds. A plain phrase picks its first occurrence at or after `after` seconds,
// so a word repeated later in the script lands on the right occurrence without counting.
export function resolveCue(cue, words, {after = -Infinity, before = Infinity} = {}) {
  if (typeof cue === 'number') return {time: cue, ok: true};
  const spec = typeof cue === 'string' ? {phrase: cue} : cue;
  if (!isCueObject(spec)) return {ok: false, error: `Not a cue: ${JSON.stringify(cue)}`};
  const hits = findPhrase(words, spec.phrase);
  if (!hits.length) return {ok: false, error: `Phrase not in the voice: "${spec.phrase}"`, suggest: suggest(words, spec.phrase)};
  let hit;
  if (spec.nth !== undefined) hit = hits[spec.nth];
  else hit = hits.find(([i]) => words[i].s >= after - 0.05 && words[i].s < before) ?? null;
  if (!hit) {
    const where = hits.map(([i]) => words[i].s.toFixed(2) + 's').join(', ');
    return {ok: false, error: `"${spec.phrase}" is said at ${where}, none inside this scene's window`};
  }
  const [i, j] = hit;
  const time = (spec.edge === 'end' ? words[j].e : words[i].s) + (spec.offset ?? 0);
  return {time, ok: true, first: i, last: j};
}

// Closest phrases actually spoken, for error messages.
function suggest(words, phrase) {
  const n = String(phrase).split(/\s+/).length;
  const target = norm(phrase);
  const scored = [];
  for (let i = 0; i + n <= words.length; i++) {
    const cand = words.slice(i, i + n).map((w) => w.w).join(' ');
    scored.push([similarity(norm(cand), target), cand]);
  }
  return scored.sort((a, b) => b[0] - a[0]).slice(0, 3).filter((s) => s[0] > 0.4).map((s) => s[1]);
}
function similarity(a, b) {
  if (!a || !b) return 0;
  const grams = (s) => { const g = new Map(); for (let i = 0; i < s.length - 1; i++) { const k = s.slice(i, i + 2); g.set(k, (g.get(k) ?? 0) + 1); } return g; };
  const A = grams(a), B = grams(b); let hit = 0, total = 0;
  for (const [k, v] of A) { hit += Math.min(v, B.get(k) ?? 0); total += v; }
  for (const v of B.values()) total += v;
  return total ? (2 * hit) / total : 0;
}

export const DEFAULTS = {fps: 30, width: 1080, height: 1920, lead: 0.12, tail: 1.2, minScene: 0.6, hold: 2.6};

// The main resolver. Returns frames for every scene, the words each one covers, resolved sub-cues
// (every nested object with an `at` gets an `atFrame` relative to its scene), sound events, and a
// list of problems (errors stop a render; warnings are printed).
export function resolveStoryboard(storyboard, words = [], style = {}, opts = {}) {
  const fps = storyboard.format?.fps ?? opts.fps ?? DEFAULTS.fps;
  const width = storyboard.format?.width ?? DEFAULTS.width;
  const height = storyboard.format?.height ?? DEFAULTS.height;
  const lead = storyboard.lead ?? style.motion?.lead ?? DEFAULTS.lead;
  const tail = storyboard.tail ?? DEFAULTS.tail;
  const errors = [], warnings = [];
  const scenes = (storyboard.scenes ?? []).map((s, index) => ({...s, index, id: s.id ?? `s${index + 1}`}));
  const voiced = words.length > 0;
  const voEnd = voiced ? words[words.length - 1].e : 0;

  // 1. Scene start times.
  let prevCue = -Infinity;
  let clock = 0;
  for (const s of scenes) {
    if (!voiced) {
      s.cueTime = clock;
      clock += s.hold ?? DEFAULTS.hold;
      continue;
    }
    if (s.at === undefined || s.at === null) {
      if (s.index === 0) { s.cueTime = 0; prevCue = 0; continue; }
      errors.push(`${s.id}: every scene after the first needs "at" (the phrase it starts on)`);
      s.cueTime = prevCue + 1;
      continue;
    }
    const r = resolveCue(s.at, words, {after: prevCue});
    if (!r.ok) {
      errors.push(`${s.id}: ${r.error}${r.suggest?.length ? ` (did you mean: ${r.suggest.map((x) => `"${x}"`).join(', ')}?)` : ''}`);
      s.cueTime = prevCue + 1;
    } else {
      s.cueTime = r.time;
      s.cueWord = r.first;
    }
    prevCue = s.cueTime;
  }
  const end = voiced ? voEnd + tail : clock;
  const durationInFrames = Math.max(1, Math.round(end * fps));

  // 2. Frames. The first scene always starts on frame 0 (the hook is on screen from frame one).
  scenes.forEach((s, i) => {
    s.start = i === 0 ? 0 : Math.max(0, Math.round((s.cueTime - lead) * fps));
  });
  scenes.forEach((s, i) => {
    s.end = i + 1 < scenes.length ? scenes[i + 1].start : durationInFrames;
    if (s.end <= s.start) errors.push(`${s.id}: starts at or after the next scene (two scenes on the same words?)`);
    const sec = (s.end - s.start) / fps;
    if (sec < DEFAULTS.minScene) warnings.push(`${s.id}: only ${sec.toFixed(2)} s on screen`);
    s.words = words.filter((w) => w.s >= s.start / fps - 0.02 && w.s < s.end / fps - 0.02);
    s.startSec = s.start / fps;
    s.endSec = s.end / fps;
  });

  // 3. Sub-cues inside props (list items, flow nodes, markers, callouts, counters...).
  for (const s of scenes) {
    const after = s.index === 0 ? -Infinity : s.cueTime - 0.6;
    const before = s.endSec + 0.6;
    const walk = (node, path) => {
      if (Array.isArray(node)) { node.forEach((v, k) => walk(v, `${path}[${k}]`)); return; }
      if (!node || typeof node !== 'object') return;
      for (const key of Object.keys(node)) {
        const v = node[key];
        if ((key === 'at' || key.endsWith('At')) && isCue(v) && path !== '') {
          if (typeof v === 'number') { node[key + 'Frame'] = Math.round(v * fps); continue; } // seconds into the scene
          if (!voiced) { node[key + 'Frame'] = 0; continue; }
          const r = resolveCue(v, words, {after, before});
          if (!r.ok) { errors.push(`${s.id}${path}.${key}: ${r.error}`); node[key + 'Frame'] = 0; }
          else node[key + 'Frame'] = Math.round((r.time - lead) * fps) - s.start;
        } else if (typeof v === 'object') walk(v, `${path}.${key}`);
      }
    };
    if (s.props) { s.props = structuredClone(s.props); walk(s.props, '.props'); }
    if (Array.isArray(s.sfx)) s.sfx = s.sfx.map((x) => (typeof x === 'string' ? {name: x} : {...x}));
  }

  // 4. Sound events: a transition sound on each cut (style decides which), plus each scene's own.
  const sfx = [];
  const transitionSound = {zoom: 'whoosh', whip: 'whoosh', slide: 'swoosh', wipe: 'swoosh', blur: 'whoosh-soft', flash: 'hit', cut: 'tick', fade: null};
  for (const s of scenes) {
    const kind = s.transition ?? style.motion?.transition ?? 'fade';
    const auto = s.index === 0 ? null : transitionSound[kind] ?? null;
    if (auto && s.sound !== false) sfx.push({name: auto, frame: s.start, gain: 0, scene: s.id, auto: true});
    if (s.sound !== false && storyboard.autoSfx !== false) sfx.push(...sceneSounds(s, fps));
    for (const e of s.sfx ?? []) {
      let frame = s.start;
      if (e.at !== undefined && voiced) {
        const r = resolveCue(e.at, words, {after: s.cueTime - 0.6, before: s.endSec + 0.6});
        if (r.ok) frame = Math.round(r.time * fps); else errors.push(`${s.id}.sfx ${e.name}: ${r.error}`);
      } else if (typeof e.offset === 'number') frame = s.start + Math.round(e.offset * fps);
      sfx.push({name: e.name, frame, gain: e.gain ?? 0, scene: s.id});
    }
  }

  return {fps, width, height, durationInFrames, voEnd, scenes, sfx, errors, warnings, voiced};
}

// Words a scene shows as on-screen text, matched in order to the spoken words, so each one can appear
// on the moment it is said. Returns, per display token, the frame (relative to scene start) or null.
export function syncTokens(displayTokens, sceneWords, sceneStartFrame, fps, lead = 0.06) {
  const out = [];
  let j = 0;
  for (const tok of displayTokens) {
    const t = norm(tok);
    let found = null;
    for (let k = j; k < Math.min(sceneWords.length, j + 8); k++) {
      if (t && (norm(sceneWords[k].w) === t || (t.length > 3 && norm(sceneWords[k].w).startsWith(t)))) { found = k; break; }
    }
    if (found === null) { out.push(null); continue; }
    out.push(Math.round((sceneWords[found].s - lead) * fps) - sceneStartFrame);
    j = found + 1;
  }
  return out;
}
