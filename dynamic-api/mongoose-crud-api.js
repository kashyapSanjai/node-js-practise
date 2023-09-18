const express = require("express");
const multer = require('multer');
require("./config");
const Product = require("./product");

const app = express();
app.use(express.json());

//http://localhost:5000/create
app.post("/create",async (req,resp)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(result);
    resp.send(result);
})

//http://localhost:5000/list
app.get("/list", async (req,resp)=>{
    let data = await Product.find();
    console.log(data);
    resp.send(data); 
})

//http://localhost:5000/delete/650160f01828b884e3ad10f2
app.delete("/delete/:_id",async (req,resp)=>{
    let data = await Product.deleteOne(req.params)
    console.log(req.params);
    resp.send(data);   
})

//http://localhost:5000/update/650160f01828b884e3ad10f2
app.put("/update/:_id",async (req,resp)=>{
    let data = await Product.updateOne(
        req.params,
        {
            $set:req.body
        }
    );
    console.log(req.body);
    resp.send(data);
})

//http://localhost:5000/search/samsung
app.get("/search/:key",async (req,resp)=>{
    let data = await Product.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}},
        ]
    })
    console.log(req.params);
    resp.send(data);
})

const upload = multer({
    storage: multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads/");//"uploads" is destination folder name
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpeg");
        }
    })//"user_file" is param in which file is send
}).single("user_file")

http://localhost:5000/upload  & param type file
app.post("/upload",upload,(req,resp)=>{
    console.log(req.body);
    resp.send("resp code working");
})


app.listen(5000);
