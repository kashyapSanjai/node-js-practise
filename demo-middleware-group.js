const express = require('express');
const reqFilter = require('./middleware/middleware');
const app = express();
const route = express.Router();


route.use(reqFilter);

app.get("/",(req,resp)=>{
    resp.send("welcome to home page")
})

route.get("/profile",(require,resp)=>{
    resp.send("welcome to profile page")
})

route.get("/about",(require,resp)=>{
    resp.send("welcome to about page")
})

app.use("/",route);

app.listen(5000);