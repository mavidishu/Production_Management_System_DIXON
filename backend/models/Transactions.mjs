import mongoose from "mongoose";

// const productSchema = new mongoose.Schema({
//     productName:{
//         type:String,
//         required:true
//     },
//     productCategory:{
//         type:String,
//         required:true
//     },
//     price:{
//         type:Number,
//         required:true
//     },
//     warrantyStatus:{
//         type:String
//     },
//     payOnDelivery:{
//         type:Boolean,
//     },
//     registeredDate:{
//         type:Date,
//         default:Date.now
//     }
// });


const transactionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    status:{
        type:String,
        required:true,
    },
    productList:[//one to many relationship one transaction may include multiple products
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
        }
    ],
    cost:{
        type:Number,
        required:true,
    }
});

const Transactions = mongoose.model('transaction',transactionSchema);
export default Transactions;