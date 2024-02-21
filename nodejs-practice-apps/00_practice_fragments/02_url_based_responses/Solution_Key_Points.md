### Key Points and Best Practices:

- **Routing Logic with `switch` Statement:** The `switch` statement is used to differentiate between the homepage (`'/'`) and the about page (`'/about'`). This simple routing mechanism demonstrates how to serve different content based on the request URL.
  
- **Setting the Status Code for 404:** When the requested URL doesn't match any case, a 404 Not Found status is sent back using `res.writeHead(404)`. This informs the client that the requested resource could not be found. After setting the status code, we send back a simple HTML message indicating the error.

- **Use of Template Literals for Dynamic Port in Logging:** Consistent with best practices, using template literals for the log statement when the server starts makes it easier to include dynamic values such as the `PORT`.

- **Error Handling:** Including a basic error handling mechanism with `server.on('error', ...)` ensures you have visibility into any issues that arise when attempting to start the server, such as port conflicts.

