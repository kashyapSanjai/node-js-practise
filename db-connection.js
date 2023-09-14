const dbConnect = require('./mongodb-conn');


// const main = async()=>{
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
// }
// main();

function main(){
    dbConnect().then((resp)=>{
        resp.find({}).toArray().then((data)=>{
            console.log(data);
        })
    })
}
main();
