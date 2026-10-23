#!/usr/bin/env node
// npm run grab -- <url> <video> [--name headline] [--selector "article h1"] [--phone] [--full]
// Saves a screenshot of a real web page (an article, a post, a filing) into videos/<video>/assets/,
// ready for an image scene: {"type": "image", "props": {"src": "assets/headline.png", "frame": "browser"}}.
// Credit the source on screen ("credit" prop) and in facts.md.
import fs from 'node:fs';
import path from 'node:path';
import {args, rel, videoDir} from './lib/paths.mjs';
import {launch, close} from './lib/browser.mjs';

const a = args();
const [url, video] = a._;
if (!url || !video) { console.log('Usage: npm run grab -- https://example.com/article my-video [--name headline] [--selector "h1"] [--phone] [--full]'); process.exit(1); }
const dir = path.join(videoDir(video), 'assets');
fs.mkdirSync(dir, {recursive: true});
const name = String(a.name ?? new URL(url).hostname.replace(/^www\./, '').replace(/[^a-z0-9]+/gi, '-'));
const out = path.join(dir, `${name}.png`);
const b = await launch();
const page = await b.newPage();
try {
  await page.setViewport(a.phone ? {width: 430, height: 932, deviceScaleFactor: 3, isMobile: true, hasTouch: true} : {width: 1280, height: 1600, deviceScaleFactor: 2});
  try { await page.goto(url, {waitUntil: 'networkidle2', timeout: 45000}); } catch { await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 45000}); }
  await new Promise((r) => setTimeout(r, 1500));
  await page.evaluate(() => { for (const el of document.querySelectorAll('button, [role=button]')) { const t = (el.textContent || '').trim(); if (t.length < 20 && /^(accept|accept all|agree|i agree|got it|ok|allow all|close)$/i.test(t)) { try { el.click(); } catch { /* ignore */ } } } });
  await new Promise((r) => setTimeout(r, 600));
  if (a.selector) {
    const el = await page.$(String(a.selector));
    if (!el) throw new Error(`Nothing matches ${a.selector} on the page`);
    await el.screenshot({path: out});
  } else await page.screenshot({path: out, fullPage: !!a.full});
  console.log(`Saved ${rel(out)}\nUse it: {"type": "image", "props": {"src": "assets/${name}.png", "frame": "browser", "credit": "${new URL(url).hostname.replace(/^www\./, '')}"}}`);
} catch (e) {
  console.error(e.message);
  process.exitCode = 1;
} finally {
  await page.close().catch(() => {});
  await close();
}
