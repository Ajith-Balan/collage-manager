import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function AddStaff() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");
  const [staff, setStaff] = useState({
    name: "",
    blood: "",
    email: "",
    password: "",
    empid: "",
    salary: "",
    experience: "",
    number: "",
    otp: "",
    photo: ""
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

    const res = await axios.post("http://localhost:3000/api/addstaff", { staff, photo });
    console.log(res);

    if (res.status === 201) {
      alert("Staff created successfully");
      navigate('/adminhome'); // Redirect to admin home after successful addition
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">HOME</Link>
          </div>
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Add Staff</h2>

          <form onSubmit={addTask} className="space-y-4">
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Photo</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={convert}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                value={staff.name}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number</label>
              <input
                type="number"
                id="number"
                name="number"
                onChange={handleChange}
                value={staff.number}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="blood" className="block text-sm font-medium text-gray-700">Blood</label>
              <input
                type="text"
                id="blood"
                name="blood"
                onChange={handleChange}
                value={staff.blood}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="empid" className="block text-sm font-medium text-gray-700">Employee ID</label>
              <input
                type="text"
                id="empid"
                name="empid"
                onChange={handleChange}
                value={staff.empid}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                value={staff.email}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={staff.password}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="text"
                id="salary"
                name="salary"
                onChange={handleChange}
                value={staff.salary}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience</label>
              <input
                type="text"
                id="experience"
                name="experience"
                onChange={handleChange}
                value={staff.experience}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Add Staff
            </button>
          </form>
        </div>
      </div>

      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default AddStaff;
