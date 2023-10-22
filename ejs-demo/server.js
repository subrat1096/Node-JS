const express = require("express");
const app = express();
const port = 3000;

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  var mascots = [
    { name: "Subrat", organization: "CodeXP", birth_year: 1991 },
    { name: "Piyush", organization: "Cardinal Health", birth_year: 1991 },
    { name: "Rajesh", organization: "Infosys", birth_year: 1991 },
  ];
  var tagline =
    "No programming concept is complete without a cute animal mascot.";

  res.render("pages/index", {
    mascots: mascots,
    tagline: tagline,
  });
  //   res.render("pages/index");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
