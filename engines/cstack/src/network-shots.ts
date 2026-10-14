// @ts-nocheck
// Reference-studied hardware and four distinct shots. All poses are seek-safe.
import {T,P,V,group,mat,box,tube,label,glow,packet,step,ease,mix,rand} from './kit/objects';
import {studio} from './production-kit';
const cam=(eye,look,fov=49)=>({eye,look,fov});
const ground=(x,z)=>.52*Math.sin(x*.17+z*.11)+.30*Math.cos(z*.27-x*.08);

// Restrained patch cables terminate in actual ports. Far racks share this geometry.
export function routingRack(parent,detail=true){
  const g=group(parent),dark=mat(0x050b14,.5,.57),rail=mat(0x22354d,.7,.38),face=mat(0x2a3e60,.55,.45),black=mat(0x02060d,.1,.7);
  box(g,1.86,4.7,1.3,dark,0,2.35,-.10);
  for(const side of [-1,1]){
    box(g,.11,4.6,.17,rail,side*.89,2.35,.65);
    for(let j=0;j<18;j++)box(g,.07,.105,.06,face,side*.9,.2+j*.25,.76);
  }
  for(const y of [.7,3.96]){
    box(g,1.65,.53,.14,rail,0,y,.65);
    for(let j=0;j<6;j++){
      const x=-.67+j*.265,pts=[];for(let k=0;k<=12;k++){const a=-.9+k/12*1.8;pts.push([x+.055*Math.cos(a),y+.14*Math.sin(a),.75]);}
      tube(g,pts,.012,mat(0x739cc4,.7,.4,.08),12);
    }
  }
  for(const y of [.23,1.12,3.53,4.47]){
    box(g,1.65,.24,.12,black,0,y,.65);
    for(let j=0;j<4;j++)box(g,1.53,.012,.012,rail,0,y-.08+j*.05,.72);
  }
  for(let row=0;row<8;row++){
    const y=1.48+row*.25;box(g,1.64,.21,.14,face,0,y,.66);
    for(let j=0;j<12;j++){
      const x=-.69+j*.125;box(g,.085,.066,.04,black,x,y,.75);
      if(detail)box(g,.014,.014,.015,mat(j%5?0x557da4:0xc6e9fc,.3,.6,j%5?.08:.3),x,y+.061,.78);
    }
  }
  const wire=mat(0x4e99c5,.25,.48,.14);
  for(let i=0;i<(detail?23:10);i++){
    const row=i%8,dest=(i*3+2)%8,x=-.69+(i*5%12)*.125,xx=-.69+(i*7+3)%12*.125;
    const y=1.48+row*.25,yy=1.48+dest*.25,side=i%3?1:-1;
    tube(g,[[x,y,.79],[x+side*.12,y-.06,.88],[side*(.80+(i%3)*.08),y-.16,.97],[side*.93,yy-.22,1.01],[xx,yy-.05,.90],[xx,yy,.79]],.0065,wire,36);
  }
  box(g,2.03,.10,1.55,dark,0,.02);return g;
}

