const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    auditDate:{
        type:Date,
        required:true
    },
    targetDate:{
        type:Date,
        required:true
    },
    production:{
        type:Number,
        required:true
    },
    productDetails:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    workInstruction:{//link
        type:String,
    },
    budget:{
        type:Number,
        required:true
    },
    status:{
        type:String
    }
});


const Product = mongoose.model('product',productSchema);
module.exports = Product;