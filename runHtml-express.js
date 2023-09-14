const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));


app.get("/about",(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
})

app.get("/help",(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`);
})

app.get("/",(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
})

app.get("*",(req,resp)=>{
    resp.sendFile(`${publicPath}/no-page.html`);
})

app.listen(5000);