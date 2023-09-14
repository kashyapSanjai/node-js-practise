const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require("../mongodb-conn");
const app = express();
app.use(express.json());

http://localhost:5000/
app.get("/",async (req,resp)=>{
    let db = await dbConnect();   
    let data = await db.find({}).toArray();
    console.log("sdfdsf",data);
    resp.send(data);
})

http://localhost:5000/
app.post("/",async (req,resp)=>{
    let db = await dbConnect();
    let result = await db.insertOne(req.body)
    resp.send(result);
})

//http://localhost:5000/
app.put("/",async (req,resp)=>{
    let db = await dbConnect();
    let result = await db.updateOne({name:"s21 fe"},{$set:req.body});
    console.log(req.body);
    resp.send(result)
})

//http://localhost:5000/?name=s21 fe
app.put("/:name",async (req,resp)=>{
    let db = await dbConnect();
    let result = await db.updateOne({name:req.params.name},{$set:req.body});
    console.log(req.body);
    resp.send(result)
})

app.delete("/:id", async (req,resp)=>{
    console.log(req.params.id);
    const db = await dbConnect();
    const result = await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    resp.send(result);
})


app.listen(5000);