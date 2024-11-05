const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

app.get("/test", (req, res) => {
  console.log("test");
  res.send("test!!");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
