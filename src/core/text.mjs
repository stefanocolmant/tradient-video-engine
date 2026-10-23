// Text helpers shared by the renderer and the command-line tools.

// Lowercase, keep letters, digits and apostrophes. "Buy," -> "buy", "$4,000" -> "4000".
export const norm = (s) => String(s).toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9']/g, '');

// Split prose into word tokens, keeping the punctuation that follows each word.
export const tokens = (text) =>
  String(text)
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((raw) => ({raw, n: norm(raw), end: /[.!?]["')\]]*$/.test(raw) ? 'sentence' : /[,;:]["')\]]*$/.test(raw) ? 'comma' : null}))
    .filter((t) => t.n.length > 0);

// Rough English syllable count; good enough to share a stretch of audio between words.
export const syllables = (word) => {
  const w = norm(word).replace(/'/g, '');
  if (!w) return 0;
  if (/^\d+$/.test(w)) return Math.max(1, w.length * 1.4); // digits are read out as several words
  const groups = w.replace(/e$/, '').match(/[aeiouy]+/g);
  return Math.max(1, groups ? groups.length : 1);
};

// Sentences of a script, without markdown headings, comments or stage directions.
export const scriptText = (md) =>
  String(md)
    .replace(/^---[\s\S]*?---\s*/m, '') // front matter
    .replace(/<!--[\s\S]*?-->/g, '')
    .split('\n')
    .filter((l) => !/^\s*#/.test(l) && !/^\s*>/.test(l) && !/^\s*\[.*\]\s*$/.test(l))
    .join('\n')
    .replace(/\*\*?|__?|`/g, '')
    .replace(/\n{2,}/g, '\n\n')
    .trim();

export const sentences = (text) =>
  String(text)
    .replace(/\s+/g, ' ')
    .split(/(?<=[.!?]["')\]]*)\s+(?=[A-Z0-9"'“(])/)
    .map((s) => s.trim())
    .filter(Boolean);

// Front matter "key: value" pairs at the top of a markdown file.
export const frontMatter = (md) => {
  const m = String(md).match(/^---\s*\n([\s\S]*?)\n---/);
  const out = {};
  if (!m) return out;
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^\s*([A-Za-z_][\w-]*)\s*:\s*(.*?)\s*$/);
    if (kv) out[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
  }
  return out;
};
