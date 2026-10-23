// A headless Chrome (the one Remotion already downloaded) driven by puppeteer-core: used to decode
// any image format, capture websites and read their real colors and fonts.
import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer-core';
import {ensureBrowser} from '@remotion/renderer';

let browser = null;
export async function launch() {
  if (browser) return browser;
  const st = await ensureBrowser({chromeMode: 'headless-shell'});
  const exe = st.path;
  if (!exe || !fs.existsSync(exe)) throw new Error('Render browser missing: run npm run setup');
  browser = await puppeteer.launch({executablePath: exe, headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars', '--mute-audio', '--disable-gpu-sandbox'], defaultViewport: null});
  process.on('exit', () => { try { browser?.process()?.kill('SIGKILL'); } catch { /* ignore */ } });
  return browser;
}
export async function close() { if (browser) { await browser.close().catch(() => {}); browser = null; } }

const MIME = {jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif', avif: 'image/avif', svg: 'image/svg+xml', bmp: 'image/bmp'};

// Decode an image file. Returns {w, h, pixels (RGBA, at most `maxPx` wide), thumb: JPEG Buffer}.
export async function decodeImage(file, {maxPx = 320, thumbPx = 1080} = {}) {
  const b = await launch();
  const page = await b.newPage();
  try {
    const ext = path.extname(file).slice(1).toLowerCase();
    const url = `data:${MIME[ext] ?? 'image/png'};base64,${fs.readFileSync(file).toString('base64')}`;
    const r = await page.evaluate(async (src, maxPx, thumbPx) => {
      const img = new Image();
      img.src = src;
      await img.decode();
      const draw = (W) => {
        const s = Math.min(1, W / img.naturalWidth);
        const c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(img.naturalWidth * s));
        c.height = Math.max(1, Math.round(img.naturalHeight * s));
        const g = c.getContext('2d', {willReadFrequently: true});
        g.drawImage(img, 0, 0, c.width, c.height);
        return {c, g};
      };
      const small = draw(maxPx);
      const data = small.g.getImageData(0, 0, small.c.width, small.c.height).data;
      const big = draw(thumbPx);
      let bin = '';
      const u8 = new Uint8Array(data.buffer);
      for (let i = 0; i < u8.length; i += 0x8000) bin += String.fromCharCode(...u8.subarray(i, i + 0x8000));
      return {w: img.naturalWidth, h: img.naturalHeight, sw: small.c.width, sh: small.c.height, px: btoa(bin), thumb: big.c.toDataURL('image/jpeg', 0.88)};
    }, url, maxPx, thumbPx);
    return {w: r.w, h: r.h, sw: r.sw, sh: r.sh, pixels: new Uint8ClampedArray(Buffer.from(r.px, 'base64')), thumb: Buffer.from(r.thumb.split(',')[1], 'base64')};
  } finally {
    await page.close().catch(() => {});
  }
}
