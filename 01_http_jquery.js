//import http module
let http = require("http");
//import url module
let url = require("url");
//create http server
let server = http.createServer((req, res) => {
    //set the MIME type
    //communication language between client and server called as MIME
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //parse the request
    let obj = url.parse(req.url, true).query;
    if (obj.uname = "manoj" && obj.password=="kumar")
    {
    res.write("<h1>Login successful</h1>");
    }
    else
    {
        res.write("<h2>Login Fail</h2>");
        }
    
    res.end();
});
 server.listen(8081);
console.log("listening port: 8081");
//http://localhost:8081/?uname=manoj&password=kumar