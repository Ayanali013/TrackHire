import Job from "../models/jobs.js";

const createJob = async (req , res) => {
    try {
        const {title , company, description , location , salary , skills } =  req.body

        const existingJob = await Job.findOne({title ,company, location }) 
        
        if (existingJob){
            return  res.json({
            message:"Already applied for job in this Company"
        })
        }

        const job = await Job.create({
            title : title,
            company : company,
            description : description,
             location:  location,
               salary:   salary,
               skills:skills
        })
        return res.json({
            message:"Job Saved Succesfully."
        })

        

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

export { createJob };