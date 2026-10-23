#!/usr/bin/env node
// npm run docs   regenerates docs/SCENES.md from src/core/catalog.mjs (the single source of truth).
import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from './lib/paths.mjs';
import {CATALOG, SCENE_FIELDS, SFX_NAMES} from '../src/core/catalog.mjs';

let md = `# Scenes\n\nEvery scene type the engine draws, with its props. Generated from \`src/core/catalog.mjs\` (run \`npm run docs\` after changing it).\n\n`;
md += `Props marked * are required. A **cue** is a phrase from the narration (\`"at": "ninety percent"\`) or a number of seconds into the scene (\`"at": 1.2\`). Every prop whose name is \`at\` or ends in \`At\` is a cue. Text props accept \`*asterisks*\` around the words to highlight.\n\n`;
md += `## Scene fields\n\n| field | meaning |\n|---|---|\n${Object.entries(SCENE_FIELDS).map(([k, v]) => `| \`${k}\` | ${v.replace(/\|/g, '\\|')} |`).join('\n')}\n\n`;
md += `## Types\n\n| type | use it for |\n|---|---|\n${Object.entries(CATALOG).map(([k, v]) => `| [\`${k}\`](#${k}) | ${v.use} |`).join('\n')}\n\n`;
for (const [k, v] of Object.entries(CATALOG)) {
  md += `### ${k}\n\n${v.use}\n\n| prop | type and notes |\n|---|---|\n${Object.entries(v.props).map(([p, d]) => `| \`${p}\` | ${String(d).replace(/\|/g, '\\|')} |`).join('\n')}\n\n`;
  if (Object.keys(v.limits ?? {}).length) md += `Word limits (the checker warns above these): ${Object.entries(v.limits).map(([p, n]) => `\`${p}\` ≤ ${n}`).join(', ')}.\n\n`;
  md += '```json\n' + JSON.stringify(v.example, null, 2) + '\n```\n\n';
}
md += `## Sound effects\n\nScenes make their own sounds (a blip per list item, a tick per timeline date, a counter while a number counts, a click on the end-card button, a whoosh on each cut). Add more with \`"sfx": ["riser", {"name": "hit", "at": "boom"}]\`, or silence a scene with \`"sound": false\`.\n\nAvailable: ${SFX_NAMES.map((n) => `\`${n}\``).join(', ')}.\n`;
fs.writeFileSync(path.join(ROOT, 'docs', 'SCENES.md'), md);
console.log('Wrote docs/SCENES.md');
