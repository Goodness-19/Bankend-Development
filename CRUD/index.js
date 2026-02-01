import express from "express";
import logger from "./logger.js";

const app = express();

app.use(logger());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
