#!/usr/bin/env node
// npm run icons -- <word> [more words]    find Lucide icon names for a thing (1,800+ icons)
// npm run icons -- --check name1 name2     confirm names exist
import {createRequire} from 'node:module';
import {args} from './lib/paths.mjs';

const require = createRequire(import.meta.url);
const nodes = require('lucide-static/icon-nodes.json');
const tags = require('lucide-static/tags.json');
const names = Object.keys(nodes);

export const iconExists = (n) => !!nodes[n];

export function searchIcons(query, limit = 12) {
  const q = String(query).toLowerCase().trim();
  const words = q.split(/\s+/).filter(Boolean);
  const scored = [];
  for (const n of names) {
    const t = (tags[n] ?? []).map((x) => x.toLowerCase());
    let s = 0;
    for (const w of words) {
      if (n === w) s += 10;
      else if (n.split('-').includes(w)) s += 6;
      else if (n.includes(w)) s += 3;
      if (t.includes(w)) s += 5;
      else if (t.some((x) => x.includes(w))) s += 2;
    }
    if (s) scored.push([s - n.length * 0.01, n]);
  }
  return scored.sort((a, b) => b[0] - a[0]).slice(0, limit).map((x) => x[1]);
}

// Closest real names for a mistyped one.
export function nearestIcons(name, limit = 4) {
  const base = String(name).replace(/-\d+$/, '');
  const hits = searchIcons(base.replace(/-/g, ' '), limit);
  return hits.length ? hits : names.filter((n) => n.startsWith(base.split('-')[0])).slice(0, limit);
}

const a = args();
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('icons.mjs')) {
  if (a.check) {
    const list = [a.check, ...a._].flat().filter((x) => typeof x === 'string');
    let bad = 0;
    for (const n of list) {
      if (iconExists(n)) console.log(`ok   ${n}`);
      else { bad++; console.log(`MISSING ${n}  ->  try: ${nearestIcons(n).join(', ')}`); }
    }
    process.exit(bad ? 1 : 0);
  }
  if (!a._.length) { console.log('Usage: npm run icons -- <word>   e.g. npm run icons -- bank'); process.exit(1); }
  for (const q of a._) console.log(`${q}: ${searchIcons(q).join(', ') || '(nothing; try a simpler word)'}`);
  console.log('\nBrowse all: https://lucide.dev/icons');
}
