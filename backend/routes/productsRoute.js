const express = require("express");
const Products = require("../models/Products.js");
const router = express.Router();

// Fetch All Products
router.get("/items",async(req,res)=>{
    try{
        const products = await Products.find();
        res.json(products);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// Fetch Particular Product:
router.get('/items/:id', async(req,res)=>{
    try{
        let id = req.params.id;
        const product = await Products.findById(id);
        res.json(product);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;