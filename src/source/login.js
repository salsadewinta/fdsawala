const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/sawala")
.then(()=>{
    console.log("user connected")
})

.catch(()=>{
    console.log("failed not connected")
})

const LoginSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    npm:{
        type:String,
        required:true
    },
    tahun:{
        type:String,
        required:true
    },
    prodi:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type: String,
        enum: ['admin', 'mahasiswa'],
        required: true,
      },
    ktm:{
        type:String
    },
    isVerified: { type: Boolean, default: false } 
})


const collection = new mongoose.model("users",LoginSchema)

module.exports= collection
