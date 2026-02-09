// HTTP Verbs
// GET, POST, PUT, DELETE, PATCH
// GET - I want to get DATA
// When we use it=> Fetch Data

const http = require("http");
const url = require("url");

// const server = http
//   .createServer((req, res) => {
//     if (req.method === "GET" && req.url === "/users") {
//       res.setHeader("Content-Type", "application/json");
//       res.end(
//         JSON.stringify([
//           {
//             name: "Taiwo",
//             age: "40",
//           },
//           {
//             name: "John",
//             age: "50",
//           },

//         ])
//       ); // it takes jsvascript value (object, array, primitive ) to return a JSON string
//     } else {
//       res.setHeader("Content-Type", "text/plain");
//       res.end(
//         JSON.stringify([
//           {
//             message: "Welcome to my API server",
//           },
//         ])
//       );
//     }
//   });

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  // extract the route
  const pathName = parsedUrl.pathname;

  // Extract Query Parameters
  const name = parsedUrl.query.name;
  const role = parsedUrl.query.role;

  if (req.method === "GET" && pathName === "/users") {
    console.log(parsedUrl);
    res.setHeader("Content-Type", "application/json");

    if (name && role) {
      res.end(
        JSON.stringify([
          {
            message: `fetching users with name : ${name} and role ${role}`,
            name: name,
            role: role
          },
        ])
      );
    } else {
      res.end(
        JSON.stringify([
          {
            message: "Fetching all users",
          },
        ])
      );
    }
  } else {
    res.statusCode = 404; // Not found
    res.end(
      JSON.stringify([
        {
          message: "Route Not Found",
        },
      ])
    );
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
