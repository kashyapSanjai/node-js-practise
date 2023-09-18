const express = require("express");
const EventEmitter = require("events");
const event = new EventEmitter();
const app = express();

let count = 0;

event.on("countAPI",()=>{
    count++;
    console.log("event called",count);
})

app.get("/",(req,resp)=>{
    resp.send("home api called");
    event.emit("countAPI")
})

app.get("/",(req,resp)=>{
    resp.send("home api called");
    event.emit("countAPI")
})

app.get("/search",(req,resp)=>{
    resp.send("search api called");
    event.emit("countAPI")
})

app.get("/update",(req,resp)=>{
    resp.send("search api called");
    event.emit("countAPI")
})

app.listen(5000);