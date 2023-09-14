const dbConnect = require("./mongodb-conn")

const insert = async ()=>{
    const db = await dbConnect();
    const result = await  db.insertMany([
        {name:"lumia 841",brand:"nokia",price:224,category:"mobile"},
        {name:"lumia 844",brand:"nokia",price:234,category:"mobile"},
        {name:"lumia 843",brand:"nokia",price:738,category:"Laptop"},
        {name:"lumia 832",brand:"nokia",price:728,category:"Laptop"},
        {name:"lumia 856",brand:"nokia",price:718,category:"Laptop"}
    ])
    console.log(result);
    if (result.acknowledged) {
        console.log("data inserted");
    }
}
insert();