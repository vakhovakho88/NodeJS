const http = require('http');

const server = http.createServer((req, res)=>{
  console.log(req.url)
  res.setHeader("Content-Type","text/html");
  res.end("Works");

});

const PORT = 3000;
server.listen(PORT, ()=>{
  console.log(`Server is listening on Port ${PORT}`);
})