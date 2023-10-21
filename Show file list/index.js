const fs = require("fs");
const path = require("path");

fs.writeFileSync("hello.txt", "This is a Hello Text from hello.txt file");

const dirPath = path.join(__dirname, "files");
console.log("dirPath: ", dirPath);

for (let i = 0; i < 5; i++) {
  let filename = `file${i}.txt`;
  fs.writeFileSync(
    `${dirPath}/${filename}`,
    `a simple text file from ${filename}`
  );
}

fs.readdir(dirPath, (err, files) => {
  //   console.log(files);
  files.forEach((element) => {
    console.log("file name: ", element);
  });
});

let x = 5;
x = x + "3";
console.log(x);
