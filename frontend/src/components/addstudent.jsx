import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function AddStudent() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");

  const [student, setStudent] = useState({
    name: "",
    blood: "",
    stdid: "",
    email: "",
    password: "",
    div: "",
    number: "",
    photo: ""
  });

  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
    const res = await axios.post("http://localhost:3000/api/addstudent", { student, photo });
    console.log(res.status);

    if (res.status === 201) {
      alert("Student created successfully");
      navigate('/adminhome'); // Redirect to admin home after successful addition
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">HOME</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Add Student</h2>

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
                value={student.name}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="blood" className="block text-sm font-medium text-gray-700">Blood</label>
              <input
                type="text"
                id="blood"
                name="blood"
                onChange={handleChange}
                value={student.blood}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="stdid" className="block text-sm font-medium text-gray-700">Student ID</label>
              <input
                type="text"
                id="stdid"
                name="stdid"
                onChange={handleChange}
                value={student.stdid}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email ID</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                value={student.email}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={student.password}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number</label>
              <input
                type="number"
                id="number"
                name="number"
                onChange={handleChange}
                value={student.number}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="div" className="block text-sm font-medium text-gray-700">Division</label>
              <input
                type="text"
                id="div"
                name="div"
                onChange={handleChange}
                value={student.div}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Add Student
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center">
        <p>&copy; {new Date().getFullYear()} . All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AddStudent;
