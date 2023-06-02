//import http module
let http = require("http");
//create http server
let server = http.createServer((req, res) => {
    res.write("welcome to node MJ");
    res.end();
});
 server.listen(8081);
console.log("listening port: 8081");
