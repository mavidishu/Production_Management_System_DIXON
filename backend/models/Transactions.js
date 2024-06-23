const mongoose = require("mongoose");

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
    cost:{
        type:Number,
        required:true
    }
});

const Transactions = mongoose.model('transaction',transactionSchema);
module.exports = Transactions;