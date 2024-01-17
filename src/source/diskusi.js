const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/sawala")
.then(()=>{
    console.log("diskusi connected")
})

.catch(()=>{
    console.log("failed not connected")
})

const DiskusiSchema= new mongoose.Schema({
    pertanyaan:{
        type:String,
        required:true
    },
    jawaban:{
        type:String,
    },
    latepost: { type: Date, default: Date.now }
})


const collection = new mongoose.model("diskusi",DiskusiSchema)

module.exports= collection
