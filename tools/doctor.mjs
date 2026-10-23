#!/usr/bin/env node
// npm run doctor   what is installed, what is missing, and how to fix each line.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {ROOT, STYLES, exists} from './lib/paths.mjs';
import {hasKey} from './lib/env.mjs';

export async function doctor({quiet = false} = {}) {
  const rows = [];
  const add = (ok, what, detail, fix = '') => rows.push({ok, what, detail, fix});
  const major = Number(process.versions.node.split('.')[0]);
  add(major >= 20, 'Node.js', `v${process.versions.node}`, 'Install Node 20 or newer from https://nodejs.org');
  const deps = exists(path.join(ROOT, 'node_modules', 'remotion')) && exists(path.join(ROOT, 'node_modules', '@remotion', 'renderer'));
  add(deps, 'Packages', deps ? 'installed' : 'missing', 'Run: npm install');
  const shell = path.join(ROOT, 'node_modules', '.remotion', 'chrome-headless-shell');
  const browser = exists(path.join(shell, 'VERSION')) && fs.readdirSync(shell).some((d) => fs.statSync(path.join(shell, d)).isDirectory());
  const bdetail = browser ? `ready (${fs.readFileSync(path.join(shell, 'VERSION'), 'utf8').trim()})` : 'not downloaded';
  add(browser, 'Render browser', bdetail, 'Run: npm run setup (downloads Chrome Headless Shell, ~100 MB, once)');
  let ff = null;
  try { const {ffBins} = await import('./lib/ff.mjs'); ff = ffBins(); } catch { /* none */ }
  add(!!ff, 'FFmpeg', ff ? `${ff.source} (${ff.version.slice(0, 40)})` : 'missing', 'Run: npm install (ships one), or install FFmpeg');
  // Voices
  let kokoro = false;
  try { createRequire(import.meta.url).resolve('kokoro-js'); kokoro = true; } catch { /* no */ }
  const kModel = exists(path.join(ROOT, '.cache', 'models', 'onnx-community', 'Kokoro-82M-v1.0-ONNX', 'onnx'));
  add(kokoro, 'Voice: free local (Kokoro)', kokoro ? (kModel ? 'ready' : 'installed; model downloads on first use (~90 MB)') : 'not installed', 'Run: npm install kokoro-js');
  add(hasKey('ELEVENLABS_API_KEY'), 'Voice: ElevenLabs', hasKey('ELEVENLABS_API_KEY') ? 'key found in .env' : 'no key (optional, best quality)', 'Put ELEVENLABS_API_KEY=... in .env');
  add(hasKey('OPENAI_API_KEY'), 'Voice: OpenAI', hasKey('OPENAI_API_KEY') ? 'key found in .env' : 'no key (optional)', 'Put OPENAI_API_KEY=... in .env');
  if (process.platform === 'darwin') add(spawnSync('say', ['-v', '?'], {stdio: 'ignore'}).status === 0, 'Voice: macOS say', 'built in (draft quality)');
  const whisperBin = ['whisper-cli', 'whisper-cpp'].find((b) => spawnSync(b, ['--help'], {stdio: 'ignore'}).status === 0);
  const whisperModel = exists(path.join(ROOT, '.cache', 'whisper', 'ggml-base.en.bin'));
  const recog = (whisperBin && whisperModel) || hasKey('OPENAI_API_KEY');
  add(recog, 'Voice check (speech recogniser)', whisperBin && whisperModel ? 'whisper.cpp ready' : hasKey('OPENAI_API_KEY') ? 'OpenAI Whisper (key)' : 'none (recommended: exact word timing, and checks the voice said every word)', whisperBin ? 'Run: npm run setup -- --whisper' : 'Install whisper.cpp (macOS: brew install whisper-cpp), then npm run setup -- --whisper');
  // Styles and disk
  const styles = exists(STYLES) ? fs.readdirSync(STYLES).filter((d) => exists(path.join(STYLES, d, 'style.json'))) : [];
  add(styles.length > 0, 'Styles', styles.join(', ') || 'none');
  let free = null;
  try { free = fs.statfsSync(ROOT); } catch { /* old node */ }
  const gb = free ? (free.bavail * free.bsize) / 1e9 : null;
  add(gb === null || gb > 5, 'Free disk', gb === null ? 'unknown' : `${gb.toFixed(1)} GB`, 'Free up space: a render needs ~1-3 GB while it runs');
  add(true, 'CPU / memory', `${os.cpus().length} cores · ${(os.totalmem() / 1e9).toFixed(0)} GB RAM`);
  if (!quiet) {
    console.log('Tradient Video Engine · doctor\n');
    for (const r of rows) console.log(`  ${r.ok ? 'OK ' : '-- '} ${r.what.padEnd(32)} ${r.detail}${!r.ok && r.fix ? `\n       fix: ${r.fix}` : ''}`);
    const ready = rows.filter((r) => ['Node.js', 'Packages', 'Render browser', 'FFmpeg'].includes(r.what)).every((r) => r.ok);
    const voice = kokoro || hasKey('ELEVENLABS_API_KEY') || hasKey('OPENAI_API_KEY') || process.platform === 'darwin';
    console.log(`\n${ready && voice ? 'READY: you can make videos.' : ready ? 'ALMOST: rendering works; add a voice option above (or record your own with --file).' : 'NOT READY: fix the lines marked -- (usually: npm run setup).'}`);
    console.log('Note: Remotion (the renderer) is free for individuals and companies of up to 3 people; bigger companies need a Remotion company license (remotion.dev/license).');
  }
  return rows;
}

const isMain = path.resolve(process.argv[1] ?? '') === fileURLToPath(import.meta.url);
if (isMain) await doctor();
