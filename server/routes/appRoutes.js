import express from "express";
import { registerUser ,loginUser} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router  = express.Router()

router.post("/",authMiddleware , roleMiddleware("candidate"),applyJob);
