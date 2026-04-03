import mongoose from "mongoose";

const hospitalSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
     addressLine1:{
        type:String,
        require:true
    },
     addressLine2:{
        type:String,
        require:true
    },
     addressLine3:{
        type:String,
        require:true
    },
     city:{
        type:String,
        require:true
    },
    pincode:{
        type:String,
        require:true
    },
     specialisedIN:[
        {
          type:String,   
        },
    ],
        
   
},{timestamps:true});

export const Hospital=mongoose.model("Hospital", hospitalSchema);