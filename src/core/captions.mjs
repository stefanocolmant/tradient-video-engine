// Groups the voice's words into caption chunks that break on sense units: punctuation, pauses,
// a word budget and a character budget. Shared by the renderer and QA.
import {norm} from './text.mjs';

export function chunkWords(words, {maxWords = 4, maxChars = 22, pause = 0.32, linger = 0.35} = {}) {
  const chunks = [];
  let cur = [];
  const flush = () => { if (cur.length) chunks.push(cur); cur = []; };
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const text = [...cur, w].map((x) => x.w).join(' ');
    if (cur.length && (cur.length >= maxWords || text.length > maxChars)) flush();
    cur.push(w);
    const next = words[i + 1];
    const gap = next ? next.s - w.e : 99;
    const punct = /[.!?]["')\]]*$/.test(w.w) ? 2 : /[,;:]["')\]]*$/.test(w.w) ? 1 : 0;
    if (punct === 2 || gap > pause || (punct === 1 && cur.length >= 2)) flush();
  }
  flush();
  // Avoid a lone trailing word: pull it into the previous chunk when that chunk has room.
  for (let i = 1; i < chunks.length; i++) {
    const a = chunks[i - 1], b = chunks[i];
    if (b.length === 1 && a.length < maxWords && !/[.!?]["')\]]*$/.test(a[a.length - 1].w) && b[0].s - a[a.length - 1].e < pause) {
      a.push(...b); chunks.splice(i, 1); i--;
    }
  }
  return chunks.map((g, i) => {
    const next = chunks[i + 1];
    const last = g[g.length - 1];
    return {
      s: g[0].s,
      e: next ? Math.min(next[0].s, last.e + linger) : last.e + linger * 2,
      words: g.map((w) => ({...w, n: norm(w.w)})),
      text: g.map((w) => w.w).join(' '),
    };
  });
}

// How much of a scene's on-screen text repeats what is being said in that scene (0..1). The reel
// hides captions over a scene whose big text already says the narration.
export function overlap(screenText, sceneWords) {
  const shown = String(screenText).split(/\s+/).map(norm).filter((w) => w.length > 2);
  if (!shown.length || !sceneWords.length) return 0;
  const said = new Set(sceneWords.map((w) => norm(w.w)));
  return shown.filter((w) => said.has(w)).length / shown.length;
}
