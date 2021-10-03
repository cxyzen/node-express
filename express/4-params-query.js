const express = require('express');
const { products, people } = require("./data.js")
const app = express();

app.get("/api/v1/products", (req, res) => {
    res.status(200).json(products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    }));
});

// route params
app.get("/api/v1/products/:productId", (req, res) => {
    const { productId } = req.params;
    const newProduct = products.find((product) => product.id == Number(productId));
    if (!newProduct){
        return res.status(400).send("Product not found");
    }
    return res.status(200).json(newProduct);
});


// query
app.get("/api/v1/query", (req, res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1){
        return res.status(200).json({message: "Not producte match your search"});
    }
    return res.status(200).json(sortedProducts);
});

app.get("/", (req, res) => {
    return res.status(200).send("<h1> Home page </h1><a href = '/api/products'>Product</a>")
});

app.listen(5000, () =>{
    console.log("server is listening on port 5000...");
});