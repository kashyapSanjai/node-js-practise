const dbConnect = require("./mongodb-conn")

const update = async ()=>{
    const db = await dbConnect();
    const result = await  db.updateMany(
        {name:"lumia 800"},{
            $set:{
                name:"lumia 800123"
            }
        }
    )
    console.log(result);
    // if (result.acknowledged) {
    //     console.log("data updateed");
    // }
}
update();