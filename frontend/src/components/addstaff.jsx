import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function addStaff() {
  const navigator = useNavigate();
  const [photo, setPhoto] = useState("");
  const [staff, setStaff] = useState({
    name: "",
    blood: "",
    email: "",
    password: "",
    empid: "",
    salary: "",
    experience: "",
    number:"",
    otp:"",
    photo:""
  });

  const handleChange = (e) => {
    setStaff((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const convert = async (e) => {
    setPhoto(await convertToBase64(e.target.files[0]));
  };

  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }

  const addTask = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:3000/api/addstaff",  {staff, photo });
    console.log(res);

    if (res.status === 201) {
      alert("Staff created successfully");
    }
  };

  return (
    <>
      <div className="container">
        <div className="profile"></div>
        <div className="info">
          <input type="file" onChange={convert }   placeholder="photo" id="photo" name="photo" />
          <div className="name">
            <label htmlFor="name">Name:<br /></label>
            <input name="name" type="text" id="name" onChange={handleChange} /><br />
          </div>
          <div className="number">
            <label htmlFor="number">Number:<br /></label>
            <input name="number" type="Number" id="name" onChange={handleChange} /><br />
          </div>
          <label htmlFor="blood">Blood:<br /></label>
          <input name="blood" type="text" id="blood" onChange={handleChange} /><br />

          <label htmlFor="empid">Employee ID:<br /></label>
          <input name="empid" type="text" id="empid" onChange={handleChange} /><br />

          <label htmlFor="email">Email:<br /></label>
          <input name="email" type="email" id="email" onChange={handleChange} /><br />

          <label htmlFor="password">Password:<br /></label>
          <input name="password" type="password" id="password" onChange={handleChange} /><br />

         

          <label htmlFor="salary">Salary:<br /></label>
          <input name="salary" type="text" id="salary" onChange={handleChange} /><br />

          <label htmlFor="experience">Experience:<br /></label>
          <input name="experience" type="text" id="experience" onChange={handleChange} /><br />

          <button id="add" onClick={addTask}>Add Staff</button>
        </div>
      </div>
    </>
  );
}

export default addStaff;
