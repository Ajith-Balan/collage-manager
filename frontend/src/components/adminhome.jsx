import React from "react";
import { Link } from "react-router-dom";

const AdminHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h1>

        <div className="flex flex-col space-y-4">
          <Link
            to="/showstaff"
            className="px-4 py-3 bg-blue-500 text-white text-center rounded hover:bg-blue-600 transition duration-300"
          >
            Display Staff
          </Link>
          <Link
            to="/showstudent"
            className="px-4 py-3 bg-green-500 text-white text-center rounded hover:bg-green-600 transition duration-300"
          >
            Display Student
          </Link>
          <Link
            to="/addstaff"
            className="px-4 py-3 bg-purple-500 text-white text-center rounded hover:bg-purple-600 transition duration-300"
          >
            Add Staff
          </Link>
          <Link
            to="/addstudent"
            className="px-4 py-3 bg-red-500 text-white text-center rounded hover:bg-red-600 transition duration-300"
          >
            Add Student
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
