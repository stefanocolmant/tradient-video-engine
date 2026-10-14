// Each quote moves continuously; only a row exiting the foreground recycles at the far end.
export function dataFieldPose(index,seconds,s){
 const length=s.rows*s.spacing;
 const depth=((Math.floor(index/s.cols)*s.spacing-seconds*s.speed)%length+length)%length;
 const angle=Math.max(0,depth-s.bendStart)/s.bendRadius;
 return {depth,angle,x:(index%s.cols-(s.cols-1)/2)*s.spacing,y:.1+s.bendRadius*(1-Math.cos(angle)),z:depth<=s.bendStart?-depth:-s.bendStart-s.bendRadius*Math.sin(angle)};
}
