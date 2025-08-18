import express  from "express" ;
import mongoose from "mongoose";
import multer  from 'multer';
import path from "path";
import Products  from "../models/Products.mjs";
import {bucket}  from "../../firebaseConfig.mjs";
const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('Only PDF files are allowed'), false);
      }
    }
  });

// Fetch All Products: using GET
router.get("/items",async(req,res)=>{
    try{
        const products = await Products.find();
        res.json(products);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

// Fetch Particular Product: using GET
router.get('/items/:id', async(req,res)=>{
    try{
        let id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
          console.log(`Request failed to get product /items/${id} Invalid product ID:`, id);
            return res.status(400).json({ message: "Invalid product ID" });
        }
        const product = await Products.findById(id);if (!product) {
            console.log(`Request failed to get product /items/${id} Product not found`);
            return res.status(404).json({ message: "Product not found" });
        }
        res.json(product);
    }catch(err){
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
})

// Create New Product: using POST
router.post("/",upload.single('wiUrl'),async(req,res)=>{
    if (!req.file) {
        res.status(400).send('No file uploaded or invalid file type.');
        return;
      }
    
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
            let pdfUrl = blob.publicUrl();
            let product = new Products({
                productName: req.body.productName,
                auditDate: new Date(req.body.auditDate),
                targetDate : new Date(req.body.targetDate),
                production: req.body.production,
                productDetails:req.body.productDetails,
                productPrice:req.body.productPrice,
                workInstruction:blob.publicUrl(),
                budget:req.body.budget,
                status:false,
            })
            await product.save();
        });
      });
      blobStream.end(req.file.buffer);
      res.redirect("http://localhost:5173/products");
});

// Update Status
router.get("/item/status/:id",async(req,res)=>{
  let id = req.params.id;
  console.log(id);
  let product = await Products.findById(id);
  product.status = "true";
  await Products.findByIdAndUpdate(id,product);
  console.log("Successfully Updated");
  res.json(product);
});

router.put("/:id",async(req,res)=>{
  console.log("Got the request");
  let newObject = req.body;
  await Products.findByIdAndUpdate(req.params.id,newObject);
  console.log("Data updates successfully");
  res.redirect(`http://localhost:5173/product/view/${req.params.id}`);
});
export default router;