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

app.get("/api/1", (req, res) => {
  console.log("api 1");
  res.send("api 1");
});

app.get("api/2", (req, res) => {
  console.log("api 2");
  res.send("api 2");
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
