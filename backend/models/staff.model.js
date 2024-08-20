import mongoose, { Mongoose, model } from "mongoose";

const staffSchema= new mongoose.Schema({
    name:{type:String},
    blood:{type:Number},
    email:{type:String},
    password:{type:String},
    empid:{type:String},
    experience:{type:String},
    salary:{type:Number},

    otp:{type:String}
   
})

export default mongoose.model.staffs || mongoose.model('staff',staffSchema)
