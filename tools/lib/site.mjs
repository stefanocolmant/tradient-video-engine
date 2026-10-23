// Website capture for style learning: screenshots (desktop + phone) and the page's real design values
// (colors by area, fonts by how much text uses them, corner radius, shadows, glass, gradients).
import fs from 'node:fs';
import path from 'node:path';
import {launch} from './browser.mjs';

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36';

async function settle(page, ms = 1200) { await new Promise((r) => setTimeout(r, ms)); }

async function dismissBanners(page) {
  await page.evaluate(() => {
    const words = /^(accept|accept all|agree|i agree|got it|ok|okay|allow all|allow|continue|close|dismiss)$/i;
    for (const el of document.querySelectorAll('button, [role=button], a')) {
      const t = (el.textContent || '').trim();
      if (t.length < 20 && words.test(t)) { try { el.click(); } catch { /* ignore */ } }
    }
  }).catch(() => {});
}

async function scrollThrough(page, max = 7000) {
  await page.evaluate(async (max) => {
    const step = Math.max(400, window.innerHeight * 0.8);
    for (let y = 0; y < Math.min(max, document.body.scrollHeight); y += step) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 180)); }
    window.scrollTo(0, 0);
  }, max).catch(() => {});
}

function extract() {
  const out = {bg: {}, text: {}, border: {}, fonts: {}, headings: {}, body: {}, buttons: [], radii: [], shadows: 0, hardShadows: 0, glass: 0, gradients: [], vars: {}, upperHeadings: 0, headingCount: 0, logo: null, themeColor: null, title: document.title};
  const add = (m, k, w) => { if (!k || w <= 0) return; m[k] = (m[k] ?? 0) + w; };
  const solid = (c) => c && !/rgba\(\s*0,\s*0,\s*0,\s*0\s*\)|transparent/.test(c) && !/rgba\([^)]*,\s*0(\.0+)?\s*\)$/.test(c);
  const all = Array.from(document.querySelectorAll('body, body *')).slice(0, 6000);
  const vw = window.innerWidth;
  for (const el of all) {
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || Number(cs.opacity) < 0.1) continue;
    const area = Math.min(r.width, vw) * Math.min(r.height, 4000);
    if (solid(cs.backgroundColor)) {
      const parentBg = el.parentElement ? getComputedStyle(el.parentElement).backgroundColor : '';
      if (cs.backgroundColor !== parentBg || el === document.body) add(out.bg, cs.backgroundColor, area);
    }
    if (cs.backgroundImage && cs.backgroundImage.includes('gradient') && out.gradients.length < 8) out.gradients.push(cs.backgroundImage.slice(0, 300));
    const bw = parseFloat(cs.borderTopWidth) || 0;
    if (bw > 0 && solid(cs.borderTopColor)) add(out.border, cs.borderTopColor, (r.width + r.height) * 2 * bw);
    const radius = parseFloat(cs.borderTopLeftRadius) || 0;
    if (radius > 0 && r.width > 40 && r.height > 20 && (solid(cs.backgroundColor) || bw > 0)) out.radii.push(Math.min(radius, Math.min(r.width, r.height) / 2));
    if (cs.boxShadow && cs.boxShadow !== 'none') {
      out.shadows++;
      const m = cs.boxShadow.match(/(-?[\d.]+)px (-?[\d.]+)px ([\d.]+)px/);
      if (m && Number(m[3]) === 0 && Math.abs(Number(m[1])) + Math.abs(Number(m[2])) > 2) out.hardShadows++;
    }
    if ((cs.backdropFilter && cs.backdropFilter !== 'none') || (cs.webkitBackdropFilter && cs.webkitBackdropFilter !== 'none')) out.glass++;
    const own = Array.from(el.childNodes).filter((n) => n.nodeType === 3).map((n) => n.textContent.trim()).join(' ').trim();
    if (own.length > 1) {
      const size = parseFloat(cs.fontSize) || 16;
      const w = own.length * size * size;
      add(out.text, cs.color, w);
      const fam = cs.fontFamily;
      add(out.fonts, fam, w);
      const tag = el.tagName.toLowerCase();
      const isHeading = /^h[1-3]$/.test(tag) || size >= 30;
      const key = `${fam}|${cs.fontWeight}|${cs.textTransform}|${cs.letterSpacing}`;
      if (isHeading) { add(out.headings, key, own.length * size); out.headingCount++; if (cs.textTransform === 'uppercase' || own === own.toUpperCase() && /[A-Z]/.test(own)) out.upperHeadings++; }
      else if (size >= 13 && size <= 24) add(out.body, key, own.length);
    }
    const tag = el.tagName.toLowerCase();
    if ((tag === 'button' || el.getAttribute('role') === 'button' || /btn|button|cta/i.test(el.className?.toString?.() ?? '')) && out.buttons.length < 40 && r.width > 40) {
      out.buttons.push({bg: cs.backgroundColor, color: cs.color, radius: parseFloat(cs.borderTopLeftRadius) || 0, border: cs.borderTopColor, bw});
    }
    if (!out.logo && tag === 'img' && /logo/i.test(`${el.alt} ${el.src} ${el.className}`) && r.top < 200) out.logo = el.currentSrc || el.src;
  }
  for (const sheet of Array.from(document.styleSheets)) {
    let rules = [];
    try { rules = Array.from(sheet.cssRules || []); } catch { continue; }
    for (const rule of rules) {
      if (!rule.selectorText || !/^(:root|html|body)\b/.test(rule.selectorText)) continue;
      for (const prop of Array.from(rule.style)) if (prop.startsWith('--')) {
        const v = rule.style.getPropertyValue(prop).trim();
        if (/^#|rgb|hsl|oklch|color/.test(v) || /font/i.test(prop)) { if (Object.keys(out.vars).length < 120) out.vars[prop] = v.slice(0, 120); }
      }
    }
  }
  out.themeColor = document.querySelector('meta[name="theme-color"]')?.getAttribute('content') ?? null;
  out.bodyBg = getComputedStyle(document.body).backgroundColor;
  out.htmlBg = getComputedStyle(document.documentElement).backgroundColor;
  out.bodyFont = getComputedStyle(document.body).fontFamily;
  return out;
}

