import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const StaffDetails = () => {
  const { email } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/getonestafff/${email}`);
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching staff data.");
      console.error("Error fetching staff data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [email]);

  if (loading) {
    return <div className="text-center text-gray-600">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">Home</Link>
          </div>
         
        </div>
      </nav>

      {/* Staff Details Section */}
      <div className="flex-1 flex flex-col justify-center items-center mt-16 px-4">
        <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center">
            <div className="avatar mb-4">
              {
                data.photo
                  ? <img className="rounded-full h-32 w-32 object-cover" src={data.photo} alt="Staff" />
                  : <img className="rounded-full h-32 w-32 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s" alt="Default" />
              }
            </div>
            <h2 className='text-2xl font-bold text-gray-800 mb-4'>{data.name}</h2>
            <div className="w-full">
              <div className="mb-4">
                <label htmlFor="empid" className="block text-sm font-medium text-gray-700">Employee ID:</label>
                <h2 className="text-lg text-gray-800">{data.empid}</h2>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                <h2 className="text-lg text-gray-800">{data.email}</h2>
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number:</label>
                <h2 className="text-lg text-gray-800">{data.number}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center gap-4 mb-6">
        <Link to={'/addstudent'} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add Students
        </Link>
        <Link to={'/showstudent'} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Show Students
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 w-full p-4 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Code-A.B. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StaffDetails;
