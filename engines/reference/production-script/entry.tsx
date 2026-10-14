import React from 'react';
import {Composition,registerRoot} from 'remotion';
import {ProductionReplay} from './player';
import score from './a23.production.json';
type ReplayProps=Record<string,unknown>&{score:typeof score;sample?:{offset:number};audit?:boolean};
const Replay:React.FC<ReplayProps>=props=><ProductionReplay {...props}/>;
const Root=()=> <Composition<any,ReplayProps> id='ProductionScriptReplay' component={Replay} width={score.composition.width} height={score.composition.height} fps={score.composition.fps} durationInFrames={score.composition.durationInFrames} defaultProps={{score}} calculateMetadata={({props})=>({width:props.score.composition.width,height:props.score.composition.height,fps:props.score.composition.fps,durationInFrames:props.score.composition.durationInFrames})}/>;
registerRoot(Root);
