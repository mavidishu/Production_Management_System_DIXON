import express from "express" ;
import Employee from "../models/Employee.mjs";
const router = express.Router();
import {bucket}  from "../../firebaseConfig.mjs";
import { ref } from "firebase/storage";
import multer  from 'multer';

const upload = multer({
    storage: multer.memoryStorage(),
  });

  // Method to extract file path from reference link
  const extractPathFromUrl = (url) => {
    const matches = url.match(/https:\/\/storage.googleapis.com\/[^\/]+\/(.+)/);
    if (!matches) {
      throw new Error('Invalid URL format');
    }
    return decodeURIComponent(matches[1]);
  };

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

router.put("/:id",upload.single('photo'),async(req,res)=>{
  let id = req.params.id;

  // Finding Image URL to delete the previous image first
  let response = await Employee.findById(id);
  if(req.file){
    const filePath = extractPathFromUrl(response.photo);
  
    try{
      await bucket.file(filePath).delete();
      console.log("Previous file deleted successfully !!");
    }catch(err){
      console.log(err);
    }
  }

  const blob = bucket.file(req.file.originalname);
        const blobStream = blob.createWriteStream({
        metadata: {
          contentType: req.file.mimetype
        }
      });
    
      blobStream.on('error', (err) => {
        return res.status(500).send(err);
      });
    
      blobStream.on('finish', () => {
        blob.makePublic().then(async() => {
            let newEmployee = {
                employeeName: req.body.employeeName,
                position: req.body.position,
                email : req.body.email,
                mobileNumber: req.body.mobileNumber,
                dob: response.dob,
                aadhar:req.body.aadhar,
                panNumber:req.body.panNumber,
                joining:response.joining,
            };
            if(req.file){
              newEmployee.photo = blob.publicUrl();
            }else{
              newEmployee.photo = response.photo;
            }
            await Employee.findByIdAndUpdate(id,newEmployee);
        });
      });
      blobStream.end(req.file.buffer);
      console.log("Data Updated Successfully !!");
      res.redirect(`http://localhost:5173/employees/${id}`);
});

export default router;