const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.once("connection", () => {
  console.log("First connection established");
});

emitter.emit("connection");
emitter.emit("connection"); // won't run again
