import Application from "../models/application.js";
import Job from "../models/jobs.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const applyJob = async (req, res) => {
  try {
    const applicant = req.user.id
    console.log(applicant)
    const job = req.params.id
    console.log(job)
    const {  resume, coverLetter, status } = req.body;
    

    const appliedJob = await Application.findOne({ 
      applicant
      , job });

    if (appliedJob) {
      return res.json({
        message: "You already applied for this Job.",
      });
    }

    const newApply = await Application.create({
      applicant: applicant,
      job: job,
      resume: resume,
      coverLetter: coverLetter,
      status: status,
    });

    return res.json({
      message: "Job Applicant Applied SuccessFully.",
    });
  } catch (error) {
    console.log(error);

    return res.status(404).json({
      message: "Something is wrong with Application Control.",
    });
  }
};

//  GET YOUR JOB STATUS:-

// 

const getJob = async (req, res) => {
  try {
    const jobId = req.params.id;

    console.log(jobId);
    console.log(req.user.id);

    const searchJob = await Application.findOne({
      applicant: req.user.id,
      job: jobId
    });

    console.log(searchJob);

    if (!searchJob) {
      return res.status(404).json({
        message: "You have not applied yet."
      });
    }

    return res.status(200).json({
      message: "You tracked your Job.",
      application: searchJob
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

// Recruiter will get the Job Update From this:-

const getApplicants = async (req , res) => {

  const JOBid = req.params.jobId;
  console.log(JOBid)
    
  const findApply = await Job.findById(JOBid)
  console.log(findApply)

  if (!findApply){
    return res.status(404).json({
      message : "Job not Found."
    })
  }
  console.log(findApply.createdBy)
  console.log(req.user.id)
  if (findApply.createdBy.toString() === req.user.id){
    
    const appList = await Application.find({
      job: JOBid
    })
    return res.json ({
      message : "Applicant list is given below.",
       appList : appList
    })
  }else{
    return res.status(403).json ({
      message : "You didnt create this Job.",
       
    })
  }
}

export { applyJob, getJob , getApplicants};
