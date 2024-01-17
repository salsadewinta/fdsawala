const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/sawala")
.then(()=>{
    console.log("Info connected")
})

.catch(()=>{
    console.log("failed not connected")
})

const InfoSchema= new mongoose.Schema({
    judul:{
        type:String,
        required:true
    },
    deskripsi:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    latepost: { type: Date, default: Date.now }
})


const collection = new mongoose.model("info", InfoSchema)

module.exports= collection
