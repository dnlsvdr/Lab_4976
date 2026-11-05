import {copyFileSync,mkdirSync} from 'node:fs';
mkdirSync('dist',{recursive:true});
for(const name of ['index.html','styles.css']) copyFileSync(name,`dist/${name}`);
