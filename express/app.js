const express = require('express');
let {people} = require("./data");
const app = express();

// middleware
// static
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json());

app.get("/api/v1/people", (req, res) => {
    return res.status(200).json({success: true, data: people});
});

app.post("/api/v1/people", (req, res) => {
    const {name} = req.body;
    if (name) {
        return res.status(200).json({success: true, person:name});
    }
    res.status(401).json({success: false, msg: "Please provide your credentials"});
});


// Post
app.post("/login", (req, res) => {
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send("Please provide your credential");
});

app.listen(5000, () =>{
    console.log("server is listening on port 5000...");
});