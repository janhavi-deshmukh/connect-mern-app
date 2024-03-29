const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const helmet=require("helmet");
const morgan=require("morgan");
const userRoute=require("./routes/users");
const authRoute=require("./routes/auth");
const postsRoute=require("./routes/posts");

dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Connected to the database");
}).catch((err)=>console.log("no connection"));


app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postsRoute);

app.get("/",(req,res)=>{
    res.send("WELCOME!");
})

app.listen(process.env.PORT,()=>{
    console.log("Server is running.");
})