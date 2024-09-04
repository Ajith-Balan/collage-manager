import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
      console.log(res.status);
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
      console.log(res.status);
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
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300">
            <img
              className="w-full h-full object-cover"
              src={data.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s"}
              alt="Profile"
            />
          </div>
          <input
            type="file"
            onChange={convert}
            className="mt-2"
            name="photo"
          />
        </div>

        <h2 className="text-xl font-bold mb-4">{data.name}</h2>

        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              name="name"
              type="text"
              id="name"
              onChange={handleChange}
              value={data.name || ''}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="empid" className="block text-gray-700">Employee ID:</label>
            <input
              name="empid"
              type="text"
              id="empid"
              onChange={handleChange}
              value={data.empid || ''}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              name="email"
              type="text"
              id="email"
              onChange={handleChange}
              value={data.email || ''}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              name="password"
              type="text"
              id="password"
              onChange={handleChange}
              value={data.password || ''}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700">Phone Number:</label>
            <input
              name="number"
              type="text"
              id="number"
              onChange={handleChange}
              value={data.number || ''}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={update}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Update
            </button>
            <button
              onClick={deleteStaff}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
