import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {

    name: {type : String , required : true ,trim:true},
    
    email: {type : String , required : true, unique :true ,trim:true ,lowercase: true},
    password: {
        type: String,
        required: true
    },
    profileImage :{
        type : String,
        default: null
    },
     role: {
    type: String,
    enum: ["candidate", "recruiter"],
    default: "candidate"
  }
},
 {
    timestamps :true
}

)

const User = mongoose.model("User", UserSchema);

export default User;