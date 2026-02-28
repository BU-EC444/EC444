const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("error", (err) => {
  console.error("An error occurred:", err.message);
});

emitter.emit("error", new Error("Something went wrong"));
