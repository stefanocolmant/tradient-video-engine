#!/usr/bin/env node
// npm run styles                 every style you can use, and how it was made
// npm run styles -- fonts serif   search the open fonts a style can use
import fs from 'node:fs';
import path from 'node:path';
import {STYLES, args, exists, readJSON, rel} from './lib/paths.mjs';
import {fontCatalog} from './lib/fonts.mjs';

const a = args();
if (a._[0] === 'fonts') {
  const q = a._.slice(1).join(' ').toLowerCase();
  const hits = fontCatalog().filter((f) => !q || f.f.toLowerCase().includes(q) || f.c.toLowerCase().includes(q) || (f.k ?? '').toLowerCase().includes(q)).slice(0, 40);
  for (const f of hits) console.log(`${f.f.padEnd(28)} ${f.c.padEnd(12)} weights ${f.w.join(',')}`);
  console.log(`\n${hits.length} shown. Use one with: npm run style:new -- <style> --update --font-display "Family"`);
  process.exit(0);
}
const ids = fs.readdirSync(STYLES).filter((d) => !d.startsWith('_') && exists(path.join(STYLES, d, 'style.json')));
const kind = (s, id) => (id === 'house' ? '1 · house style' : s.learned ? '3 · trained from examples' : ['clean', 'bold'].includes(id) ? 'starting point' : '2 · your own (defined)');
console.log('Styles:\n');
for (const id of ids) {
  const s = readJSON(path.join(STYLES, id, 'style.json'));
  console.log(`  ${id.padEnd(12)} ${kind(s, id).padEnd(26)} ${s.description ?? ''}`);
  if (exists(path.join(STYLES, id, 'card.jpg'))) console.log(`  ${''.padEnd(12)} card: ${rel(path.join(STYLES, id, 'card.jpg'))}`);
}
console.log('\nUse one: "style": "<id>" in a storyboard, or npm run new -- my-video --style <id>');
