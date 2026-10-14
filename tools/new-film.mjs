import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');const name=process.argv[2];
if(!name||!(/^[a-z][a-z0-9-]{1,60}$/).test(name))throw Error('Usage: npm run new-film -- my-film-name');
const out=path.join(root,'my-films',name);if(fs.existsSync(out))throw Error('Film already exists; choose a new name');fs.mkdirSync(out,{recursive:true});
const score=JSON.parse(fs.readFileSync(path.join(root,'templates/new-film.production.json')));score.id=name;score.title=name;
fs.writeFileSync(path.join(out,'film.production.json'),JSON.stringify(score,null,2)+'\n');
fs.writeFileSync(path.join(out,'BRIEF.md'),'# '+name+'\n\nAudience:\nTakeaway:\nNarration:\nDuration:\nOwned media:\n\nFollow docs/AUTHORING.md. The blank script requires authored geometry and adapters before it renders.\n');
console.log('Created authoring package:',out);
