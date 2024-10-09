import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const StudentDetails = () => {
  const { email } = useParams();
  const [data, setData] = useState({});

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/getonestudentt/${email}`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">Home</Link>
          </div>
          <div>
          
          </div>
        </div>
      </nav>

      {/* Student Details Section */}
      <div className="flex-1 flex flex-col justify-center items-center mt-16 px-4">
        <div className="w-full max-w-2xl p-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center">
            <div className="avatar mb-4">
              {
                data.photo
                  ? <img className="w-32 h-32 rounded-full object-cover" src={data.photo} alt="Student" />
                  : <img className="w-32 h-32 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s" alt="Default" />
              }
            </div>

            <h2 className='text-2xl font-bold text-gray-800 mb-4'>{data.name}</h2>

            <div className="w-full">
              <div className="mb-4">
                <label className="font-semibold">STD ID:</label>
                <h2 className='text-lg text-gray-600'>{data.email}</h2>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Email:</label>
                <h2 className='text-lg text-gray-600'>{data.email}</h2>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Password:</label>
                <h2 className='text-lg text-gray-600'>{data.password}</h2>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Number:</label>
                <h2 className='text-lg text-gray-600'>{data.number}</h2>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Division:</label>
                <h2 className='text-lg text-gray-600'>{data.div}</h2>
              </div>
              <div className="mb-4">
                <label className="font-semibold">Blood Group:</label>
                <h2 className='text-lg text-gray-600'>{data.blood}</h2> 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 w-full p-4 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Code-A.B. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StudentDetails;
