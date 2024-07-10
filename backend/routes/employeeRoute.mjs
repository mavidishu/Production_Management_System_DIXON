import express from "express" ;
import Employee from "../models/Employee.mjs";
const router = express.Router();
import {bucket}  from "../../firebaseConfig.mjs";
import multer  from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
  });

// Fetch All Employees
router.get("/",async(req,res)=>{
    try{
        const employees = await Employee.find();
        res.json(employees);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// Add New Employee
router.post("/",upload.single('photo'),async(req,res)=>{
    try{
        console.log(req.body);
        console.log(req.file);
        const blob = bucket.file(req.file.originalname);
      const blobStream = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype
        }
      });
    
      blobStream.on('error', (err) => {
        res.status(500).send(err);
      });
    
      blobStream.on('finish', () => {
        blob.makePublic().then(async() => {
            let newEmployee = new Employee({
                employeeName: req.body.employeeName,
                position: req.body.position,
                email : req.body.email,
                mobileNumber: req.body.mobileNumber,
                dob: new Date(req.body.dob),
                aadhar:req.body.aadhar,
                panNumber:req.body.panNumber,
                joining:req.body.joining,
                photo:blob.publicUrl(),
            })
            await newEmployee.save();
        });
      });
      blobStream.end(req.file.buffer);
      res.redirect("http://localhost:5173/employees");
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

router.get("/:id",async(req,res)=>{
    let id = req.params.id;
    let employee = await Employee.findById(id);
    res.json(employee);
})

export default router;