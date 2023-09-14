let app = require('./app')
// let fs = require('fs');
const http = require('http');
// let arr = [3,5,67,8,4,25,4,23,5,6];
// console.log(app.y);
// const result = arr.filter((item)=>{return item<4});
// console.log(result);

// fs.writeFileSync('hello.txt','hello world');

http.createServer(dataControl).listen(4500);


function dataControl(req,resp)
{
    resp.write("<h1>hello its me sanjay kumar</h1>");
    resp.end();
}

// test(a,b)
// {
//     // return a+b;
// }

// test(otherFunction);

// otherFunction()
// {
//     return "hello";
// }