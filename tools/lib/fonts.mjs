// Font lookup and download. Fonts come from Google Fonts (open licenses, safe to ship in a style
// folder). Proprietary website fonts are never copied: they are mapped to the closest open family.
import fs from 'node:fs';
import path from 'node:path';
import {ROOT} from './paths.mjs';

let catalog = null;
export const fontCatalog = () => (catalog ??= JSON.parse(fs.readFileSync(path.join(ROOT, 'tools/data/google-fonts.json'), 'utf8')).fonts);
const key = (s) => String(s).toLowerCase().replace(/["']/g, '').replace(/[^a-z0-9]/g, '');

export const findFamily = (name) => fontCatalog().find((f) => key(f.f) === key(name)) ?? null;

// Popular commercial / system families and the open family that reads closest.
const LOOKALIKE = {
  helvetica: 'Inter', helveticaneue: 'Inter', arial: 'Inter', sfpro: 'Inter', sfprodisplay: 'Inter', sfprotext: 'Inter', applesystem: 'Inter', blinkmacsystemfont: 'Inter', systemui: 'Inter', segoeui: 'Inter',
  graphik: 'Inter', soehne: 'Inter', sohne: 'Inter', gtamerica: 'Inter', untitledsans: 'Inter', neuehaasgrotesk: 'Inter', neuehaasunica: 'Inter', aktivgrotesk: 'Inter', suisseintl: 'Inter', abcdiatype: 'Inter',
  circular: 'DM Sans', circularstd: 'DM Sans', circularxx: 'DM Sans', avenir: 'Nunito Sans', avenirnext: 'Nunito Sans', proximanova: 'Montserrat', gotham: 'Montserrat', brandon: 'Josefin Sans', brandongrotesque: 'Josefin Sans',
  futura: 'Jost', futurapt: 'Jost', gilroy: 'Plus Jakarta Sans', sofiapro: 'Figtree', aeonik: 'Manrope', generalsans: 'Manrope', satoshi: 'Manrope', clashdisplay: 'Space Grotesk', cabinetgrotesk: 'Space Grotesk',
  gtwalsheim: 'Outfit', euclidcircular: 'Outfit', tthoves: 'Outfit', moderat: 'Work Sans', apercu: 'Work Sans', calibre: 'Work Sans', founders: 'Work Sans', foundersgrotesk: 'Archivo',
  dincondensed: 'Barlow Condensed', din: 'Barlow', dinpro: 'Barlow', dinnext: 'Barlow', bebas: 'Bebas Neue', impact: 'Anton', knockout: 'Oswald', trade: 'Oswald', tradegothic: 'Oswald', compacta: 'Anton',
  tiempos: 'Source Serif 4', tiemposheadline: 'Playfair Display', tiempostext: 'Source Serif 4', georgia: 'Gelasio', times: 'Tinos', timesnewroman: 'Tinos', garamond: 'EB Garamond', adobegaramond: 'EB Garamond',
  caslon: 'Libre Caslon Text', baskerville: 'Libre Baskerville', didot: 'Bodoni Moda', bodoni: 'Bodoni Moda', canela: 'Fraunces', recoleta: 'Fraunces', gtsuper: 'Fraunces', ogg: 'Playfair Display', freight: 'Source Serif 4', publico: 'Source Serif 4', lyon: 'Source Serif 4',
  sfmono: 'JetBrains Mono', menlo: 'JetBrains Mono', monaco: 'JetBrains Mono', consolas: 'JetBrains Mono', couriernew: 'Courier Prime', courier: 'Courier Prime', operatormono: 'IBM Plex Mono', berkeleymono: 'JetBrains Mono', gtamericamono: 'IBM Plex Mono',
};
const GENERIC = {serif: 'Source Serif 4', 'sans-serif': 'Inter', monospace: 'JetBrains Mono', cursive: 'Caveat', fantasy: 'Anton', 'system-ui': 'Inter', 'ui-sans-serif': 'Inter', 'ui-serif': 'Source Serif 4', 'ui-monospace': 'JetBrains Mono'};

// Best open family for a CSS font-family stack, e.g. '"Söhne", Helvetica, sans-serif'.
export function mapFontStack(stack) {
  const names = String(stack).split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
  for (const n of names) {
    const exact = findFamily(n);
    if (exact) return {family: exact.f, from: n, how: 'same family on Google Fonts'};
    const k = key(n).replace(/(variable|vf|web|text|display|pro|std|regular)$/g, '');
    const alike = LOOKALIKE[key(n)] ?? LOOKALIKE[k];
    if (alike) return {family: alike, from: n, how: 'closest open look-alike'};
  }
  for (const n of names) if (GENERIC[n.toLowerCase()]) return {family: GENERIC[n.toLowerCase()], from: n, how: 'generic family'};
  return {family: 'Inter', from: names[0] ?? '', how: 'default'};
}

// Download the given weights of a Google family as TTF files into `dir`. Returns {weight: relPath}.
export async function downloadGoogleFont(family, weights, dir, relBase) {
  const meta = findFamily(family);
  if (!meta) throw new Error(`"${family}" is not on Google Fonts. Pick an open family (npm run styles -- fonts <search>).`);
  const have = meta.w.length ? meta.w : [400];
  const want = [...new Set((weights?.length ? weights : [400, 700]).map((w) => have.reduce((a, b) => (Math.abs(b - w) < Math.abs(a - w) ? b : a))))].sort((a, b) => a - b);
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(meta.f).replace(/%20/g, '+')}:wght@${want.join(';')}&display=swap`;
  const res = await fetch(url); // a non-browser client gets plain TTF urls
  if (!res.ok) throw new Error(`Google Fonts refused ${meta.f} ${want.join(',')}: HTTP ${res.status}`);
  const css = await res.text();
  fs.mkdirSync(dir, {recursive: true});
  const files = {};
  for (const block of css.split('@font-face').slice(1)) {
    const w = Number(block.match(/font-weight:\s*(\d+)/)?.[1] ?? 400);
    const style = block.match(/font-style:\s*(\w+)/)?.[1] ?? 'normal';
    const src = block.match(/url\((https:[^)]+)\)/)?.[1];
    if (!src || style !== 'normal' || files[w]) continue;
    const name = `${meta.f.replace(/[^A-Za-z0-9]+/g, '')}-${w}.ttf`;
    const bin = Buffer.from(await (await fetch(src)).arrayBuffer());
    fs.writeFileSync(path.join(dir, name), bin);
    files[w] = `${relBase}/${name}`;
  }
  if (!Object.keys(files).length) throw new Error(`No font files came back for ${meta.f}`);
  return {family: meta.f, category: meta.c, files};
}
