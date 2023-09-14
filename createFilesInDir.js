const fs = require("fs");
const path = require("path");

const dirName = path.join(__dirname,"files");//"files" is name of directory

console.log(dirName);

//create dynamic files inside files directory
for (let i = 0; i < 5; i++) {
    fs.writeFileSync(`${dirName}/hello${i}.txt`,"this file is dynamically created");
}

//for read all files inside diles dir
fs.readdir(dirName,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is: ",item);
    })
})
