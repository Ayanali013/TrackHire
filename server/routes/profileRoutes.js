
import uploadResume from "../middleware/uploadResume.js";
import { uploadCandidateResume } from "../controllers/profileController.js";
import express from "express";
import {getProfile ,updateProfile,} from "../controllers/profileController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getProfile);
router.put("/", authMiddleware, updateProfile);
router.post("/resume",authMiddleware,roleMiddleware("candidate"),uploadResume.single("resume"),uploadCandidateResume
);

export default router;
