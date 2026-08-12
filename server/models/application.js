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

},
coverLetter:{

},
status:{

},
appliedAt:{

}
})