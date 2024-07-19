import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },

})

adminSchema.plugin(passportLocalMongoose);
const Admin = mongoose.model("admin",adminSchema);
export default Admin;