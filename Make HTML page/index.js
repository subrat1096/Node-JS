const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const publicPath = path.join(__dirname, "public");
console.log(publicPath);
app.use(express.static(publicPath));
// app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
