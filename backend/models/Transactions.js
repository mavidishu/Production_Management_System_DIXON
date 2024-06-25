const mongoose = require("mongoose");
const Product = require("./Products");

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productCategory:{
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


const transactionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    noOfProducts:{
        type:Number,
        required:true
    },
    productList:[productSchema],
    cost:{
        type:Number,
        required:true
    }
});

const Transactions = mongoose.model('transaction',transactionSchema);
module.exports = Transactions;