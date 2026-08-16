import Application from "../models/application.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const applyJob = async (req ,res) => {
    try {
        
        
        const {applicant, job, resume , coverLetter , status} = req.body
        console.log(req.body)
        
        const appliedJob = await Application.findOne({applicant , job})
        
        if (appliedJob){
            return res.json({
                message : "You already applied for this Job."
            })
        }
        else{
            const newApply = Application.create({
                applicant: applicant , 
                job: job ,
                resume : resume ,
                coverLetter : coverLetter ,
                status:status
                
            })
        }
        
        
        return res. json({
            message : "Job Applicant Applied SuccessFully."
        }) 
        
    } catch (error) {
        console.log(error)

        return res.status(404).json({
            message: "Something is wrong with Application Control."
        })
        
    }

    
}

export { applyJob };