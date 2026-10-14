import {ruleHandoffDirection} from './rule-handoff-state.mjs';
import {assertCraft} from './craft-state.mjs';
import {ease,timeline,cameraAt} from './runtime.mjs';
export function resolveBeat(score,beat){
 const t=timeline(score),out={...beat};
 for(const side of ['firstFrame','endFrame']){
  const b=beat[side+'Binding'];if(b){if(!Number.isFinite(b.offset))throw Error('Beat offset required');out[side]=t.get(b.id)[b.boundary]+b.offset;}
 }
 if(!Number.isInteger(out.firstFrame)||!Number.isInteger(out.endFrame)||out.endFrame<=out.firstFrame)throw Error('Invalid cinematic beat');return out;
}
export function resolveDataDirection(score){
 const d=score.visualDirection?.data;if(!d)throw Error('Data direction missing');
 return {...d,beats:Object.fromEntries(Object.entries(d.beats).map(([k,v])=>[k,Array.isArray(v)?v.map(b=>resolveBeat(score,b)):resolveBeat(score,v)]))};
}
export function recordMotion(score,d,index,frame,height){
 const p=timeline(score).get('passes'),crossing=d.thresholdY/height;
 const passage=frame<=p.anchorFrame?crossing*ease((frame-p.firstFrame)/(p.anchorFrame-p.firstFrame)):crossing+(1-crossing)*ease((frame-p.anchorFrame)/(p.endFrame-p.anchorFrame));
 const b=d.beats.extract,stagger=(b.endFrame-b.firstFrame)*.14;
 const rise=index<3?ease((frame-b.firstFrame-index*stagger)/(b.endFrame-b.firstFrame-2*stagger)):passage;
 const leave=index<3?d.beats.failedSamples[index]:d.beats.assemble;
 return {rise,drop:ease((frame-leave.firstFrame)/(leave.endFrame-leave.firstFrame))};
}
export function assertCinematic(score){
 if(score.visualDirection?.ruleHandoff)ruleHandoffDirection(score);
 const v=score.visualDirection;if(!v||v.version!==1)throw Error('Cinematic direction v1 required');
 for(const family of ['data','configuration','network','execution','comparison']){
  if(!v[family]?.camera)throw Error('Camera missing: '+family);cameraAt(v[family].camera,0,score);
 }
 if(!Number.isInteger(v.configuration.headerOutFrame)||!v.configuration.departure)throw Error('Configuration departure/header timing missing');
 if(!v.desk||![v.desk.macroDepth,v.desk.macroEndFrame,v.desk.focusAperture].every(Number.isFinite))throw Error('Desk macro optics missing');
 const d=resolveDataDirection(score);for(const k of ['columns','rows','pitch','rowPitch','seed','thresholdY','unitHeight','fieldEmissive','focusAperture'])if(!Number.isFinite(d[k]))throw Error('Data construction missing: '+k);
 const t=timeline(score);for(const [a,b]of [['qualify','passes'],['values','remaining-checks'],['assemble','build']]){const x=d.beats[a],e=t.get(b);if(x.firstFrame!==e.firstFrame||x.endFrame!==e.endFrame)throw Error('Unbound data action '+a);}
 const p=t.get('passes');if(p.anchorFrame<=p.firstFrame||p.anchorFrame>=p.endFrame)throw Error('Threshold crossing anchor must be inside action');
 const levels=v.execution.levels;if(!Array.isArray(levels)||levels.some((x,i)=>x.price<100.03||!Number.isInteger(x.quantity)||x.quantity<0||i&&x.price<=levels[i-1].price))throw Error('Invalid ask ladder');
 for(const [price,q]of [[100.03,2],[100.04,1],[100.05,0],[100.06,4]])if(levels.find(r=>r.price===price)?.quantity!==q)throw Error('Calibrated liquidity missing');
 if(v.craftVersion===6)assertCraft(score);else{resolveBeat(score,v.execution.reportAisle);if(v.execution.reportAisle.endFrame>t.get('report-return').firstFrame)throw Error('Report camera aisle opens too late');}
 if(!Array.isArray(v.soundCues))throw Error('Explicit sound cues missing');
 for(const cue of v.soundCues){const e=t.get(cue.event);if(!Number.isFinite(cue.offset)||!Number.isFinite(e[cue.boundary]))throw Error('Unbound sound cue');}
 return true;
}
