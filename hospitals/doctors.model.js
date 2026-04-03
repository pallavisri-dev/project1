import mongoose from "mongoose";

const doctorsSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    salary:{
         type:String,
        require:true
    },
    degree:{
        type:String,
        require:true
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital",
        }
    ]

    
},{timestamps:true});

export const Doctors=mongoose.model("Doctors", doctorsSchema);