const express = require("express");

//Create a server.
const server = express();

//Handle for default request
server.get("/", (req, res, next) => {
  console.log("First middleware hit");
  next();
});
server.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});

//Listen to specified port.
server.listen(3200, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is listening on 3200");
});
