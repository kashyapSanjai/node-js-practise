const express = require('express');
const app = express();

const reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("Age is required");
    }else if (req.query.age < 18) {
        resp.send("Age should be greater than 18");
    } else {
        next();
    }
}

app.use(reqFilter);

app.get("/",(req,resp)=>{
    resp.send("welcome to home page")
})

app.get("/profile",(require,resp)=>{
    resp.send("welcome to profile page")
})

app.listen(5000);