#!/usr/bin/env node
// npm run setup [-- --whisper] [-- --no-voice]
// One-time setup: render browser, free voice model, optional speech recogniser, .env file, then a
// health check. Safe to run again.
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {ROOT, args, exists} from './lib/paths.mjs';

const a = args();
const step = (s) => console.log(`\n> ${s}`);

if (!exists(path.join(ROOT, 'node_modules', 'remotion'))) {
  step('Installing packages (npm install)');
  const r = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['install', '--no-audit', '--no-fund'], {cwd: ROOT, stdio: 'inherit'});
  if (r.status !== 0) { console.log('npm install failed; fix the error above and run npm run setup again.'); process.exit(1); }
}

step('Render browser (Chrome Headless Shell, ~100 MB, once)');
const {ensureBrowser} = await import('@remotion/renderer');
await ensureBrowser({chromeMode: 'headless-shell'});
console.log('  ready');

if (!a['no-voice']) {
  step('Free local voice (Kokoro, ~90 MB, once)');
  try {
    const k = await import('./voice/kokoro.mjs');
    await k.speak(['Ready.'], {voice: k.DEFAULT_VOICE});
    console.log('  ready');
  } catch (e) {
    console.log(`  skipped: ${e.message}\n  (Videos still work with ElevenLabs/OpenAI keys, macOS "say", or your own recording.)`);
  }
}

if (a.whisper) {
  step('Speech recogniser for voice checks (whisper.cpp base.en model, ~150 MB)');
  const bin = ['whisper-cli', 'whisper-cpp'].find((b) => spawnSync(b, ['--help'], {stdio: 'ignore'}).status === 0);
  if (!bin) console.log('  whisper.cpp is not installed. macOS: brew install whisper-cpp · Windows/Linux: https://github.com/ggml-org/whisper.cpp\n  Then run: npm run setup -- --whisper');
  else {
    const file = path.join(ROOT, '.cache', 'whisper', 'ggml-base.en.bin');
    if (exists(file)) console.log('  model already downloaded');
    else {
      fs.mkdirSync(path.dirname(file), {recursive: true});
      const res = await fetch('https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.en.bin');
      if (!res.ok) console.log(`  download failed: HTTP ${res.status}`);
      else { fs.writeFileSync(file, Buffer.from(await res.arrayBuffer())); console.log(`  saved ${path.relative(ROOT, file)}`); }
    }
  }
}

const env = path.join(ROOT, '.env');
if (!exists(env)) {
  fs.copyFileSync(path.join(ROOT, '.env.example'), env);
  step('Made .env (add API keys there only if you want ElevenLabs/OpenAI voices)');
}

step('Health check');
const {doctor} = await import('./doctor.mjs');
await doctor();
console.log('\nNext: open this folder in Claude Code (or Codex) and ask "How do I run it?", or see START-HERE.html (npm run gallery).');
