// Runs Kokoro in its own process: onnxruntime can abort while Node exits, and that must not take the
// calling tool down with it. Input: a job JSON path. Output: <job>.out.json + one .f32 file per chunk.
import fs from 'node:fs';
import {speakInProcess} from './kokoro.mjs';

const job = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const r = await speakInProcess(job.paragraphs, {voice: job.voice, speed: job.speed});
const meta = r.chunks.map((c, i) => {
  const file = `${process.argv[2]}.${i}.f32`;
  fs.writeFileSync(file, Buffer.from(c.samples.buffer, c.samples.byteOffset, c.samples.byteLength));
  return {text: c.text, sr: c.sr, pauseAfter: c.pauseAfter, file, n: c.samples.length};
});
fs.writeFileSync(`${process.argv[2]}.out.json`, JSON.stringify({label: r.label, chunks: meta}));
process.stdout.write('\n');
