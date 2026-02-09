require("dotenv").config();
const http = require("http");

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
       res.end("Hello, from NodeJs Server")
    }  else if (req.url === "/about"){
        res.end("About us Page")
    } else if (req.url === "/user" && req.method === "GET") {
        res.end("Fetching User using GET Request method")
    } else if (req.url === "/login" && req.method === "POST") {
        let body = "";
        req.on("data", userData => {
            body += userData;
        });

        req.on("end", () => {
            const user = JSON.parse(body);
            console.log(user)
            res.writeHead(201, { "Content-Type": "application/json"});
            res.end(JSON.stringify({
                message: "user created successfully!",
                user: user
            }))
        })
    } else {
        res.end("Page not Found")
    }
    
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log("Server running on port: ", PORT)
})

// server.listen(3005);
