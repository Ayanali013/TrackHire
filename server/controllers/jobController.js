import Job from "../models/jobs.js";

const createJob = async (req, res) => {
  try {
    const { title, company, description, location, salary, skills } = req.body;
    console.log(req.body)

    const existingJob = await Job.findOne({ title, company, location });

    if (existingJob) {
      return res.json({
        message: "Already applied for job in this Company",
      });
    }

    const job = await Job.create({
      title: title,
      company: company,
      description: description,
      location: location,
      salary: salary,
      skills: skills,
      createdBy : req.user.id
    });

    return res.json({
      message: "Job Saved Succesfully.",
    });

  
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const fetchJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, company } = req.body;
    console.log(title, company);
    const fetchingJob = await Job.findOne({
      title: title,
      company: company,
    });
    if (!fetchingJob) {
      return res.status(404).json({
        message: "You didnt applied for this job till now.",
      });
    }

    return res.json({ fetchingJob });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Something went Wrong....",
    });
  }
};

const updateJob = async (req, res) => {
try {
  
  const id = req.params.id;
    
  const ownerCheck = await Job.findById(id)
  if (!ownerCheck) {
      return res.status(404).json({
        message: "Job not found",
      });

  
  
  if (req.user.id === ownerCheck.createdBy.toString() ){
    
    const updatedJob = await Job.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    
    // 5. Updated job return
    return res.status(200).json({
      message: "Job updated successfully",
      job: updatedJob,
    });
    
  }
  else {
    return res.json({
      message: "You are not eligible ."
    })
    }}}
   catch (error) {
  console.log(error)

    return res.status(500).json({
      message: "Something Went Wrong in JOB Updation.",
    });
 
}
}

  const deleteJob = async (req, res )=>{
    try {
      const id = req.params.id;
      const ownerCheck = await Job.findById(id)

        if (!ownerCheck) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

      if (req.user.id === ownerCheck.createdBy.toString() ){

            await Job.findByIdAndDelete(id);
              await Job.findByIdAndDelete(id);

    return res.status(200).json({
      message: "Job deleted successfully",
    });

      }



    } catch (error) {
      
      console.error(error);

    return res.status(500).json({
      message: "Somthing went wrong during deletion ..",
    });
    }


  }
  


export { createJob, fetchJob, updateJob, deleteJob };
