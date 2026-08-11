import express from "express";
import { createJob, fetchJob } from "../controllers/jobController.js";

const router = express.Router();

router.post("/", createJob);
router.get("/", fetchJob)

export default router;