// demo_fileserver.js
const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "." + q.pathname; // e.g. "/summer.html" -> "./summer.html"

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(8080, () => console.log("http://localhost:8080"));
