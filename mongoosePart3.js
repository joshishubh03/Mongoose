// Through This We Create Schema For MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Homebuilder');
const productSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String
 });
const saveInDB =async ()=>{
    // mongoose.connect('mongodb://localhost:27017/Homebuilder');
      const Product = mongoose.model('customerSignUp',productSchema);
     let data = new Product({
      Name:"Rajat Pawar",
      email:"rajatpawar@gmail.com",
      password:"12345"
        });
     const result = await  data.save(); 
     console.log(result);
}
// saveInDB();
const updateInDB =async ()=>{
    const posts = mongoose.model('posts',productSchema)  ;
    let data =await posts.updateOne(
        { name:"Shubham Joshi"},
            {
              $set:{name:"pawan sahu",price:101}  
            }
            )
            console.log(data);
}
// updateInDB();

const deleteInDB = async ()=>{
    const posts = mongoose.model('posts',productSchema);
    let data = await posts.deleteOne(
        {
            name:'Pankaj'
        }
    )
    console.log(data);
}
// deleteInDB();

const findInDB = async()=>{
    const posts=mongoose.model('customerSignUp',productSchema);
    let data1 =await posts.find();
    console.log(data1);
}
findInDB();
