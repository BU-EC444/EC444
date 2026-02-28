// demo_url_parse.js
const url = require("url");

const adr = "http://localhost:8080/default.htm?year=2017&month=february";

// legacy parse (what W3Schools starts with)
const q = url.parse(adr, true);

console.log("host:", q.host);
console.log("pathname:", q.pathname);
console.log("search:", q.search);
console.log("query object:", q.query);
console.log("month:", q.query.month);
