import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import appRoutes from "./routes/appRoutes.js";
import { applyJob } from "./controllers/appControllers.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/application", applyJob);
app.use("/api/jobs", jobRoutes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  
  console.log("Server is running ",  )
  console.log(`🚀 Server running on port ${PORT}`);
});
