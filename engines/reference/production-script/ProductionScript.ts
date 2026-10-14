/** Native recipes supply geometry. This data owns editorial order and its clocks. */
export type Shot = {
 id:string;type:string;component:'physical'|'globe';scene:string;
 start:number;end:number;firstFrame:number;lastFrame:number;
 clock:{globalOffset:number;localOrigin:number;masterFrameOffset:number};resetKey:number|string;
 handoff:{enter:boolean;exit:boolean;enterDuration:number;exitDuration:number;scaleGain:number;blurGain:number;origin:string};
 parameters:Record<string,string|number|boolean>;
};
export type ProductionScript = {
 schemaVersion:1;id:string;title:string;
 captureProfile?:{id:string;gl:string;canvasProfile:'native'|'cpu-preserved';workers:1|2;fromSurface:boolean;browserSha256?:string};
 composition:{id:string;width:number;height:number;fps:number;durationInFrames:number};
 shots:Shot[];render:Record<string,unknown>;fonts:{family:string;asset:string;weight:string}[];
 finish:Record<string,unknown>;phone:Record<string,unknown>;supplemental:Record<string,unknown>;
 layers:({id:string;kind:string;types?:string[];start?:number;end?:number}&Record<string,unknown>)[];
 audio:{asset:string;startFrame:number;gain:number;kind:string;stemsRecovered:boolean};
 assetManifest:{path:string;sha256:string;bytes:number}[];
 words:{w:string;s:number;e:number}[];
 recipes?:Record<string,unknown>[];seconds?:Record<string,unknown>[];
};
