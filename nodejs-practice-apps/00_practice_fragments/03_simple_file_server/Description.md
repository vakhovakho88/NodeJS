### Exercise 3: Simple File Server
Create a simple file server that serves files from a directory. When a user requests a file by accessing `http://localhost:3000/filename.txt`, your server should read the requested file from the server's local directory and return its contents to the user. If the file does not exist, the server should return a 404 error.

**Key Concepts to Explore:**
- File system module (`fs`)
- Asynchronous file reading
- Handling errors, especially file not found
