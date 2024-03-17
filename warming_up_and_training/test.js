const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      res.end("<h1>This is a main Page</h1>");
      break;
    case "/about":
      res.end("<h1>This is about us</h1>");
      break;
    case "/fitness":
      res.end("<h1>Fitness is refreshing</h1>");
      break;
    case "/nutrition":
      res.end("<h1>Nutrition is very important</h1>");
      break;
    default:
      // Handle 404 Not Found
      res.writeHead(404);
      res.end("<h1>404 Not Found</h1>");
      break;
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

/* 
Extend the server you created in Exercise 1 (01_hello_world_server) . Modify it to return different responses based on the URL path. For instance:
- If a user visits `http://localhost:3000/`, the server should respond with "Welcome to the homepage."
- If a user visits `http://localhost:3000/about`, the server should respond with "Welcome to the about page."

**Key Concepts to Explore:**
- Request object, especially how to get the URL
- Conditional responses based on URL


*/
