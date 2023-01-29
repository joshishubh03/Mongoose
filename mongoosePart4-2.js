const express = require('express');
require("./mongoosePart4-0.js");
const posts = require("./mongoosePart4-1.js");
const app = express();
app.use(express.json());
  app.post("/create",async (req,resp)=>{
    let data = new posts(req.body);
    // console.log(req.body);
    const result = await data.save();
    resp.send(result);
});
app.listen(1111);