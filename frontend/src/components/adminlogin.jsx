import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function AdminLogin() {
  const navigator=useNavigate()

  const [admin, setUser] = useState({
    name: "",
    email: "",
    number: "",
    username: "",
    password: "",
    cpassword: "",
  });

  const [loginUser, setLoginUser] = useState({
    email: "",  
    password: ""
  });

  const signUp = async (e) => {
    e.preventDefault();
    try {
      console.log(admin);
      const res = await axios.post("http://localhost:3000/api/adminregister", admin);
      console.log(res);
      if (res.status === 201) {
        alert("Sign up successful");
      }
    } catch (error) {
      console.error("Error during sign-up", error);
      alert("Sign up failed. Please try again.");
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      console.log(loginUser);
      const res = await axios.post("http://localhost:3000/api/adminlogin", loginUser);
      console.log(res.data);
      if (res.status === 200) {
        navigator('/adminhome')
      }
    } catch (error) {
      console.error("Error during sign-in", error);
      alert("Sign in failed. Please check your credentials and try again.");
    }
  };

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChange2 = (e) => {
    setLoginUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [isAdminSignIn, setIsAdminSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Sign In / Sign Up</h1>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setIsAdminSignIn(true)}
          className={`px-4 py-2 font-semibold rounded ${isAdminSignIn ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Admin Sign In
        </button>
        <button
          onClick={() => setIsAdminSignIn(false)}
          className={`px-4 py-2 font-semibold rounded ${!isAdminSignIn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Admin Sign Up
        </button>
      </div>

      {isAdminSignIn ? (
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Sign In</h2>
          <form className="flex flex-col" onSubmit={signIn}>
            <input
              name="email"
              onChange={handleChange2}
              type="email"
              placeholder="Admin Email"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <input
              name="password"
              onChange={handleChange2}
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Sign In
            </button>
            <a href="#" className="text-sm text-green-500 mt-3 text-center">
              Forgot your password?
            </a>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Sign Up</h2>
          <form className="flex flex-col" onSubmit={signUp}>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <input
              onChange={handleChange}
              name="number"
              type="number"
              placeholder="Phone Number"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <input
              onChange={handleChange}
              name="username"
              type="text"
              placeholder="Username"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Admin Email"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <input
              onChange={handleChange}
              name="cpassword"
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminLogin;
