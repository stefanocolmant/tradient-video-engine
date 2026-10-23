// Numbers in prose, written as digits ("$460 million", "90%") or words ("four hundred sixty million",
// "ninety percent"), turned into values so a script can be checked against its sources.
const SMALL = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90};
const SCALE = {hundred: 100, thousand: 1e3, million: 1e6, billion: 1e9, trillion: 1e12};
const UNIT = /^(percent|per\s*cent|%|dollars?|bucks|cents?|years?|months?|weeks?|days?|hours?|minutes?|seconds?|milliseconds?|microseconds?|times|x|people|users|trades?|orders?|miles?|kilometers?|km|meters?|feet|degrees?)$/i;

// Returns [{value, text, unit, index}] for every number found.
export function findNumbers(text) {
  const out = [];
  const toks = String(text).replace(/[“”]/g, '"').split(/(\s+)/);
  const words = [];
  let pos = 0;
  for (const t of toks) { if (/\S/.test(t)) words.push({t, pos}); pos += t.length; }
  for (let i = 0; i < words.length; i++) {
    const raw = words[i].t;
    const clean = raw.toLowerCase().replace(/[^a-z0-9.,%$-]/g, '').replace(/[.,-]+$/, '');
    // Digits: $4,000.5 / 90% / 2024 / 10x
    const dm = clean.match(/^\$?(\d[\d,]*(?:\.\d+)?)(%|x|k|m|bn|b)?$/);
    if (dm) {
      let v = Number(dm[1].replace(/,/g, ''));
      let j = i;
      const suf = dm[2];
      if (suf === 'k') v *= 1e3; else if (suf === 'm') v *= 1e6; else if (suf === 'b' || suf === 'bn') v *= 1e9;
      const next = words[i + 1]?.t.toLowerCase().replace(/[^a-z%]/g, '');
      if (next && SCALE[next] && SCALE[next] >= 1e3) { v *= SCALE[next]; j++; }
      const stop = /[.,;:!?]$/.test(words[j].t);
      const unitWord = suf === '%' ? '%' : stop ? '' : words[j + 1]?.t.toLowerCase().replace(/[^a-z%]/g, '') ?? '';
      out.push({value: v, text: words.slice(i, j + 1).map((w) => w.t).join(' '), unit: UNIT.test(unitWord) ? unitWord : clean.startsWith('$') ? 'dollars' : '', index: words[i].pos, digits: true});
      i = j;
      continue;
    }
    // Words: "four hundred sixty million", "ninety-nine", "one point five billion"
    const w0 = clean.replace(/-/g, ' ').split(' ')[0];
    if (SMALL[w0] !== undefined || (SCALE[w0] && w0 !== 'hundred' && i > 0 && false)) {
      let total = 0, cur = 0, j = i, any = false, decimal = null;
      for (; j < words.length; j++) {
        const parts = words[j].t.toLowerCase().replace(/[^a-z\- ]/g, '').split('-').filter(Boolean);
        let ok = parts.length > 0;
        for (const p of parts) {
          if (SMALL[p] !== undefined) { if (decimal !== null) decimal += String(SMALL[p]); else cur += SMALL[p]; any = true; }
          else if (p === 'hundred') { cur = (cur || 1) * 100; any = true; }
          else if (SCALE[p]) { const base = decimal !== null ? Number(`${cur}.${decimal}`) : cur || 1; total += base * SCALE[p]; cur = 0; decimal = null; any = true; }
          else if (p === 'point' && any) { decimal = ''; }
          else if (p === 'and' && any && j > i) { /* "two hundred and five" */ }
          else { ok = false; break; }
        }
        if (!ok) break;
        if (/[.,!?;:]$/.test(words[j].t)) { j++; break; }
      }
      if (!any) continue;
      const value = total + (decimal !== null && decimal !== '' ? Number(`${cur}.${decimal}`) : cur);
      const end = Math.max(i, j - 1);
      const unitWord = /[.,;:!?]$/.test(words[end].t) ? '' : words[end + 1]?.t.toLowerCase().replace(/[^a-z%]/g, '') ?? '';
      out.push({value, text: words.slice(i, end + 1).map((w) => w.t).join(' '), unit: UNIT.test(unitWord) ? unitWord : '', index: words[i].pos, digits: false});
      i = end;
    }
  }
  return out;
}

// Numbers that are claims (worth a source): years, anything with a unit, anything over ten.
export const isClaim = (n) => n.value > 10 || !!n.unit || (n.value % 1 !== 0);
