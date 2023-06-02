"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//npm install express @types/express --save
//import express module
var express = require("express");
//create object
var app = express();
//authorization
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token == "MJKUMAR") {
        next();
    }
    else {
        res.status(500).json({ auth: "fail" });
    }
};
//get request
//authentication
app.get("/login", [auth], function (req, res) {
    if (req.query.uname === "manoj" && req.query.password === "kumar") {
        res.status(200).json({ login: "success" });
    }
    else {
        res.status(401).json({ login: "fail" });
    }
});
app.get("/", function (req, res) {
    res.sendFile("C:/Users/TRIDENT MT581/Downloads/Node JS MSD/NodeJS/NodeJS/getparameters/index.html");
});
app.listen(8081, function () {
    console.log("server started");
});
//conver type script to javascript
//tsc server.ts
//node server.js
//npm install -g typescript
//tsc --version
//http://localhost:8081/login?uname=manoj&password=kumar
