const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const publicPath = path.join(__dirname, "public");
console.log(publicPath);
app.get("/", (req, res) => res.sendFile(publicPath + "/index.html"));
app.get("/about", (req, res) => res.sendFile(publicPath + "/about.html"));
app.get("*", (req, res) => res.sendFile(publicPath + "/nopage.html"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
