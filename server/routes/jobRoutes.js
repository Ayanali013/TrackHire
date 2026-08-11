import express from "express";
import { createJob, fetchJob, updateJob } from "../controllers/jobController.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", fetchJob)
router.put("/:id", updateJob)

export default router;