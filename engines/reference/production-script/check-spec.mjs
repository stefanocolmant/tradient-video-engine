import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
export function validate(s){
 assert.equal(s.schemaVersion,1);const c=s.composition;
 if(s.captureProfile){const p=s.captureProfile;assert(['native','cpu-preserved'].includes(p.canvasProfile));assert([1,2].includes(p.workers));assert.equal(p.fromSurface,true);assert(/^[a-f0-9]{64}$/.test(p.browserSha256),'Pinned browser hash required');}
 for(const k of ['width','height','fps','durationInFrames'])assert(Number.isInteger(c[k])&&c[k]>0,`Invalid ${k}`);
 assert(s.shots.length>0);const ids=new Set();
 for(const x of s.shots){assert(!ids.has(x.id),'Duplicate shot');ids.add(x.id);assert(x.end>x.start);assert(['physical','globe'].includes(x.component));assert(Number.isFinite(x.clock.localOrigin));assert.equal(x.clock.masterFrameOffset,0,'masterFrameOffset is reserved and must be zero');assert(['undersea','sending','bedside','slowdown','binary','encryption','packets','packet-number','send-radio','tower','ground','network-intro','network','router','reroute','landing','seabed','hose','fiber','satellite','fade','repeater','crossing','la','receive-radio','arrival','sort','retransmit','unlock','ship','final-network','earth-pacific','earth-web','earth-atlantic','earth-pacific-return','earth-web-ending'].includes(x.scene),`Unknown scene ${x.scene}`);}
 for(let frame=0;frame<c.durationInFrames;frame++){const hits=s.shots.filter(x=>frame/c.fps>=x.start&&frame/c.fps<x.end);assert.equal(hits.length,1,`Frame ${frame} must belong to one shot`);}
 for(const x of s.shots)if(x.type==='packet-number'){assert(/^\d{4}$/.test(x.parameters.heroLabel),'Card label must be four digits');assert(Number.isInteger(x.parameters.focusDelayFrames)&&Math.abs(x.parameters.focusDelayFrames)<=15,'Card focus delay must be within 15 frames');}
 for(const l of s.layers)assert(['static','metric','timer','packet-count','photo-leader','image','arrival-count','photo-mosaic','captions'].includes(l.kind),`Unknown layer ${l.kind}`);
 assert(s.audio.asset&&!s.audio.asset.toLowerCase().endsWith('.mp4'));
 assert(s.assetManifest.some(x=>x.path===s.audio.asset));
 return {shots:s.shots.length,frames:c.durationInFrames,layers:s.layers.length,assets:s.assetManifest.length};
}
if(process.argv[1]?.endsWith('check-spec.mjs')){const s=JSON.parse(fs.readFileSync(process.argv[2]));const result=validate(s);if(process.argv[3])for(const a of s.assetManifest){const b=fs.readFileSync(path.join(process.argv[3],a.path));assert.equal(createHash('sha256').update(b).digest('hex'),a.sha256,`Asset changed: ${a.path}`);}console.log(JSON.stringify({...result,assetHashesChecked:process.argv[3]?s.assetManifest.length:0}));}
