import Job from "../models/jobs.js";

const createJob = async (req, res) => {
    try {
        
        const { title, company, description, location, salary, skills } = req.body

        const existingJob = await Job.findOne({ title, company, location })

        if (existingJob) {
            return res.json({
                message: "Already applied for job in this Company"
            })
        }

        const job = await Job.create({
            title: title,
            company: company,
            description: description,
            location: location,
            salary: salary,
            skills: skills
        })
        return res.json({
            message: "Job Saved Succesfully."
        })



    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};


const fetchJob = async (req, res) => {
try {
    const { title, company } = req.body;
    console.log(title, company)
    const fetchingJob = await Job.findOne({
        title:title,
        company:company
            
        })
  if (!fetchingJob){
        return res.status(500).json({
            message: "You didnt applied for this job till now."
        })
     }
    
     return res.json({fetchingJob})
   
} catch (error) {
    console.log(error) 

    return res.status(500).json({
        message: "Something went Wrong...."
    })
}
}

export { createJob, fetchJob };