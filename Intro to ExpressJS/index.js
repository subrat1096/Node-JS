const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  console.log("data sent from client", req.query);
  console.log("data sent from client", req.query.name);
  res.send(
    "Welcome " +
      req.query.name.charAt(0).toUpperCase() +
      req.query.name.slice(1)
  );
});

// respond with "This is about page" when a GET request is made to the aboutpage
app.get("/about", (req, res) => {
  res.send("This is about page");
});

// start server on port 3000
app.listen(3000);
