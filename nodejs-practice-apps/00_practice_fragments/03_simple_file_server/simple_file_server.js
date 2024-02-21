//not everything clear
// start the programm again!

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Basic security measure to prevent directory traversal attacks
  const safePath = path.join(__dirname, 'public', path.normalize(req.url).replace(/^(\.\.[\/\\])+/, ''));
    console.log(safePath);
  fs.readFile(safePath, (err, data) => {
    if (err) {
      // If the file is not found, send a 404 response
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.end('<h1>404 Not Found</h1>');
    } else {
      // Determine the content type based on the file extension
      const ext = path.extname(safePath);
      console.log(ext);
      let contentType = 'text/plain';

      switch (ext) {
        case '.html':
          contentType = 'text/html';
          break;
        case '.js':
          contentType = 'text/javascript';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.jpg':
          contentType = 'image/jpeg';
          break;
        case '.txt':
          contentType = 'text/plain';
          break;
        // Add more cases for other content types as needed
      }

      // Set the content type and send the file content
      res.writeHead(200, {'Content-Type': contentType});
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
