import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
const types={'.js':'text/javascript','.css':'text/css','.html':'text/html'};
createServer(async(req,res)=>{const pathname=new URL(req.url,'http://localhost').pathname;const name=pathname==='/styles.css'?'styles.css':pathname==='/app.js'?'app.js':'index.html';try{const data=await readFile(`dist/${name}`);res.writeHead(200,{'Content-Type':types[name.slice(name.lastIndexOf('.'))]});res.end(data);}catch{res.writeHead(500);res.end('Run npm run build first.');}}).listen(Number(process.env.PORT || process.argv[process.argv.indexOf('--port') + 1]) || 3000,'0.0.0.0');
