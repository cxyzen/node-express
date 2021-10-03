const express = require('express');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');
const { products, people } = require("./data.js")
const app = express();

// req => middleware => res middleware is similiar to decorator in Python

// // own
// app.use(logger); //apply to all
// app.use([logger, authorize]) //multiple middle
// // express middleware
// app.use(express.static("./public"));
// // third parties
// app.use(morgan())

app.get("/", (req, res) => {
    res.send(`Home`);
});

app.get("/about", (req, res) => {
    res.send("About");
});

//app.use("/products", logger); // order matters, anything function before this line wont execute the middleware

app.get("/api/products", (req, res) => {
    res.send("Products");
});

// app.get("/api/items", [logger, authorize], (req, res) => {
//     res.send("Items");
// });

app.get("/api/items", [logger, authorize], (req, res) => {
    res.send("Items");
});

app.listen(5000, () =>{
    console.log("server is listening on port 5000...");
});