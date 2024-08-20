import studentSchema from "./models/student.model.js"











export async function addstudent(req,res){
    console.log(req);
    const {...student}=req.body;
    await studentSchema.create({...student})
    .then(()=>{res.status(201).send({message:"successfully added a staff"})})
    
    .catch((error)=>{res.status(400).send(error)})
}



export async function getstudent(req,res){
    console.log(req.user);
    const data= await studentSchema.find();
    try {
        res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error)

    }
}


export async function deletestudent(req,res){
    const {id}=req.params;
    const data= await studentSchema.deleteOne({_id:id});
    try {
        res.status(200).send({message:"successfully deleted the staff"})

    } catch (error) {
        res.status(400).send({error})

    }
}

export async function foredit(req,res){
    const {id}=req.params;
    const data= await studentSchema.findOne({_id:id});
    try {
        res.status(200).send({data})

    } catch (error) {
        res.status(400).send({error})

    }
}


export async function updatestudent(req,res){
    const {id}=req.params;
    const {...data}=req.body
    await studentSchema.updateOne ({_id:id},{$set:{...data}});
    try {
        res.status(201).send({message:"successfully updated "})

    } catch (error) {
        res.status(400).send({error:error})

    }
}








