const { log } = require("console");
const fs = require("fs");
const input = process.argv;

console.log(input);

// fs.writeFileSync(input[2], input[3]);
if (input[2] == "add") {
    fs.writeFileSync(input[3], input[4]);
}else if(input[2] == "remove"){
    fs.unlinkSync(input[3]);
}else{
    console.log("invalid commnad");
}

//command:- node fileHandle.js add/remove inputfile.txt "its new input file created by command"