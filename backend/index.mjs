import express from "express" ;
import connectToDb from "./db.mjs" ;
import userRoutes from "./routes/usersRoute.mjs";
import productRoutes from "./routes/productsRoute.mjs";
import transactionRoutes from "./routes/transactionRoute.mjs";
import methodOverride from "method-override";

connectToDb();
const app = express();

const PORT  = 5000;

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req,res,next)=>{
    // cors error resolved:
    res.header('Access-Control-Allow-Origin', '*'); // or 'http://localhost:5000'
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept,auth-token'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    next();
  },express.json());// Middleware to get response body as json value.

app.get("/",(req,res)=>{
    res.send("Welcome to Admin Dashboard Backend");
})

app.use("/listings",userRoutes);
app.use("/products",productRoutes);
app.use("/transactions",transactionRoutes);

// Listening to Server
app.listen(PORT,()=>{
    console.log(`Admin dashboard server listening at port ${PORT}`);
})