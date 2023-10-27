const http = require("http");
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs").promises;

const EventEmitter = require("events");
const logEvents = require("./logEvents");

class Emitter extends EventEmitter {}
// Initializing object
const myEmitter = new Emitter();
// add listener for the log event
myEmitter.on("log", (msg, fileName) => logEvents(msg, fileName));

// setTimeout(() => {
//   myEmitter.emit("log", "log event emitted!");
// }, 2000);

// Initializing port
const PORT = process.env.PORT || 3500;

const serveFile = async (filePath, contentType, response) => {
  try {
    const rawData = await fsPromises.readFile(
      filePath,
      !contentType.includes("image") ? "utf-8" : ""
    );
    const data =
      contentType === "application/json" ? JSON.parse(rawData) : rawData;
    response.writeHead(filePath.includes("404.html") ? 404 : 200, {
      "Content-Type": contentType,
    });
    response.end(
      contentType === "application/json" ? JSON.stringify(data) : data
    );
  } catch (error) {
    console.log(error);
    myEmitter.emit("log", `${error.name}\t${error.message}`, "errorLog.txt");
    response.statusCode = 500;
    response.end();
  }
};

const server = http.createServer((req, res) => {
  // Logging request to console
  console.log(req.url, req.method);
  myEmitter.emit("log", `${req.method}\t${req.url}`, "reqLog.txt");
  // if (req.url === "/" || req.url === "index.html") {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  //   filePath = path.join(__dirname, "views", "index.html");
  //   fs.readFile(filePath, "utf-8", (err, data) => {
  //     if (err) throw err;
  //     res.end(data);
  //   });
  // }

  // switch (req.url) {
  //   case "/":
  //     res.statusCode = 200;
  //     res.setHeader("content-type", "text/html");
  //     filePath = path.join(__dirname, "views", "index.html");
  //     fs.readFile(filePath, "utf-8", (err, data) => {
  //       if (err) throw err;
  //       res.end(data);
  //     });
  //     break;
  // }

  const extension = path.extname(req.url);
  console.log(extension);

  let contentType;
  switch (extension) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "application/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".jpg":
      contentType = "image/jpeg";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".txt":
      contentType = "text/plain";
      break;
    default:
      contentType = "text/html";
  }

  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);

  if (!extension && req.url.slice(-1) !== "/") filePath += ".html";

  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    serveFile(filePath, contentType, res);
  } else {
    switch (path.parse(filePath).base) {
      // redirect
      case "old-page.html":
        res.writeHead(301, { location: "/new-page.html" });
        res.end();
        break;
      case "www-page.html":
        res.writeHead(301, { location: "/" });
        res.end();
        break;
      default:
        //serve a 404 response
        serveFile(path.join(__dirname, "views", "404.html"), "text/html", res);
    }
  }
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
