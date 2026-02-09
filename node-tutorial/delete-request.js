// DELETE : Remove Data


const http = require('http');

const server = http
  .createServer((req, res) => {
    if (req.method === "DELETE" && req.url === "/users/1") {
        res.setHeader("Content-Type", "application/json");
        res.statusCode = 204; // No Content
        res.end();
    } else {
      res.setHeader("Content-Type", "text/plain");
      res.end(
        JSON.stringify([
          {
            message: "Welcome to my API server",
          },
        ])
      );
    }
  });

server.listen(6000, () => {
  console.log("Server is running on port 6000");
});
