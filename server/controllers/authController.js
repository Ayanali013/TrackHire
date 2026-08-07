import User from "../models/user.js";
import bcrypt from "bcryptjs";


const registerUser = async (req, res) => {

    const {name , email ,password } =  req.body
    
  
   
    const existUser = await User.findOne({email}) 
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)

    const user = await User.create({
    name : name ,
    email : email,
    password: hashedPassword
});

    console.log(existUser)
    if (existUser){
        return res.json({
            message:"User already exist"
        })
    }
    

    return res.status(200).json({
        message: "Data Received"
    });

};

export { registerUser };