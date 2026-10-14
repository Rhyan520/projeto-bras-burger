// Servidor opcional de apresentação local. Não é necessário para hospedar o site.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.webp':'image/webp','.png':'image/png'};
const server = http.createServer((req, res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname); }
  catch { res.writeHead(400).end('Endereço inválido'); return; }
  const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
  if (!file.startsWith(root + path.sep) || !mime[path.extname(file)]) {
    res.writeHead(404).end('Arquivo não encontrado'); return;
  }
  fs.readFile(file, (error, data) => {
    if (error) { res.writeHead(404).end('Arquivo não encontrado'); return; }
    res.writeHead(200, {'Content-Type': mime[path.extname(file)]}).end(data);
  });
});
server.on('error', error => {
  console.error(error.code === 'EADDRINUSE'
    ? 'A porta 4173 está em uso. Encerre a outra prévia e tente novamente.'
    : 'Não foi possível iniciar a prévia: ' + error.message);
  process.exitCode = 1;
});
server.listen(4173, '127.0.0.1', () => {
  console.log('Bras Burger — abra http://127.0.0.1:4173 no navegador.');
  console.log('Pressione Ctrl+C para encerrar.');
});
