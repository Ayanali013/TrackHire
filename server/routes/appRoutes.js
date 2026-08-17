import express from "express";
import { registerUser ,loginUser} from "../controllers/authController.js";
import { applyJob , getJob } from "../controllers/appControllers.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddlware.js";


const router  = express.Router()

router.post("/:id",authMiddleware , roleMiddleware("candidate"), applyJob);
router.get("/my:id", authMiddleware ,roleMiddleware("candidate"), getJob);



export default router;