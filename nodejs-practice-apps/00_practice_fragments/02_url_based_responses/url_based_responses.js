// Import the HTTP module
const http = require('http');

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the Content-Type header
  res.setHeader('Content-Type', 'text/html');

  // Determine the requested URL
  switch (req.url) {
    case '/':
      // Home page
      res.end('<h1>Welcome to the homepage</h1>');
      break;
    case '/about':
      // About page
      res.end('<h1>Welcome to the about page</h1>');
      break;
    default:
      // Handle 404 Not Found
      res.writeHead(404);
      res.end('<h1>404 Not Found</h1>');
  }
});

// Define the port number
const PORT = 3000;

// Make the server listen on port 3000
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Optional: Add basic error handling
server.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});
