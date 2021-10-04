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


// Get
app.get("/api/v1/people", (req, res) => {
    return res.status(200).json({success: true, data: people});
});

// Post
app.post("/api/v1/people", (req, res) => {
    const {name} = req.body;
    if (name) {
        return res.status(200).json({success: true, person:name});
    }
    res.status(401).json({success: false, msg: "Please provide your credentials"});
});

// Postman
app.post("/api/v1/postman/people", (req, res) => {
    const {name} = req.body;
    if (!name){
        return res.status(401).json({success: false, msg: "Please provide your credentials"});
    } else {
        return res.status(200).json({success: true, data: [...people, name]})
    }
});

// Put
app.put("/api/v1/people/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person) => person.id == Number(id));
    if (!person){
        return res.status(401).json({success: false, msg: `no person with id ${id}`});
    } else {
        const newPeople = people.map((person) => {
            if (person.id == Number(id)){
                person.name = name
            }
            return person
        });
        return res.status(200).json({sucess: true, data: newPeople});
    }
});

// Delete
app.delete("/api/v1/people/:id", (req, res) => {
    const {id} = req.params;
    const person = people.find((person) => person.id == Number(id));
    if (!person){
        return res.status(401).json({success: false, msg: `no person with id ${id}`});
    } else {
        const newPeople = people.filter((person) => person.id != Number(id));
        return res.status(200).json({sucess: true, data: newPeople});
    }
});

// Post login
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