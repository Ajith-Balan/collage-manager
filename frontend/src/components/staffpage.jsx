import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';

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
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
        <div className="avatar mb-4">
          {
            data.photo
              ? <img className="rounded-full h-32 w-32 object-cover" src={data.photo} alt="Staff" />
              : <img className="rounded-full h-32 w-32 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s" alt="Default" />
          }
        </div>
        <div className="info text-center">
          <div className="name mb-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <h2 className="text-xl font-bold text-gray-800">{data.name}</h2>
          </div>
          <div className="mb-2">
            <label htmlFor="empid" className="block text-sm font-medium text-gray-700">Employee ID:</label>
            <h2 className="text-lg text-gray-800">{data.empid}</h2>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <h2 className="text-lg text-gray-800">{data.email}</h2>
          </div>
          <div>
            <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number:</label>
            <h2 className="text-lg text-gray-800">{data.number}</h2>
          </div>
        </div>
      </div>
      <div>
        <Link to={'/addstudent'}>
        add students
        </Link>
        <Link to={'/showstudent'}>
        show students
        </Link>
      </div>
    </div>
  );
};

export default StaffDetails;
