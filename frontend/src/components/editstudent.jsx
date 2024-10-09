import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const Editstudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const Delete = async () => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/deletestudent/${id}`);
      if (res.status === 200) {
        alert('Successfully deleted');
        navigate('/students'); // Navigate to the students list or another page after deletion
      }
    } catch (err) {
      setError("Error deleting the student.");
      console.error(err);
    }
  };

  const update = async () => {
    try {
      const res = await axios.patch(`http://localhost:3000/api/updatestudent/${id}`, data, photo);
      if (res.status === 201) {
        alert('Successfully updated');
      }
    } catch (err) {
      setError("Error updating the student.");
      console.error(err);
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/getonestudent/${id}`);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching student data.");
      console.error(err);
      setLoading(false);
    }
  };

  const convert = async (e) => {
    const pic = await convertToBase64(e.target.files[0]);
    setPhoto((prev) => ({ ...prev, [e.target.name]: pic }));
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

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation */}
      <nav className="bg-blue-600 fixed top-0 w-full p-4 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">HOME</Link>
          </div>
          <div className="text-white text-lg">
            <Link to="/students">Students List</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto p-4 pt-24">
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
          <div className="profile mb-4">
            <div className="avatar">
              {data.photo ? (
                <img className="rounded-full h-32 w-32 object-cover" src={data.photo} alt="Student" />
              ) : (
                <img
                  className="rounded-full h-32 w-32 object-cover"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s"
                  alt="Default"
                />
              )}
            </div>
          </div>

          <div className="info text-center w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{data.name}</h2>

            <input type="file" onChange={convert} className="block w-full mb-4" id="photo" name="photo" />

            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name:
              </label>
              <input
                name="name"
                type="text"
                id="name"
                onChange={handleChange}
                value={data.name}
                className="block w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="stdid" className="block text-sm font-medium text-gray-700">
                STD ID:
              </label>
              <input
                name="stdid"
                type="text"
                id="stdid"
                onChange={handleChange}
                value={data.stdid}
                className="block w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email:
              </label>
              <input
                name="email"
                type="text"
                id="email"
                onChange={handleChange}
                value={data.email}
                className="block w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <input
                name="password"
                type="text"
                id="password"
                onChange={handleChange}
                value={data.password}
                className="block w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                Number:
              </label>
              <input
                name="number"
                type="text"
                id="number"
                onChange={handleChange}
                value={data.number}
                className="block w-full mt-1 p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={update}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Update
              </button>
              <button
                onClick={Delete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
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

export default Editstudent;
