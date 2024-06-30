const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productCategory:{
        type:String,
        required:true
    },
    productDetails:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    warrantyStatus:{
        type:String
    },
    payOnDelivery:{
        type:Boolean,
    },
    registeredDate:{
        type:Date,
        default:Date.now
    }
});


const Product = mongoose.model('product',productSchema);
module.exports = Product;