import mongoose, { Mongoose, model } from "mongoose";

const studentSchema= new mongoose.Schema({
    name:{type:String},
    blood:{type:String},
    stdid:{type:String},
    password:{type:String},
    div:{type:String},
    number:{type:Number},
    otp:{type:String}
   
})

export default mongoose.model.students || mongoose.model('student',studentSchema)
