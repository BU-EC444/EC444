const http = require("http");

let todos = [{ id: 1, task: "Learn Node http", completed: false }];

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", () => {
      try { resolve(body ? JSON.parse(body) : {}); }
      catch (e) { reject(e); }
    });
  });
}

http.createServer(async (req, res) => {
  const parsed = new URL(req.url, `http://${req.headers.host}`);
  const { method } = req;
  const pathname = parsed.pathname;

  // tiny CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (method === "OPTIONS") return res.writeHead(204).end();

  if (method === "GET" && pathname === "/todos") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(todos));
  }

  if (method === "POST" && pathname === "/todos") {
    try {
      const todo = await readJson(req);
      todo.id = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1;
      todos.push(todo);
      res.writeHead(201, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(todo));
    } catch {
      res.writeHead(400, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ error: "Invalid JSON" }));
    }
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not found");
}).listen(3000, () => console.log("http://localhost:3000"));
