// Set express as Node.js web application
// server framework.
// To install express before using it as
// an application server by using
// "npm install express" command.
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const root = path.dirname(__dirname);
console.log(root);

const publicPath = path.join(root, "public");
const user = {
  name: "Subrat Kumar Behera",
  email: "codexpsubrat@gmail.com",
  age: 32,
  city: "Cuttack",
  state: "Odisha",
  country: "India",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Node JS",
    "Express JS",
    "React JS",
    "MongoDB",
    "MySQL",
  ],
  phoneNumber: "+91-82691900277"
};
// Set EJS as template engine
app.set("view engine", "ejs");

app.get("/", (req, res) => res.sendFile(publicPath + "/index.html"));
app.get("/profile", (req, res) => res.render("profile", { user }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
