const express=require("express");
const cors=require("cors");
const todoRoute=require('./routers/todoRoute')


const connectDb=require("./mongodb");
const app=express();

app.use(express.json());

app.use(cors());


connectDb();

app.use("/api",todoRoute);

 app.listen(5000,()=>{
     console.log("server running");

 })