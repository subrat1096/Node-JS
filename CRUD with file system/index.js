// CRUD with file system
/*
Create
Read
Update
Rename
Delete
*/

const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "CRUD");
// console.log(dirPath);
const filePath = `${dirPath}/hello.txt`;
// console.log(filePath);
// fs.writeFileSync(filePath, "hello");
// console.log("Created File");
// fs.readFile(filePath, "utf-8", (err, item) => {
//   console.log(item);
// });

// fs.appendFile(filePath, " and file name is hello.txt", (err) => {
//   if (!err) {
//     console.log("file is updated");
//   }
// });

// fs.rename(`${dirPath}/hello.txt`, `${dirPath}/world.txt`, (err) => {
//   if (!err) {
//     console.log("file renamed to world");
//   }
// });

fs.unlinkSync(`${dirPath}/hello.txt`);
