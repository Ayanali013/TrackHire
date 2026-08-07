import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const registerUser = async (req, res) => {

    const {name , email ,password } =  req.body
    
  
   
    const existUser = await User.findOne({email}) 
    
    if (existUser){
        return res.json({
            message:"User already exist"
        })
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
    name : name ,
    email : email,
    password: hashedPassword
});

const token = jwt.sign(
    {
        id: user._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d"
    }
);



   
    

    return res.status(200).json({
        message: "Data Received",
        token
        
        
    });

};

export { registerUser };