const mongoose = require('mongoose');
const main =async ()=>{
    mongoose.connect('mongodb://localhost:27017/project');
    const postsSchema = new mongoose.Schema({
        email:String,
        password:String
     });
     var n="shubhamjoshi0307@gmail.com";
     var psn="12345";
     const posts = mongoose.model('customerdata',postsSchema);
     let data = new posts({ email : n,password:psn});
     const result = await  data.save(); 
     console.log(result);
}
main(); 
