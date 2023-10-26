const logEvents = require("./logEvents");

const EventsEmitter = require("events");

class MyEmitter extends EventsEmitter {}

// initialize object
const myEmitter = new MyEmitter();

// add listener for log events
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // emit event
  myEmitter.emit("log", "log event emitted");
}, 2000);
