const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shubham');
const posts= mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});

module.exports =mongoose.model("posts",posts);