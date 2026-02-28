const events = require("events");
const eventEmitter = new events.EventEmitter();

function myEventHandler() {
  console.log("I hear a scream!");
}

eventEmitter.on("scream", myEventHandler);
eventEmitter.emit("scream");