export async function captureSite(url, outDir, {name = 'site'} = {}) {
  const b = await launch();
  const page = await b.newPage();
  fs.mkdirSync(outDir, {recursive: true});
  const shots = [];
  try {
    await page.setUserAgent(UA);
    await page.setViewport({width: 1440, height: 900, deviceScaleFactor: 1});
    try { await page.goto(url, {waitUntil: 'networkidle2', timeout: 45000}); }
    catch { await page.goto(url, {waitUntil: 'domcontentloaded', timeout: 45000}); }
    await settle(page);
    await dismissBanners(page);
    await scrollThrough(page);
    await settle(page, 800);
    const desk = path.join(outDir, `${name}-desktop.jpg`);
    await page.screenshot({path: desk, type: 'jpeg', quality: 86});
    shots.push(desk);
    const h = await page.evaluate(() => Math.min(document.body.scrollHeight, 5400));
    if (h > 1100) {
      const full = path.join(outDir, `${name}-page.jpg`);
      await page.screenshot({path: full, type: 'jpeg', quality: 80, clip: {x: 0, y: 0, width: 1440, height: h}, captureBeyondViewport: true});
      shots.push(full);
    }
    const data = await page.evaluate(extract);
    await page.setViewport({width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true});
    await page.reload({waitUntil: 'networkidle2', timeout: 45000}).catch(() => {});
    await settle(page, 900);
    await dismissBanners(page);
    const mob = path.join(outDir, `${name}-phone.jpg`);
    await page.screenshot({path: mob, type: 'jpeg', quality: 86});
    shots.push(mob);
    data.url = url;
    return {data, shots};
  } finally {
    await page.close().catch(() => {});
  }
}

// Strongest entries of a weight map.
export const top = (m, n = 6) => Object.entries(m).sort((a, b) => b[1] - a[1]).slice(0, n);
