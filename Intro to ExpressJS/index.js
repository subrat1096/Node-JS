const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.send("hello world");
});

// respond with "This is about page" when a GET request is made to the aboutpage
app.get("/about", (req, res) => {
  res.send("This is about page");
});

// start server on port 3000
app.listen(3000);
