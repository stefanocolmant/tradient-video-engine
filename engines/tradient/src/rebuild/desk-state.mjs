// Pure screen state: the texture cache serializes exactly what the painter consumes.
export function deskDisplayState(s,extension){
 const late=s.stage('closing').active,earlier=s.stage('earlier').active;
 const test=late&&s.p('test-end')>0&&!s.at('monitor-end');
 return {late,earlier,price:(99.99+extension*.02).toFixed(2),configure:Math.round(s.p('configure')*45)/45,saved:earlier&&s.p('store-rule')>.5,inspect:!late&&!earlier&&s.p('manual-check')>.25||late&&s.p('define-end')>.2,submitted:s.p('manual-submit')>.9&&!earlier,test,testRows:test?Math.min(3,Math.floor(s.p('test-end')*3)+1):0};
}
export const deskDisplayKey=state=>JSON.stringify(state);
