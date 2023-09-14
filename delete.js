const dbConnect = require("./mongodb-conn")

const deleteData = async ()=>{
    const db = await dbConnect();
    const result = await  db.deleteMany(
        {name:"lumia 841"}
    )
    console.log(result);
    if (result.acknowledged) {
        console.log("data deleted");
    }
}
deleteData();