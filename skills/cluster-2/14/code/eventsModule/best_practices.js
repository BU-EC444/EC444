const EventEmitter = require("events");
const myEmitter = new EventEmitter();

myEmitter.on("error", (err) => {
  console.error("Error in event emitter:", err.message);
});

function handleData(data) {
  console.log("Received data:", data);
}

myEmitter.on("data", handleData);
myEmitter.emit("data", { hello: "world" });

// cleanup
myEmitter.off("data", handleData);
myEmitter.emit("data", { shouldNot: "print" });
