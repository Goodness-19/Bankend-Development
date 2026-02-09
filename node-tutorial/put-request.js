// PUT : Replace existing Resource
// Resource 
/*
{
    "name": "Taiwo",
    "age": 70
}
*/

const http = require('http');

const server = http
  .createServer((req, res) => {
    if (req.method === "PUT" && req.url === "/users/1") {
        res.setHeader("Content-Type", "application/json");
        let body = '';

        req.on("data", chunk => body += chunk);

        req.on("end", () =>{
            const updatedUser = JSON.parse(body);
            res.end(JSON.stringify(updatedUser));
        })
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
