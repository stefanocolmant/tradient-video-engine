import fs from 'node:fs';import assert from 'node:assert/strict';import {validate} from './check-spec.mjs';
const s=JSON.parse(fs.readFileSync(new URL('a23.production.json',import.meta.url)));
validate(s);assert.equal(s.seconds.length,163);assert.equal(s.seconds.at(-1).endFrameInclusive,4864);
for(let f=0;f<4865;f++){assert(s.constructionBeats.some(b=>b.nativeStart<=f/30&&b.nativeEnd>f/30),`No construction beat at ${f}`)}
const gap=structuredClone(s);gap.shots[0].end=1;assert.throws(()=>validate(gap),/one shot/);
const overlap=structuredClone(s);overlap.shots[0].end=8;assert.throws(()=>validate(overlap),/one shot/);
const extra=structuredClone(s);extra.layers.push({id:'bad',kind:'eval'});assert.throws(()=>validate(extra),/Unknown layer/);
const shifted=structuredClone(s);shifted.shots[0].clock.localOrigin=NaN;assert.throws(()=>validate(shifted));
const unknown=structuredClone(s);unknown.shots[0].scene='unbuilt';assert.throws(()=>validate(unknown),/Unknown scene/);
const badCard=structuredClone(s);badCard.shots.find(x=>x.type==='packet-number').parameters.heroLabel='bad';assert.throws(()=>validate(badCard),/four digits/);
console.log(JSON.stringify({validScore:true,seconds:163,constructionFrameCoverage:4865,rejected:['gap','overlap','unknown layer','invalid clock','unknown native scene','invalid card label']}));
