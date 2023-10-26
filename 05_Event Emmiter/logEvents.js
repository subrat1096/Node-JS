// using npm modules
const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

// common core modules
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = format(new Date(), "dd/MM/yyyy\tHH:mm:ss");
  const logItem = `\r${dateTime}\t${uuid()}\t${message}`;
  console.log(logItem);
  try {
    if(!fs.existsSync(path.join(__dirname,"logs"))){
        await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventlog.txt"),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvents;
