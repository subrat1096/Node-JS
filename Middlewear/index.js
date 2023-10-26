const express = require("express");
const app = express();
const port = 3000;

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("please provide age");
  } else if (req.query.age < 18) {
    res.send("You cannot access this page");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => res.send("<h1>Welcome To Code XP</h1>"));

app.get("/users", (req, res) => res.send("User Profile"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
