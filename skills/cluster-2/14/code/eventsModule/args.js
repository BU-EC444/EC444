const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("userJoined", (username, userId) => {
  console.log(`${username} (${userId}) has joined the chat`);
});

emitter.emit("userJoined", "JohnDoe", 42);
