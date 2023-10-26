// common JS node module import

const fs = require("fs");
const path = require("path");

// ES module import using "type: module" in package.json

// import * as fs from "node:fs";
// import path from "node:path";

fs.readFile("./files/starter.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Hello World");

fs.writeFile(
  path.join(__dirname, "files", "newText.txt"),
  `A Fool and His Money are Soon Parted
Meaning: It's easy for a fool to lose his/her money.`,
  (err) => {
    if (err) throw err;
    console.log("Data has been written");

    // here append file modifies the existing file
    fs.appendFile(
      path.join(__dirname, "files", "newText.txt"),
      `\n\nKnock Your Socks Off
    Meaning: To be taken by surprise.`,
      (err) => {
        if (err) throw err;
        console.log("Append modified");

        // renaming the file
        fs.rename(
          path.join(__dirname, "files", "newText.txt"),
          path.join(__dirname, "files", "renamedText.txt"),
          (err) => {
            if (err) throw err;
            console.log("Rename complete");
          }
        );
      }
    );
  }
);

// Append file creates a new file if it doesn't exist
fs.appendFile(
  path.join(__dirname, "files", "test.txt"),
  `\nIt's Not All It's Cracked Up To Be
Meaning: Failing to meet expectations; not being as good as people say.`,
  (err) => {
    if (err) throw err;
    console.log("Append has been done");
  }
);

fs.readFile(
  path.join(__dirname, "files", "random.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

//uncaught err
process.on("uncaughtException", (err) => {
  console.error(`There wads an uncaught exception: ${err}`);
  process.exit();
});
