const fs = require("fs");
const path = require("path");
const dirName = path.join(__dirname,"crud");

// fs.writeFileSync(`${dirName}/hello.txt`,"this file is dynamically created");

// fs.readFile(`${dirName}/hello.txt`,'utf8',(err,fileData)=>{
//     console.log(fileData);
// })

// fs.appendFile(`${dirName}/hello.txt`,"and this is a update string",(err)=>{
//     if(!err){console.log("file has been updated")}
// });

// fs.rename(`${dirName}/hello.txt`,`${dirName}/hello1.txt`,(err)=>{
//     console.log("file name has been updated");
// });

fs.unlinkSync(`${dirName}/hello1.txt`,(err)=>{
    console.log("file has been deleted");
});

