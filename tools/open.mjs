#!/usr/bin/env node
// Opens a file with the computer's default app (npm run gallery opens START-HERE.html).
import path from 'node:path';
import {spawn} from 'node:child_process';
import {ROOT} from './lib/paths.mjs';

const file = path.resolve(ROOT, process.argv[2] ?? 'START-HERE.html');
const cmd = process.platform === 'darwin' ? ['open', [file]] : process.platform === 'win32' ? ['cmd', ['/c', 'start', '', file]] : ['xdg-open', [file]];
spawn(cmd[0], cmd[1], {detached: true, stdio: 'ignore'}).unref();
console.log(`Opened ${file}`);
