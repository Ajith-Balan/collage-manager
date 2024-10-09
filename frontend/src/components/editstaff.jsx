import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [photo, setPhoto] = useState("");

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const update = async () => {
    try {
      const res = await axios.patch(`http://localhost:3000/api/updatestaff/${id}`, { ...data, photo });
      if (res.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.error('Error updating staff:', error);
    }
  };

  const deleteStaff = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/deletestaff/${id}`);
      if (res.status === 200) {
        alert('Successfully deleted');
        navigate('/');
      }
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/getonestaff/${id}`);
      setData(res.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  const convert = async (e) => {
    const pic = await convertToBase64(e.target.files[0]);
    setPhoto(pic);
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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation */}
      <nav className="bg-blue-600 fixed top-0 w-full p-4 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">HOME</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto p-4 pt-24">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={data.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s"}
                alt="Profile"
              />
            </div>
            <input
              type="file"
              onChange={convert}
              className="mt-4 cursor-pointer text-gray-500 hover:text-gray-700"
              name="photo"
            />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-blue-600">{data.name}</h2>

          <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl border-t-4 border-blue-500">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">Name:</label>
              <input
                name="name"
                type="text"
                id="name"
                onChange={handleChange}
                value={data.name || ''}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="empid" className="block text-gray-700 font-semibold">Employee ID:</label>
              <input
                name="empid"
                type="text"
                id="empid"
                onChange={handleChange}
                value={data.empid || ''}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
              <input
                name="email"
                type="text"
                id="email"
                onChange={handleChange}
                value={data.email || ''}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-semibold">Password:</label>
              <input
                name="password"
                type="text"
                id="password"
                onChange={handleChange}
                value={data.password || ''}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="number" className="block text-gray-700 font-semibold">Phone Number:</label>
              <input
                name="number"
                type="text"
                id="number"
                onChange={handleChange}
                value={data.number || ''}
                className="w-full p-2 mt-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
              />
            </div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={update}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              >
                Update
              </button>
              <button
                onClick={deleteStaff}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-200 focus:ring-2 focus:ring-red-300 focus:outline-none"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Edit;
