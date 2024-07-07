import express from "express" ;
import User from "../models/User.mjs";
const router = express.Router();

// Fetch All User
router.get("/user",async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

export default router;