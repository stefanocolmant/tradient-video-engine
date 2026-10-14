import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';import {spawnSync} from 'node:child_process';import {createHash} from 'node:crypto';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
function run(args,cwd=root){const r=spawnSync(process.execPath,args,{cwd,stdio:'inherit'});if(r.status!==0)process.exit(r.status??1)}
for(const name of ['tradient','reference','cstack'])run([path.join(root,'node_modules/typescript/bin/tsc'),'--noEmit','-p',path.join(root,'engines',name)]);
run(['engines/tradient/production-script/visual-direction-v8/check.mjs']);
run(['engines/reference/production-script/test-spec.mjs']);
run(['engines/reference/production-script/check-spec.mjs','engines/reference/production-script/a23.production.json','engines/reference/public']);
const manifest=JSON.parse(fs.readFileSync(path.join(root,'docs/ASSET-MANIFEST.json')));
for(const a of manifest){const b=fs.readFileSync(path.join(root,a.path));if(createHash('sha256').update(b).digest('hex')!==a.sha256)throw Error('Asset changed: '+a.path)}
console.log('PASS: three source trees, V8 state/cue validation, A23 frame coverage and',manifest.length,'asset hashes. Visual quality requires separate review.');
