
import User from "../models/user.js";

const candidateFields = [
  "name",
  "phone",
  "location",
  "headline",
  "education",
  "bio",
  "skills",
  "resumeUrl",
  "linkedin",
  "github",
];

const recruiterFields = [
  "name",
  "phone",
  "location",
  "companyName",
  "companyWebsite",
  "companyDescription",
  "linkedin",
];

// GET PROFILE
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user || user.role !== req.user.role) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    return res.status(200).json({ profile: user });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch profile",
    });
  }
};

// UPDATE PROFILE
export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user || user.role !== req.user.role) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    const allowedFields =
      user.role === "candidate"
        ? candidateFields
        : user.role === "recruiter"
          ? recruiterFields
          : [];

    if (!allowedFields.length) {
      return res.status(403).json({
        message: "Invalid account role",
      });
    }

    for (const field of allowedFields) {
      if (req.body[field] === undefined) continue;

      if (field === "skills" && user.role === "candidate") {
        if (!Array.isArray(req.body.skills)) {
          return res.status(400).json({
            message: "Skills must be an array",
          });
        }

        user.skills = req.body.skills
          .filter((skill) => typeof skill === "string")
          .map((skill) => skill.trim())
          .filter(Boolean)
          .slice(0, 40);

        continue;
      }

      if (typeof req.body[field] !== "string") {
        return res.status(400).json({
          message: `${field} must be a string`,
        });
      }

      user[field] = req.body[field].trim();
    }

    await user.save();

    const profile = await User.findById(user._id).select("-password");

    return res.status(200).json({
      message: "Profile updated successfully",
      profile,
    });
  } catch (error) {
    console.error("Profile update error:", error);

    return res.status(500).json({
      message: "Failed to update profile",
    });
  }
};
