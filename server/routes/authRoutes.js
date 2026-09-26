import express from "express";
import { registerCandidate,registerRecruiter , loginCandidate , loginRecruiter} from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/candidate/register", registerCandidate);
router.post("/recruiter/register", registerRecruiter);
router.post("/candidate/login", loginCandidate);
router.post("/recruiter/login", loginRecruiter);
router.get("/profile", authMiddleware, (req, res) => {

    res.json({
        message: "Profile route reached"
    });
});

export default router;