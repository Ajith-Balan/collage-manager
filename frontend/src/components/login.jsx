import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function SignInPage() {
  const navigate = useNavigate();

  const [std, setStd] = useState({ email: "", password: "" });
  const [staff, setStaff] = useState({ email: "", password: "" });
  const [isStudentSignIn, setIsStudentSignIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleStudentChange = (e) => {
    setStd((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleStaffChange = (e) => {
    setStaff((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const signInStudent = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:3000/api/studentlogin", std);
      if (res.status === 200) {
        navigate(`/studentpage/${std.email}`);
      }
    } catch (error) {
      setError("Student sign-in failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const signInStaff = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const res = await axios.post("http://localhost:3000/api/stafflogin", staff);
      if (res.status === 200) {
        navigate(`/staffpage/${staff.email}`);
      }
    } catch (error) {
      setError("Staff sign-in failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

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

      {/* Sign In Section */}
      <div className="flex-1 flex flex-col justify-center items-center mt-16 px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Sign In</h1>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setIsStudentSignIn(true)}
            className={`px-6 py-3 font-semibold rounded-lg ${isStudentSignIn ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Student Sign In
          </button>
          <button
            onClick={() => setIsStudentSignIn(false)}
            className={`px-6 py-3 font-semibold rounded-lg ${!isStudentSignIn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Staff Sign In
          </button>
        </div>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="w-full max-w-md p-12 bg-white shadow-lg rounded-lg"> {/* Adjusted width for better responsiveness */}
          <h2 className="text-2xl font-bold mb-6 text-center">{isStudentSignIn ? 'Student' : 'Staff'} Sign In</h2>
          <form className="flex flex-col" onSubmit={isStudentSignIn ? signInStudent : signInStaff}>
            <input
              type={isStudentSignIn ? "text" : "email"}
              name="email"
              placeholder={isStudentSignIn ? "Email ID" : "Staff Email"}
              className="w-full p-4 mb-4 bg-gray-200 rounded-lg"
              onChange={isStudentSignIn ? handleStudentChange : handleStaffChange}
              value={isStudentSignIn ? std.email : staff.email}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-4 mb-4 bg-gray-200 rounded-lg"
              onChange={isStudentSignIn ? handleStudentChange : handleStaffChange}
              value={isStudentSignIn ? std.password : staff.password}
            />
            <button
              type="submit"
              className={`w-full py-4 rounded-lg ${isStudentSignIn ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
            <Link to={isStudentSignIn ? '/stdfpwd' : '/stffpwd'} className="text-sm text-green-500 mt-3 text-center">
              Forgot your password?
            </Link>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 w-full p-4 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Code-A.B. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SignInPage;
