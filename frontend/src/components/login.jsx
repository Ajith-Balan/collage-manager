import React, { useState } from 'react';

function SignInPage() {
  const [isStudentSignIn, setIsStudentSignIn] = useState(true);

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

      {/* Conditionally render based on state */}
      {isStudentSignIn ? (
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Student Sign In</h2>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Student Email"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <input
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
          <h2 className="text-2xl font-bold mb-6 text-center">Staff Sign In</h2>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Staff Email"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 bg-gray-200 rounded"
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Sign In
            </button>
            <a href="#" className="text-sm text-blue-500 mt-3 text-center">
              Forgot your password?
            </a>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignInPage;
