const http=require('http'),fs=require('fs'),path=require('path');
const root=path.join(__dirname,'public');
http.createServer((req,res)=>{let name;try{name=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);return res.end('Bad request')}
const file=path.resolve(root,'.'+(name==='/'?'/index.html':name));
if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden')}
fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')}res.setHeader('Content-Type',({'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.jpg':'image/jpeg','.png':'image/png'})[path.extname(file)]||'text/plain');res.setHeader('X-Content-Type-Options','nosniff');res.end(data)})
}).listen(Number(process.env.PORT)||3000,'0.0.0.0',()=>console.log('Champions Lab: http://localhost:'+(process.env.PORT||3000)));
