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


const loginUser = async (req,res)=>{
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        console.log(user)
            
        if (!user) {
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
        const pass = await bcrypt.compare(password , user.password)
        const token = jwt.sign(
    {
        id: user._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d"
    }
);

        if (!pass ){
            return res.status(400).json({
                message: "Invalid email or password"
            });
        }
            return res.status(200).json({
                message :"Email Verified.",
                token
            })

            
        

        // Next step: compare password
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

export {registerUser , loginUser};