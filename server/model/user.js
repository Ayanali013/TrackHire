import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {type : String , required : true ,trim:true},
    email: {type : String , required : true, unique =true ,trim:true ,lovercase:true},
    password: {
        type: String
    },
    profile :{
        default:null
    },
    createdAt :{
            timestamp:true
    },
    updatedAt :{
                timestamp:true
    }
})

const User = mongoose.model("User", UserSchema);

export default User;