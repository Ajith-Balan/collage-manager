import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ShowStudent() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/getstudent');
      setStudentList(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/deletestudent/${id}`);
      if (res.status === 200) {
        alert('Successfully deleted');
        fetchStudent(); // Refresh the student list after deletion
      }
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Failed to delete student');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation */}
      <nav className="bg-blue-600 fixed top-0 w-full p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">HOME</Link>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="container mx-auto p-4 pt-20">
        <h2 className="text-2xl font-bold mb-4">Student List</h2>
        {/* 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {studentList.map((student) => (
            <div
              key={student._id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <img
                  style={{ objectFit: 'cover' }}
                  className="h-16 w-16 rounded-full mr-4"
                  src={
                    student.photo ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s'
                  }
                  alt="Student"
                />
                <div>
                  <h3 className="text-xl font-bold">{student.name}</h3>
                  <p className="text-gray-600">Student ID: {student.stdid}</p>
                  <p className="text-gray-600">Phone: {student.number}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Link to={`/editstudent/${student._id}`}>
                  <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-200">
                    Edit
                  </button>
                </Link>
                <button
                  onClick={() => deleteStudent(student._id)}
                  className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 p-4 text-white text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} CJ Attire. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ShowStudent;
