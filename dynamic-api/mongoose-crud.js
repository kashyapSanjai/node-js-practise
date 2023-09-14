const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductsSchema = new mongoose.Schema({
    name:String,
    price:Number
})

const insertInDb = async ()=>{
    const ProductsModel = new mongoose.model("products",ProductsSchema)
    let data = await ProductsModel({name:"S322",price:112})
    let result = await data.save();
    console.log(result);
}

// insertInDb();

const updateInDb = async ()=>{
    const Product = await mongoose.model("products",ProductsSchema)
    let data = await Product.updateOne(
        {name:"S322"},{
            $set:{
                name:"S211"
            }
        }
    )
    console.log(data);
}

// updateInDb();

//http://localhost:5000/64feec489b230721ada4c2df
const deleteInDb = async ()=>{
    const Product = await mongoose.model("products",ProductsSchema)
    let data = await Product.deleteOne({name:"S211"})
    console.log(data);
}

// deleteInDb();

const findInDb = async ()=>{
    const Product = await mongoose.model("products",ProductsSchema);
    let data = await Product.find();
    console.log(data);
}

// findInDb();