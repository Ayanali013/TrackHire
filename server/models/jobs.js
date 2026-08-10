import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        company: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        location: {
            type: String,
            required: true,
            trim: true
        },

        salary: {
            type: Number
        },

        skills: {
            type: [String],
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Job = mongoose.model("Job", JobSchema);

export default Job;