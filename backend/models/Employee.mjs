import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeName:{
        type:String,
        required:true
    },
    position:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNumber:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    aadhar:{
        type:Number,
        required:true,
    },
    panNumber:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true
    },
    joining:{
        type:Date,
        required:true,
    }
});

const Employee = mongoose.model('employee',employeeSchema);
export default Employee;