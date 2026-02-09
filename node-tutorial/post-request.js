// HTTP Verbs
// GET, POST, PUT, DELETE, PATCH
// POST Request: Creating/Sending Data

const http = require("http");

http
  .createServer((req, res) => {
    if(req.method === "POST" && req.url === "/user"){
      let body = '';
      req.on("data", chunk =>body += chunk)
      req.on("end", () => {
        const user = JSON.parse(body);
        // res.statusCode = 201; // 201 - created
        // res.setHeader("Content-Type", "application/json");
        res.writeHead(201, { "Content-Type": "application/json"});
        res.end(JSON.stringify(user))
      })
    }
  })
  .listen(5000, () => {
    console.log("Server is running on port 5000");
  });
