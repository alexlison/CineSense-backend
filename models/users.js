
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
    {
        name:{ type:String, required:true },
        email:{ type:String, required:true },
        phone:{ type: Number, required:true },
        state:{ type: String, required:true },
        city:{ type: String, required:true },
        street:{ type: String, required:true },
        dob:{ type: String, required:true },
        gender:{ type: String, required:true },
        password:{ type: String, required:true }
        
    }
)

const userModel = mongoose.model("users",userSchema)
module.exports = userModel