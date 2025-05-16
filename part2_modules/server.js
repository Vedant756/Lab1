const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, 'pages', req.url === '/' ? 'home.html' : `${req.url}.html`);

  fs.readFile(filePath, (err, content) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'pages', '404.html'), (err404, page404) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(page404);
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
