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
    return res .json ({
      message : "Applicant list is given below.",
       appList : appList
    })
  }else{
    return res.status(403).json ({
      message : "You didnt create this Job.",
       
    })
  }
}

// Recruiter Updating th status----------------


const updateApplicationStatus = async (req, res) => {
  try {

   
    const { applicationId } = req.params;
    const { status } = req.body;

    // 1. Find the application
    const application = await Application.findById(applicationId);
      console.log(application)
    if (!application) {
      return res.status(404).json({
        message: "Application not found",
      });
    }

    // 2. Find the job associated with this application
    const job = await Job.findById(application.job);

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    // 3. Check whether this recruiter owns the job
   
    if (job.createdBy.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not authorized to update this application",
      });
    }

    // 4. Update application status
    application.status = status;

    await application.save();

    return res.status(200).json({
      message: "Application status updated successfully",
      application,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};


// Candidate will get their all application:--------

const getmyApplication = async (req, res) => {
  try {
    const applications = await Application.find({
      applicant: req.user.id
    });

    if (applications.length === 0) {
      return res.status(404).json({
        message: "You have not applied for any job yet."
      });
    }

    return res.status(200).json({
      message: "Your applications fetched successfully.",
      applications: applications
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
};

export { applyJob, getJob , getApplicants, updateApplicationStatus, getmyApplication};
