// Bundling and rendering through Remotion's Node API.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {bundle} from '@remotion/bundler';
import {renderMedia, renderStill, selectComposition, ensureBrowser} from '@remotion/renderer';
import {PUBLIC, ROOT, STAGE} from './paths.mjs';

export const glMode = () => process.env.RENDER_GL ?? (process.platform === 'linux' ? 'swangle' : 'angle');
export const workers = (n) => {
  if (n) return Math.max(1, Math.min(8, Number(n)));
  if (process.env.RENDER_WORKERS) return Math.max(1, Number(process.env.RENDER_WORKERS));
  return Math.max(1, Math.min(4, Math.floor(os.cpus().length / 3)));
};

let cached = null;
let bundleDir = null;
// Files staged after bundling (stills for a sheet, a new mix) are mirrored into the bundle's copy
// of public/, which is what the render server actually serves.
export function syncStage() {
  if (!bundleDir || !fs.existsSync(STAGE)) return;
  const dest = path.join(bundleDir, 'public', '_stage');
  fs.rmSync(dest, {recursive: true, force: true});
  fs.cpSync(STAGE, dest, {recursive: true, force: true});
}
export async function getBundle({quiet = false} = {}) {
  if (cached) { syncStage(); return cached; }
  if (!quiet) process.stdout.write('Bundling the renderer... ');
  const t = Date.now();
  const outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'tve-bundle-'));
  bundleDir = outDir;
  cached = await bundle({entryPoint: path.join(ROOT, 'src/index.ts'), publicDir: PUBLIC, outDir, enableCaching: true, onProgress: () => {}});
  if (!quiet) console.log(`done (${((Date.now() - t) / 1000).toFixed(1)} s)`);
  process.on('exit', () => { try { fs.rmSync(outDir, {recursive: true, force: true}); } catch { /* ignore */ } });
  return cached;
}

export async function browserReady() {
  return ensureBrowser({chromeMode: 'headless-shell'});
}

const common = (serveUrl, inputProps, logs) => ({
  serveUrl,
  inputProps,
  chromiumOptions: {gl: glMode(), enableMultiProcessOnLinux: true},
  timeoutInMilliseconds: 180000,
  logLevel: 'error',
  onBrowserLog: (l) => {
    const text = String(l.text ?? '');
    if (logs && (text.startsWith('AUDIT ') || l.type === 'error')) logs.push(text.startsWith('AUDIT ') ? JSON.parse(text.slice(6)) : {kind: 'browser-error', message: text.slice(0, 400)});
  },
});

export async function composition(id, inputProps) {
  const serveUrl = await getBundle();
  return {serveUrl, comp: await selectComposition({...common(serveUrl, inputProps), id})};
}

export async function stills({id = 'Reel', inputProps, frames, outDir, format = 'jpeg', scale = 0.5, logs = []}) {
  const {serveUrl, comp} = await composition(id, inputProps);
  fs.mkdirSync(outDir, {recursive: true});
  const files = [];
  for (const fr of frames) {
    const f = Math.max(0, Math.min(comp.durationInFrames - 1, Math.round(fr)));
    const output = path.join(outDir, `frame-${String(f).padStart(5, '0')}.${format === 'png' ? 'png' : 'jpg'}`);
    await renderStill({...common(serveUrl, inputProps, logs), composition: comp, frame: f, output, imageFormat: format, jpegQuality: 90, scale, overwrite: true});
    files.push(output);
  }
  return {files, comp, logs};
}

export async function video({inputProps, output, scale = 1, concurrency, frameRange = null, logs = [], onProgress}) {
  const {serveUrl, comp} = await composition('Reel', inputProps);
  let last = -1;
  await renderMedia({
    ...common(serveUrl, inputProps, logs),
    composition: comp,
    codec: 'h264',
    outputLocation: output,
    crf: 18,
    pixelFormat: 'yuv420p',
    colorSpace: 'bt709',
    imageFormat: 'jpeg',
    jpegQuality: 92,
    audioCodec: 'aac',
    audioBitrate: '192k',
    scale,
    concurrency: workers(concurrency),
    frameRange: frameRange ?? undefined,
    overwrite: false,
    onProgress: ({progress, renderedFrames, encodedFrames}) => {
      const pct = Math.floor(progress * 100);
      if (pct !== last && pct % 5 === 0) { last = pct; onProgress ? onProgress(pct, renderedFrames, encodedFrames) : process.stdout.write(`\r  rendering ${pct}%   `); }
    },
  });
  process.stdout.write('\n');
  return {comp, logs};
}
