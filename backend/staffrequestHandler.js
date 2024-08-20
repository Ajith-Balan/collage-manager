import staffSchema from "./models/staff.model.js"











export async function addstaff(req,res){
    console.log(req);
    const {...staff}=req.body;
    await staffSchema.create({...staff})
    .then(()=>{res.status(201).send({message:"successfully added a staff"})})
    
    .catch((error)=>{res.status(400).send(error)})
}



export async function getstaff(req,res){
    console.log(req.user);
    const data= await staffSchema.find();
    try {
        res.status(200).send(data)

    } catch (error) {
        res.status(500).send(error)

    }
}


export async function deletestaff(req,res){
    const {id}=req.params;
    const data= await staffSchema.deleteOne({_id:id});
    try {
        res.status(200).send({message:"successfully deleted the staff"})

    } catch (error) {
        res.status(400).send({error})

    }
}

export async function foredit(req,res){
    const {id}=req.params;
    const data= await staffSchema.findOne({_id:id});
    try {
        res.status(200).send({data})

    } catch (error) {
        res.status(400).send({error})

    }
}


export async function updatestaff(req,res){
    const {id}=req.params;
    const {...data}=req.body
    await staffSchema.updateOne ({_id:id},{$set:{...data}});
    try {
        res.status(201).send({message:"successfully updated "})

    } catch (error) {
        res.status(400).send({error:error})

    }
}








