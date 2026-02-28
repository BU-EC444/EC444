// demo_url_modern.js
const { URL } = require("url");

const myURL = new URL("https://example.org:8080/p/a/t/h?query=string#hash");

console.log("hostname:", myURL.hostname);
console.log("pathname:", myURL.pathname);
console.log("query param 'query':", myURL.searchParams.get("query"));
console.log("full href:", myURL.href);
