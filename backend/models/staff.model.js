import mongoose, { Mongoose, model } from "mongoose";

const staffSchema= new mongoose.Schema({
    name:{type:String},
    blood:{type:String},
    email:{type:String},
    password:{type:String},
    empid:{type:String},
    experience:{type:String},
    number:{type:Number},
    salary:{type:Number},
    photo:{type:String},
    otp:{type:String}
   
})

export default mongoose.model.staff || mongoose.model('staff',staffSchema)
