const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000; // Change the port number as desired

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    let filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      }
    });
  } else {
    res.writeHead(404);
    res.end('File not found');
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
