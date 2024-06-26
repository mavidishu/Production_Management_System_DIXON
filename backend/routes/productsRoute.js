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

// Fetch CategoryWise
router.get('/count', async (req, res) => {
    try {
      const categoryCounts = await Products.aggregate([
        {
          $group: {
            _id: "$productCategory",
            count: { $sum: 1 }
          }
        }
      ]);
      let result = [];
      let category = [];
      let count1=0,count2=0;
      for(let field of categoryCounts){
        result[count1++] = field.count;
        category[count2++] = field._id;
      }
      res.json({result,category});
    } catch (err) {
      res.status(500).send(err);
    }
  });

module.exports = router;