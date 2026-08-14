import express from "express";
import { createJob, fetchJob, updateJob } from "../controllers/jobController.js";
import authMiddleware  from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddlware.js";


const router = express.Router();

router.post("/", authMiddleware , roleMiddleware("recruiter"), createJob);
router.get("/", fetchJob)
router.put("/:id", authMiddleware, roleMiddleware("recruiter"), updateJob)

export default router;