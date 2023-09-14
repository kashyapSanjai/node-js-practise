const express = require('express');
const app = express();

app.get("",(req,resp)=>{
    resp.send(`
        <h1>This is a home page</h1>
        <a href="about"> Go to about page</a>
    `);
})

app.get("/about",(req,resp)=>{
    resp.send(`
    <h4>this is a about page</h4>
    <input type="text" value="${req.query.name}">
    <button> click here</button>
    `);
})

app.get("/contact",(req,resp)=>{
    resp.send({
        name:"sanjay",
        email:"sanjay@gmail.com"
    });
})

app.listen(5000);