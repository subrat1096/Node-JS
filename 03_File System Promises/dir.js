const fs = require("fs");

if (!fs.existsSync("./New folder")) {
  fs.mkdir("./New folder", (err) => {
    if (err) throw err;
    console.log("New Directory created");
  });
}

if (fs.existsSync("./New folder")) {
  fs.rmdir("./New folder", (err) => {
    if (err) throw err;
    console.log("This Directory deleted");
  });
}
