// @ts-nocheck
// Explicit compatibility adapter. Baseline defaults do not alter any scene object.
export function applySceneParameters(built,shot,score){
 if(shot.type==='packet-number'&&(shot.parameters.heroLabel!=='0847'||shot.parameters.focusDelayFrames!==0)){
  if(!built.configure)throw Error('Native numbered-card recipe lacks configure()');
  built.configure(shot.parameters);
 }
 return built;
}
