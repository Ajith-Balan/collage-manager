import { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'


import axios from 'axios';


function addstudent() {

  const navigator=useNavigate()
  const [photo,setPhoto]=useState("")

const [student,setstudent]=useState({
name:"",
blood:"",
stdid:"",
password:"",
div:"",
number:"",
photo:""

})
const handleChange=(e)=>{
  setstudent((pre)=>({...pre,[e.target.name]:e.target.value}))
}

const convert=async(e)=>{
  setPhoto(await convertToBase64(e.target.files[0]))
  
  }
  
  function convertToBase64(file) {
  console.log("b64",file);
  return new Promise((resolve, reject) => {
     const fileReader = new FileReader();
     fileReader.readAsDataURL(file);
  
     fileReader.onload = () => {
         resolve(fileReader.result);
     }
     fileReader.onerror = (error) => {
         reject(error);
     }
  })
  }
  


  const addTask=async(e)=>{

    e.preventDefault();
 const res=await axios.post("http://localhost:3000/api/addstudent",{student,photo});
 console.log(res.status);

 if(res.status==201){
alert("student created successfully") 
 }
}



    return (
    <>
   

      <div className="container">
   
   <div className="profile">
     
                
       
   </div>
   <div className="info">


    
<input type="file" onChange={convert} placeholder='photo' id='photo' name='photo'/>

<div className="name">
<label htmlFor="name">  Name:<br></br>  </label>
<input name='name' type="text" id='name' onChange={handleChange}  /> <br></br></div>
<label htmlFor="name">blood:<br></br></label>

<input name='blood' type="text" id='Fname' onChange={handleChange} /><br></br>

<label htmlFor="email">Student id :<br></br></label>
<input name='stdid' type="text" id='email' onChange={handleChange}  /><br></br>

<label htmlFor="email">Password  :<br></br> </label>
<input name='password' type="password" id='DOB' onChange={handleChange}/><br></br>
<label htmlFor="email">Number:<br></br></label>

<input name='number' type="number" id='number' onChange={handleChange} />
<br></br>
<label htmlFor="email">Division:<br></br> </label>
<input name='div' type="text" id='Alternativenumber' onChange={handleChange} /><br></br>
<button id='add' onClick={addTask}>Add student</button>

   </div>


</div>








    </>
  )
}

export default addstudent
