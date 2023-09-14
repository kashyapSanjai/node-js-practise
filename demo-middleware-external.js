const express = require('express');
const reqFilter = require('./middleware/middleware');
const app = express();

app.get("/",(req,resp)=>{
    resp.send("welcome to home page")
})

app.get("/profile",reqFilter,(require,resp)=>{
    resp.send("welcome to profile page")
})

app.listen(5000);