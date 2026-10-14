import {ease,timeline} from './runtime.mjs';
export const lerp3=(a,b,p)=>a.map((x,i)=>x+(b[i]-x)*p);
export function assertCraft(score){
 const v=score.visualDirection;if(v.craftVersion!==6)throw Error('Craft version 6 required');
 const d=v.data.inspection;if(!d||!d.camera||!d.timing||!Array.isArray(d.priceFrames))throw Error('Optical inspection recipe missing');
 if(d.sampleSize.join(',')!=='5.23,5.25'||d.lensMagnification!==1.85)throw Error('Saved A23 optics require calibrated sample size and magnification');
 for(const key of ['rise','tiles','lensEnter','lensLeave']){const pair=d.timing[key];if(!Array.isArray(pair)||pair.length!==2||!pair.every(Number.isFinite)||pair[1]<=pair[0])throw Error('Missing optical phase '+key);}
 if(d.tileGrid.join(',')!=='12,12'||!Number.isFinite(d.tileStagger))throw Error('Tile assembly recipe missing');
 if(d.timing.tiles[1]+11*d.tileStagger>d.timing.rise[1])throw Error('Sample swap precedes final source tile arrival');
 const r=v.execution.returnFlight;if(!r||!['reportFrom','reportTo','eyeFrom','eyeTo','targetFrom','targetTo'].every(k=>Array.isArray(r[k])&&r[k].length===3&&r[k].every(Number.isFinite))||![r.fovFrom,r.fovTo].every(Number.isFinite))throw Error('Explicit report/camera return flight required');
 // This route passes left of the stationary 8.6-wide price book; no moving-shelf shortcut.
 if(r.reportTo[0]>-9||r.eyeTo[0]>-7)throw Error('Return corridor intersects fixed price book');
 if(!Number.isFinite(v.execution.priceDepth)||v.execution.priceDepth<=0)throw Error('Price depth missing');
 if(v.revision>=7){const q=v.execution.limitJourney;if(!q||q.event!=='above-limit'||q.nextAvailablePrice!==score.values.nextPrice||!Array.isArray(q.curvePoints)||q.curvePoints.length!==4||q.curvePoints.some(p=>p.length!==3||!p.every(Number.isFinite))||![q.enterOffset,q.exitOffset,q.holdAfterEnd].every(Number.isFinite)||!q.camera?.length||!q.availableLabel?.position||!q.limitLabel?.position)throw Error('Explicit V7 limit journey required');
  const cameraValid=cs=>Array.isArray(cs)&&cs.length>1&&cs.every((c,i)=>Number.isFinite(c.frame)&&Number.isFinite(c.fov)&&['eye','target'].every(k=>Array.isArray(c[k])&&c[k].length===3&&c[k].every(Number.isFinite))&&(!i||c.frame>cs[i-1].frame));
  if(!cameraValid(q.camera)||[q.availableLabel,q.limitLabel].some(x=>x.position.length!==3||!x.position.every(Number.isFinite)||![x.width,x.height].every(n=>Number.isFinite(n)&&n>0)))throw Error('Invalid limit camera or label construction');
  const c=cableConstructionDirection(score);if(!c||c.event!=='route'||c.selectedFiber!==0||c.armorCount!==22||!cameraValid(c.camera)||![c.startFrame,c.diveFrame,c.microFrame,c.hideFrame,c.endFrame,c.pulseStartFrame,c.pulseEndFrame,c.scale,c.tipAxis,c.pulseSize].every(Number.isFinite)||!Array.isArray(c.position)||c.position.length!==3||!c.position.every(Number.isFinite))throw Error('Explicit V7 cable construction required');
  if(!(c.startFrame<c.diveFrame&&c.diveFrame<c.microFrame&&c.microFrame<c.hideFrame&&c.hideFrame<c.endFrame&&c.pulseStartFrame<c.pulseEndFrame&&c.pulseEndFrame===c.microFrame))throw Error('Invalid physical cable phase order');
  if(Math.abs(c.position[2]-c.tipAxis*c.scale-1.05)>1e-9||c.position[0]!==-.07||c.position[1]!==2.23)throw Error('Macro tip must meet micro origin');
 }
 return true;
}
export function inspectionState(score,f){
 const d=score.visualDirection.data.inspection,t=timeline(score),pass=f>=t.get('passes').anchorFrame;
 const crossing=t.get('passes'),plotPrice=f<crossing.firstFrame?null:f<=crossing.anchorFrame?99.99+.0101*ease((f-crossing.firstFrame)/(crossing.anchorFrame-crossing.firstFrame)):100.0001+.0099*ease((f-crossing.anchorFrame)/(crossing.endFrame-crossing.anchorFrame));
 const active=pass?3:f<d.priceFrames[1]?0:f<d.priceFrames[2]?1:2;
 const phase=k=>ease((f-d.timing[k][0])/(d.timing[k][1]-d.timing[k][0]));
 return {active,plotPrice:plotPrice??[99.96,99.98,99.99][active],price:[99.96,99.98,99.99,score.values.qualifying][active],pass,rise:phase('rise'),lensEnter:phase('lensEnter'),lensLeave:phase('lensLeave'),tile:i=>ease((f-d.timing.tiles[0]-(i%12)*d.tileStagger)/(d.timing.tiles[1]-d.timing.tiles[0]))};
}
export function reportFlight(score,f){
 const r=score.visualDirection.execution.returnFlight,p=timeline(score).progress('report-return',f);
 return {p,report:lerp3(r.reportFrom,r.reportTo,p),eye:lerp3(r.eyeFrom,r.eyeTo,p),target:lerp3(r.targetFrom,r.targetTo,p),fov:r.fovFrom+(r.fovTo-r.fovFrom)*p};
}
export function limitJourneyState(score,f){
 const d=score.visualDirection.execution.limitJourney;if(!d)return null;
 const e=timeline(score).get(d.event),start=e.firstFrame+d.enterOffset,end=e.endFrame+d.exitOffset,fadeStart=e.endFrame+d.holdAfterEnd;
 const p=ease((f-start)/(e.anchorFrame-start)),opacity=1-ease((f-fadeStart)/(end-fadeStart));
 return {start,end,active:f>=start&&f<end,progress:p,opacity,labels:ease((f-e.firstFrame)/(e.anchorFrame-e.firstFrame))*opacity};
}

export function cableConstructionDirection(score){
 const c=score.visualDirection.network.construction;if(!c)return null;
 const t=timeline(score),bindings=c.phaseBindings;if(!bindings)throw Error('Cable phases require event bindings');
 const resolved={...c};for(const k of ['diveFrame','microFrame','hideFrame','pulseStartFrame','pulseEndFrame']){const b=bindings[k];if(!b||b.event!=='route'||!['firstFrame','anchorFrame','endFrame'].includes(b.boundary)||!Number.isFinite(b.offset))throw Error('Missing cable phase binding '+k);resolved[k]=t.get(b.event)[b.boundary]+b.offset;}
 return resolved;
}
