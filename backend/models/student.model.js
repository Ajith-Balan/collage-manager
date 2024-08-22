import mongoose, { Mongoose, model } from "mongoose";

const studentSchema= new mongoose.Schema({
    name:{type:String},
    blood:{type:String},
    stdid:{type:String},
    password:{type:String},
    email:{type:String},
    div:{type:String},
    photo:{type:String},
    number:{type:Number},
    otp:{type:String}
   
})

export default mongoose.model.student || mongoose.model('student',studentSchema)
