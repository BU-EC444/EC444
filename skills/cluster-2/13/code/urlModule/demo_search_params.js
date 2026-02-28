// demo_search_params.js
const { URL, URLSearchParams } = require("url");

const myURL = new URL("https://example.com/?name=Kai&age=30");
const params = new URLSearchParams(myURL.search);

console.log("name:", params.get("name"));

params.append("city", "Stavanger");
params.delete("age");

console.log("params string:", params.toString());
console.log("final URL:", `${myURL.origin}${myURL.pathname}?${params.toString()}`);
