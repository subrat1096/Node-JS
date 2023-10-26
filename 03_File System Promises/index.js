const fsPromises = require("fs").promises;
const path = require("path");

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "starter.txt"),
      "utf-8"
    );
    console.log(data);
    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(
      path.join(__dirname, "files", "tester.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "tester.txt"),
      "\n\n Thank you for reading"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "tester.txt"),
      path.join(__dirname, "files", "newtext.txt")
    );
    const newdata = await fsPromises.readFile(
      path.join(__dirname, "files", "newtext.txt"),
      "utf-8"
    );
    console.log(newdata);
  } catch (error) {
    console.log(error);
  }
};

fileOps();
