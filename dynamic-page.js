const express = require('express');
const app = express();


app.set("view engine",'ejs');


app.get("/profile",(_,resp)=>{
    const userData = {
        name:"sanjay",
        email:"sanjay@gmail.com",
        country:"india",
        skills:["html","css","javascript"]
    }
    resp.render("profile",{userData});
})



app.get("/login",(_,resp)=>{
    resp.render("login");
})

app.listen(5000);