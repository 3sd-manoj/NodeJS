//npm install express @types/express --save
//import express module
import * as express from "express";
//create object
let app: any = express();
//authorization
let auth = (req: any, res: any, next: any): any => { 
    let allHeaders = req.headers;
    if (allHeaders.token == "MJKUMAR") {
        next();
    }
    else {
        res.status(500).json({auth:"fail"});
    }
};
//get request
//authentication
app.get("/login",[auth] ,(req:any,res:any):any => { 
    if (req.query.uname === "manoj" && req.query.password === "kumar")
    {
        res.status(200).json({login:"success"});
    }
    else {
         res.status(401).json({login:"fail"});
    }
});
app.get("/", (req: any, res: any):any => {
    res.sendFile("C:/Users/TRIDENT MT581/Downloads/Node JS MSD/NodeJS/NodeJS/getparameters/index.html");
 });

app.listen(8081, () => {
    console.log("server started");
});
//conver type script to javascript
//tsc server.ts
//node server.js
//npm install -g typescript
//tsc --version
//http://localhost:8081/login?uname=manoj&password=kumar