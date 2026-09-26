import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register Candidate:- 


const registerCandidate = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create candidate
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "candidate",
    });

    return res.status(201).json({
      message: "Candidate registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};



// // User Register :-


// const registerUser = async (req, res) => {
//   const { name, email, password , role } = req.body;
//   const existUser = await User.findOne({ email });
//   if (existUser) {
//     return res.json({
//       message: "User already exist",
    
//     });
//   }
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const user = await User.create({
//     name: name,
//     email: email,
//     password: hashedPassword,
//     role : role 
//   });
//   if (role && !["candidate", "recruiter"].includes(role)) {
//     return res.status(400).json({
//         success: false,
//         message: "Invalid role"
//     });
// };

//   const token = jwt.sign(
//     {
//       id: user._id,
//       role: user.role
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "7d",
//     },
//   );
//   return res.status(200).json({
//     message: "Data Received",
//     token,
//   });
// };

// Recruiter Register:-

const registerRecruiter = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create recruiter
    const recruiter = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "recruiter",
    });

    return res.status(201).json({
      message: "Recruiter registered successfully",
      recruiter: {
        id: recruiter._id,
        name: recruiter.name,
        email: recruiter.email,
        role: recruiter.role,
      },
    });
  } catch (error) {
    console.error("Recruiter registration error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

//  User Login:- 


// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     console.log(user);

//     if (!user) {
//       return res.status(400).json({
//         message: "Invalid email or password",
//       });
//     }
//     const pass = await bcrypt.compare(password, user.password);
//     const token = jwt.sign(
//       {
//         id: user._id,
//         role : user.role,
//       },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "7d",
//       },
//     );

//     if (!pass) {
//       return res.status(400).json({
//         message: "Invalid email or password",
//       });
//     }
//     return res.status(200).json({
//       message: "Email Verified.",
//       token,
//     });

//     // Next step: compare password

    
//   } catch (error) {
//     console.error(error);

//     return res.status(500).json({
//       message: "Internal Server Error",
//     });
//   }
// };

const loginCandidate = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Check role
    if (user.role !== "candidate") {
      return res.status(403).json({
        message: "This account is not a candidate account",
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Create token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      message: "Candidate login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Candidate login error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

// Recruiter Login:-

const loginRecruiter = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    // Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Check role
    if (user.role !== "recruiter") {
      return res.status(403).json({
        message: "This account is not a recruiter account",
      });
    }

    // Check password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    // Create token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      message: "Recruiter login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Recruiter login error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

export { registerCandidate, registerRecruiter, loginCandidate, loginRecruiter };
