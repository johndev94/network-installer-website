import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve, sep } from 'node:path';

const port = Number(process.env.PORT || 8080);
const host = process.env.HOST || '0.0.0.0';
const distDir = resolve('dist');
const indexFile = join(distDir, 'index.html');

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function sendFile(res, filePath) {
  const extension = extname(filePath).toLowerCase();
  const headers = {
    'Content-Type': mimeTypes[extension] || 'application/octet-stream',
  };

  if (filePath.includes(`${sep}assets${sep}`)) {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  } else {
    headers['Cache-Control'] = 'no-cache';
  }

  res.writeHead(200, headers);
  createReadStream(filePath).pipe(res);
}

const server = createServer((req, res) => {
  if (!existsSync(indexFile)) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Build output not found. Run: npm run build');
    return;
  }

  const requestUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const decodedPath = decodeURIComponent(requestUrl.pathname);
  const normalizedPath = normalize(decodedPath)
    .replace(/^(\.\.[/\\])+/, '')
    .replace(/^[/\\]+/, '');
  const requestedFile = join(distDir, normalizedPath);
  const resolvedFile = resolve(requestedFile);
  const isInsideDist = resolvedFile === distDir || resolvedFile.startsWith(`${distDir}${sep}`);

  if (!isInsideDist) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  if (existsSync(resolvedFile) && statSync(resolvedFile).isFile()) {
    sendFile(res, resolvedFile);
    return;
  }

  sendFile(res, indexFile);
});

server.listen(port, host, () => {
  console.log(`Serving ${distDir} at http://${host}:${port}`);
});
