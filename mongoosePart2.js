// Through This We Create Schema For MongoDB
const mongoose = require('mongoose');
const main =async ()=>{
    mongoose.connect('mongodb://localhost:27017/project');
    const productSchema = new mongoose.Schema({
        name: String
        // price: Number,
        // brand: String,
        // category: String
     });
     const Product = mongoose.model('customerdata',productSchema);
     let data = new Product({
      name:"Rajat Pawar"
        });
     const result = await data.save(); 
     console.log(result);
}
main(); 