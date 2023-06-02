//import express module
let express = require("express");
//create express object
let app = express();

//GET ,POST
app.get("/", (req, res) => { 
    res.status(200).json({ "message": "default get request...!" });
});

app.get("/demo", (req, res) => { 
    res.status(200).json({"message":"data from mongo db soon"});
});

app.post("/", (req,res) => {
res.status(200).json({ "message": "default post request...!" });
});
 
app.post("/demo", (req,res) => { 
res.status(200).json({"message":"data from cassandra db sonn"})
});

app.listen(8081, () => { 
    console.log("Server started");
});
//yarn add express --save
//http://localhost:8081
//http:localhost:8081/demo