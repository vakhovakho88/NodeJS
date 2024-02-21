// Step 1: Import the HTTP module
const http = require('http');

// Step 2: Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the Content-Type header to inform the browser about the type of content being sent
  res.setHeader('Content-Type', 'text/html');

  // Write the response body
  res.end('<h1>Hello, World!</h1>');
});

// Define the port number
const PORT = 3000;

// Step 3: Make the server listen on port 3000
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Optional: Error handling for the server
server.on('error', (error) => {
  console.error(`Error: ${error.message}`);
});
