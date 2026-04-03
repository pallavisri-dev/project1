import mongoose, { model } from "mongoose";


const productSchema= new mongoose.Schema({
description:{
    type:String,
    require:true
},
name:{
    type:String,
    require:true
},
productImage:{
    type:String
},
price:{
    type:Number,
    default:0
},
stock:{
    type:Number,
    default:0
},
category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category",
    require:true
},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
}   

},{timestamps:true});

export const Product=mongoose.model("Product",productSchema);