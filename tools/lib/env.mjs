// Keys live in a .env file at the engine's root (never committed) or in the shell environment.
import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from './paths.mjs';

let loaded = false;
export function loadEnv() {
  if (loaded) return process.env;
  loaded = true;
  const file = path.join(ROOT, '.env');
  if (!fs.existsSync(file)) return process.env;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
  return process.env;
}
export const hasKey = (name) => !!loadEnv()[name];
