const express = require('express');
const people = require('./routes/people');
const auth = require('./routes/auth');
const app = express();

// middleware
// static
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({extended: false}))
// parse json
app.use(express.json());

// routers
// route people
app.use("/api/v1/people", people)
// Post
app.use("/login", auth);


app.listen(5000, () =>{
    console.log("server is listening on port 5000...");
});