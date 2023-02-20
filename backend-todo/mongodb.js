const mongoose=require('mongoose');

mongoose.set('strictQuery', false);
const connectDb=()=>mongoose.connect("mongodb+srv://beginner:beginner@cluster0.wvykber.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   
}).then(()=>{
    console.log("Db connected");
}).catch(console.error);


module.exports=connectDb;