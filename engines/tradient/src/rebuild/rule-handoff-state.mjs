import {timeline,ease,cameraAt} from './runtime.mjs';
export function ruleHandoffDirection(score){
 const d=score.visualDirection?.ruleHandoff;if(!d)throw Error('Rule handoff recipe required');const t=timeline(score);
 const resolve=b=>{if(!b||!Number.isFinite(b.offset))throw Error('Rule handoff event binding required');return t.get(b.id)[b.boundary]+b.offset};
 const start=resolve(d.start),end=resolve(d.arrive);
 if(!Number.isInteger(start)||!Number.isInteger(end)||start>=end||start<t.get('store-rule').endFrame||end>=t.get('condition-detail').firstFrame)throw Error('Rule handoff must follow saving and precede condition explanation');
 for(const k of ['sourceRects','destinations'])if(!Array.isArray(d[k])||d[k].length!==3)throw Error('Three parameter mappings required');
 if(![d.settleStartFraction,d.fieldScaleGain,d.focusAperture,d.terrainStartY].every(Number.isFinite)||d.settleStartFraction<=0||d.settleStartFraction>=1||d.lateralArcs?.length!==3)throw Error('Rule handoff settling/light construction missing');
 for(const k of ['screenOrigin','chartSourcePosition','chartSourceScale','roomRetreat'])if(d[k]?.length!==3||!d[k].every(Number.isFinite))throw Error('Rule handoff construction missing '+k);
 if(d.chartExtension!==0)throw Error('Pre-signal chart must retain its source value');cameraAt(d.camera,start,score);
 return {...d,startFrame:start,endFrame:end};
}
export function ruleHandoffState(score,frame){const d=ruleHandoffDirection(score),p=ease((frame-d.startFrame)/(d.endFrame-d.startFrame));return {active:frame>=d.startFrame,progress:p,sourceFrame:Math.min(frame,d.startFrame),settle:1-ease((p-d.settleStartFraction)/(1-d.settleStartFraction)),start:d.startFrame,end:d.endFrame,room:d.roomRetreat.map(x=>x*p),sourceCenters:d.sourceRects.map(([x,y,w,h])=>[(x+w/2)/d.sourceTexture[0]*d.screenSize[0]-d.screenSize[0]/2+d.screenOrigin[0],d.screenSize[1]/2-(y+h/2)/d.sourceTexture[1]*d.screenSize[1]+d.screenOrigin[1],d.screenOrigin[2]]),positions:d.sourceRects.map(([x,y,w,h],i)=>{const from=[(x+w/2)/d.sourceTexture[0]*d.screenSize[0]-d.screenSize[0]/2+d.screenOrigin[0],d.screenSize[1]/2-(y+h/2)/d.sourceTexture[1]*d.screenSize[1]+d.screenOrigin[1],d.screenOrigin[2]];return from.map((v,k)=>v+(d.destinations[i][k]-v)*p)}),chartExtension:d.chartExtension};}
