const http = require("http");
const data = require("./data");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "aaplicationjson" });
    res.write(JSON.stringify(data));
    res.end();
  })
  .listen(8080);
