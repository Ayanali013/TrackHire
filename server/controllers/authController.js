import User from "../models/user.js";


const registerUser = async (req, res) => {
console.log("1")
    const {name , email ,password } =  req.body
    console.log("2")
    
    const existUser = await User.findOne({email}) 
    console.log(existUser)
    

    res.status(200).json({
        message: "Data Received"
    });

};

export { registerUser };