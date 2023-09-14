module.exports = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("Age is required");
    }else if (req.query.age < 18) {
        resp.send("Age should be greater than 18");
    } else {
        next();
    }
}