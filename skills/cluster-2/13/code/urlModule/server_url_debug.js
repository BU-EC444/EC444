// server_url_debug.js
const http = require("http");
const { URL } = require("url");

http
  .createServer((req, res) => {
    const parsed = new URL(req.url, `http://${req.headers.host}`);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify(
        {
          method: req.method,
          href: parsed.href,
          pathname: parsed.pathname,
          search: parsed.search,
          query: Object.fromEntries(parsed.searchParams),
        },
        null,
        2
      )
    );
  })
  .listen(3000, () => console.log("http://localhost:3000"));
