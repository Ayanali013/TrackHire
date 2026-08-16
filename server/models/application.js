import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({

    applicant : {
        type: String,
        required : true
    },
job:{
    type: String,
        required : true

},
resume:{
    type: String,

},
coverLetter:{
    type: String,

},
status:{
    type: String,

},

},{
    timestamps: true,
})


const Application = mongoose.model("Application", ApplicationSchema);

export default Application;