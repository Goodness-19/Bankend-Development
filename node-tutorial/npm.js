// Process in NodeJS gives Information about the running NodeJs APP

// NPM  - Node Package Manager
// Node JS - Mobile Phone 
// npm - App Store/ PlayStore

// If users need it -> dependency
// If developers need it -> devDependency

require("dotenv").config();
const port = process.env.PORT;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
console.log(process.env);