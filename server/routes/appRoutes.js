import express from "express";
import { registerUser ,loginUser} from "../controllers/authController.js";
import { applyJob } from "../controllers/appControllers.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddlware.js";


const router  = express.Router()

router.post("/",authMiddleware , roleMiddleware("candidate"), applyJob);



export default router;