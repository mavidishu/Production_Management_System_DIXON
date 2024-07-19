import express from "express" ;
import connectToDb from "./db.mjs" ;
import employeeRoute from "./routes/employeeRoute.mjs";
import productRoutes from "./routes/productsRoute.mjs";
import transactionRoutes from "./routes/transactionRoute.mjs";
import Admin from "./models/Admin.mjs";
import methodOverride from "method-override";
import passport from "passport";
import LocalStrategy from "passport-local";
import session from "express-session";
import flash from "connect-flash";
import cors from "cors";

connectToDb();
const app = express();

const PORT  = 5000;


app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'dixoninfocom',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } //
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Admin.authenticate()));

passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());


app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'auth-token'],
}));

app.get("/",(req,res)=>{
  res.send("Welcome to Admin Dashboard Backend");
})

app.use("/employees",employeeRoute);
app.use("/products",productRoutes);
app.use("/transactions",transactionRoutes);

// app.get("/testAdmin",async(req,res)=>{
//   let fakeAdmin = new Admin({
//     email:"testmail@dixoninfo.com",
//     username:"testUser1",
//   });

//   let registeredAdmin = await Admin.register(fakeAdmin,"password");
//   res.send(registeredAdmin);
// });

app.post("/login",passport.authenticate("local",{failureRedirect:"http://localhost:5173/",failureFlash:true}),async(req,res)=>{
  console.log(req.user);
  res.redirect("http://localhost:5173/products");
})

app.post('/signup',async(req,res)=>{
  try{
    let {username,email,password} = req.body;
    const newAdmin = new Admin({email,username});
    let registeredData = await Admin.register(newAdmin,password);
    console.log(registeredData);
    req.flash("success",`Welcome ${username} to our production management system.`)
    res.redirect("http://localhost:5173/products");
  }catch(err){
    res.flash("error",err.message);
    res.redirect("http://localhost:5173/signup");
  }
})

app.get("/profile",async(req,res)=>{
  try{
    if(req.isAuthenticated()){
      console.log(req.user);
      res.json(req.user);
    }else{
      console.log('User not authenticated');
      res.status(401).json({ message: "Unauthorized" });
    }
  }catch(err){
    console.log(err);
  }
});

app.get("/logout",async(req,res)=>{
  if(req.isAuthenticated()){
    req.logOut((err)=>{
      if(err){
        console.log(err);
        return next(err);
      }
      req.flash("success","Logged out successfully. Good Byee");
      res.redirect("http://localhost:5173/");
    })
  }else{
    req.flash("error","User must be logged-in first to logout")
    res.redirect("http://localhost:5173/");
  }
});

// Listening to Server
app.listen(PORT,()=>{
    console.log(`Admin dashboard server listening at port ${PORT}`);
})