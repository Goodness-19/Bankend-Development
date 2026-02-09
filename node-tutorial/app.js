const { log, greet } = require("./logger");
const path = require("path");
// console.log(__dirname);
console.log(__filename);

const pathObject = path.parse(__dirname);
console.log(pathObject);

log("Hello, World!");
greet();

//   Write a function that takes in the path of a file
// e.g /Users/user/Documents/imagined-idea-backend/js-recap/node-express/app.js
// I want to return the file name and extension to the user
// Example response if I pass getFileInformation("/imagined-idea-backend/js-recap/node-express/app.js")
// {
//  file_name: "app",
//  file_extension: "js"
// }
//hint: use path method and also use slice (to remove letters)

function getFileInformation(filePath) {
  const info = path.parse(filePath);

  const fileName = info.name;
  const extension = info.ext.slice(1);

  return JSON.stringify({
    file_name: fileName,
    file_extension: extension
  })
}

// function getFileInformation(filePath) {
//   const pathInfo = path.parse(filePath);

//   console.log(pathInfo);

//   const file_name = pathInfo.name;
//   const file_extension = pathInfo.ext.slice(1);

//   return JSON.stringify({
//     file_name: file_name,
//     file_extension: file_extension,
//   });
// }

// console.log(
//   getFileInformation("/imagined-idea-backend/js-recap/node-express/taiwo.pdf")
// );

