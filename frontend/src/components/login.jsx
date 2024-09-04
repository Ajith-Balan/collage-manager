import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SignInPage() {
  const navigate = useNavigate();

  const [std, setStd] = useState({ email:"", password:"" });
  const [staff, setStaff] = useState({ email: "", password: "" });
  const [isStudentSignIn, setIsStudentSignIn] = useState(true);

  const handleStudentChange = (e) => {
    setStd((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStaffChange = (e) => {
    setStaff((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };




















  

  const signInStudent = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting student sign-in with:", std);
      const res = await axios.post("http://localhost:3000/api/studentlogin", std);
      console.log("Student sign-in response:", res.data);
      if (res.status === 200) {
        navigate(`/studentpage/${std.email}`);
      }
    } catch (error) {
      console.error("Error during student sign-in", error);
      alert("Student sign-in failed. Please check your credentials and try again.");
    }
  };

  const signInStaff = async (e) => {
    e.preventDefault();
    try {
      console.log("Attempting staff sign-in with:", staff);
      const ress = await axios.post("http://localhost:3000/api/stafflogin", staff);
      console.log("Staff sign-in response:", ress.data);
      if (ress.status === 200) {
        navigate(`/staffpage/${staff.email}`);
        // console.log(staff.email);
        
      }
    } catch (error) {
      console.error("Error during staff sign-in", error);
      alert("Staff sign-in failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-8">Sign In</h1>

      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setIsStudentSignIn(true)}
          className={`px-4 py-2 font-semibold rounded ${isStudentSignIn ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Student Sign In
        </button>
        <button
          onClick={() => setIsStudentSignIn(false)}
          className={`px-4 py-2 font-semibold rounded ${!isStudentSignIn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Staff Sign In
        </button>
      </div>

      {isStudentSignIn ? (
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Student Sign In</h2>
          <form className="flex flex-col" onSubmit={signInStudent}>
            <input
              type="text"
              name="email"
              placeholder="email ID"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
              onChange={handleStudentChange}
              value={std.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
              onChange={handleStudentChange}
              value={std.password}
            />
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Sign In
            </button>
            < Link to={'/stdfpwd'} className="text-sm text-green-500 mt-3 text-center">
              Forgot your password?
            </Link>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Staff Sign In</h2>
          <form className="flex flex-col" onSubmit={signInStaff}>
            <input
              type="email"
              name="email"
              placeholder="Staff Email"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
              onChange={handleStaffChange}
              value={staff.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
              onChange={handleStaffChange}
              value={staff.password}
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign In
            </button>
            < Link to={'/stffpwd'} className="text-sm text-green-500 mt-3 text-center">
              Forgot your password?
            </Link>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignInPage;
