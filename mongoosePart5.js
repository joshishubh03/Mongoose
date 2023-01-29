const express = require('express');
require("./mongoosePart4.js");
const posts = require("./mongoosePart4-1.js");
const app = express();
app.use(express.json());
  app.post("/create",async (req,resp)=>{
    let data = new posts(req.body);
    // console.log(req.body);
    const result = await data.save();
    resp.send(result);
});
app.get("/list",async (req,resp)=>{
    let data = await posts.find();
    resp.send(data);
});
app.delete("/delete/:_id",async (req,resp)=>{
    console.log(req.params);
    let data = await posts.deleteOne(req.params);
    resp.send(data);
});

app.put("/update/:_id",async (req,resp)=>{
    console.log(req.params);
    let data =await posts.updateOne(
        req.params,
    {$set:req.body }
        );
    resp.send(data);
});
app.listen(1111);