export function routedNetwork(kind){
  const root=studio({wide:true});root.children.forEach(o=>{if(o.isLight)o.intensity*=.65;});
  const landGeo=new T.PlaneGeometry(260,260,100,100);landGeo.rotateX(-Math.PI/2);
  const a=landGeo.attributes.position;for(let i=0;i<a.count;i++)a.setY(i,ground(a.getX(i),a.getZ(i)));landGeo.computeVertexNormals();
  const land=new T.Mesh(landGeo,mat(0x030814,.10,.94));land.receiveShadow=true;root.add(land);
  const nodes=[];const template=routingRack(new T.Group(),false);
  for(let r=0;r<8;r++)for(let c=0;c<7;c++){
    const x=(c-3)*7+(r%2)*2.1+(rand(r*31+c)-.5)*2,z=-7-r*9+(rand(r*17+c+80)-.5)*3;
    const o=template.clone();o.position.set(x,ground(x,z),z);o.scale.setScalar(.55+rand(r*71+c)*.19);o.rotation.y=(rand(r*7+c+100)-.5)*.45;root.add(o);nodes.push({x,z,o});
  }
  const close=routingRack(root,true);close.position.y=ground(0,0);
  close.scale.setScalar(kind==='network'?.73:1);close.visible=true;
  const paths=[];
  const route=(pts,r=.038,color=0x4d87c3,emit=.5)=>{
    const elevated=[];for(let i=0;i<pts.length;i++)elevated.push([pts[i][0],ground(pts[i][0],pts[i][1])+.055,pts[i][1]]);
    const c=new T.CatmullRomCurve3(elevated.map(V)),sample=[];for(let i=0;i<=80;i++){const p=c.getPointAt(i/80);p.y=ground(p.x,p.z)+.055;sample.push(p);}
    return tube(root,new T.CatmullRomCurve3(sample),r,mat(color,.12,.55,emit),120);
  };
  for(let r=0;r<7;r++)for(let c=0;c<7;c++){
    const p=nodes[r*7+c],q=nodes[(r+1)*7+Math.min(6,c+(r%2?0:1))];
    paths.push(route([[p.x,p.z],[p.x+1,p.z-3],[q.x-1,q.z+3],[q.x,q.z]]).path);
    if(c<6){const n=nodes[r*7+c+1];route([[p.x,p.z],[p.x+2,p.z+2],[n.x-2,n.z+2],[n.x,n.z]],.021,0x3b68a2,.4);}
  }
  route([[-18,8],[-9,3],[0,0],[9,-4],[17,-7]],.035);
  route([[0,0],[3,-3],[2,-8],[0,-16]],.032);
  route([[0,0],[-4,-3],[-9,-6],[-12,-14]],.032);
  const main=route([[0,14],[0,7],[0,1],[0,0],[2,-4],[2,-9],[0,-16],[0,-26]],.036,P.gold,1.7);
  const alternate=route([[0,0],[4,-2],[7,-6],[9,-13],[7,-22]],.035,P.gold,1.7);
  const tip=glow(root,.8,P.gold),spill=new T.PointLight(P.gold,7,5,2);root.add(spill);
  const hero=packet(root,'0847',kind==='router'?1.65:.69,kind==='router'||kind==='reroute');
  const halos=paths.filter((_,i)=>i%2===0).map(()=>glow(root,.29,0x9bddff));
  const destination=label(root,'Los Angeles',5.5,.85);destination.position.set(0,2.6,-79);
  const shanghai=label(root,'Shanghai',1.8,.35);shanghai.position.set(1.8,.8,5);
  const question=label(root,'?',1.8,2.8);question.position.set(0,4.7,-9);
  const routerTag=label(root,'Router',.49,.16);routerTag.position.set(-1.10,4.12,1.02);
  const blocked=route([[0,0],[3,-3],[2,-8]],.042,P.red,.6);
  const fault=glow(root,.8,P.red);fault.position.set(2,ground(2,-8)+.10,-8);
  const reveal=(o,q)=>o.geometry.setDrawRange(0,Math.floor(step(q,0,1)*120)*48);
  const follow=(path,q)=>{const p=path.getPointAt(Math.max(0,Math.min(1,q)));hero.position.copy(p);hero.position.y+=1.35;tip.position.copy(p);spill.position.copy(p);spill.position.y+=.15;};
  return {root,environmentIntensity:.16,fogDensity:.004,fogColor:0x060d24,update(t,global=59+t){
    const onward=kind==='network'&&global>=69;
    main.o.visible=kind!=='router';alternate.o.visible=kind==='reroute';
    routerTag.visible=kind==='router';blocked.o.visible=fault.visible=kind==='reroute'&&t>.35&&t<1.5;
    question.visible=kind==='network'&&!onward&&t>1.1&&t<3.45;
    shanghai.visible=kind==='network'&&!onward&&t<3.6;destination.visible=kind==='network';
    tip.visible=spill.visible=kind!=='router';hero.visible=true;hero.scale.setScalar(1);hero.rotation.set(0,0,0);
    if(kind==='router'){
      const enter=ease(step(t,.6,1.6)),leave=ease(step(t,3.5,4.25));hero.position.set(mix(-1.6,-.4,enter)+leave*1.7,2.10,1.34);
      hero.scale.set(enter*(1-leave),enter*(1-leave)*.84,enter*(1-leave));hero.rotation.y=-.16;hero.visible=t>.6&&t<4.25;
      close.position.set(0,0,0);nodes.forEach(n=>n.o.visible=false);halos.forEach(h=>h.visible=false);
    }else if(kind==='reroute'){
      const q=ease(step(t,1.8,3.75));follow(alternate.path,q);reveal(alternate.o,q);reveal(main.o,.43);hero.position.y+=.18*(1-q);hero.position.z+=1.3*(1-step(q,0,.15));
      hero.rotation.y=.2;tip.scale.setScalar(.7);fault.material.opacity=1-step(t,1.1,1.5);
    }else{
      const q=onward?mix(.44,.94,ease(step(t,0,3.3))):mix(.13,.44,ease(step(t,0,4.8)));
      follow(main.path,q);reveal(main.o,q);tip.scale.setScalar(.6);
    }
    halos.forEach((h,i)=>{h.position.copy(paths[i*2].getPointAt((t*.055+rand(i+8))%1));h.position.y+=.035;});
  },camera(t,global=59+t){
    if(kind==='router')return cam([mix(-2.15,-1.9,ease(step(t,0,5))),2.7,6.2],[0,2.5,0],46);
    if(kind==='reroute'){
      const q=ease(step(t,1.65,3.8));return cam([mix(4.2,3,q),mix(5.5,9,q),mix(9.5,15,q)],[mix(.1,4,q),.8,mix(-2,-12,q)],51);
    }
    if(global>=69){const q=ease(step(t,0,3.3));return cam([mix(0,1.3,q),9.3,mix(19,8,q)],[0,.2,mix(-18,-27,q)],51);}
    const rise=ease(step(t,.2,2.1)),approach=ease(step(t,3.45,5));
    return cam([mix(0,4.5,approach),mix(mix(6.3,10.8,rise),6.8,approach),mix(23,12,approach)],[0,mix(0,.6,approach),mix(-22,-4,approach)],51);
  }};
}
