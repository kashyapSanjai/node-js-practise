const { resolve } = require("path");

let a = 10;
let b = 20;



let waitingData = new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(90);
    }, 2000);
})

waitingData.then((data)=>{
    console.log(data);
    b=data;
    console.log(a+b);
})

// console.log(a+b);