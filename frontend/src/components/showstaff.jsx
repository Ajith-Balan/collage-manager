import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function ShowStaff() {
  const [staffList, setStaffList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/getstaff');
      setStaffList(response.data);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  const deleteStaff = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:3000/api/deletestaff/${id}`);
      if (res.status === 200) {
        alert('Successfully deleted');
        fetchStaff(); // Refresh the staff list after deletion
      }
    } catch (error) {
      console.error('Error deleting staff:', error);
      alert('Failed to delete staff');
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
        <h2 className="text-2xl font-bold mb-4">Staff List</h2>
        {/* 3 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staffList.map((staff) => (
            <div
              key={staff._id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between"
            >
              <div className="flex items-center mb-4">
                <img
                  style={{ objectFit: 'cover' }}
                  className="h-16 w-16 rounded-full mr-4"
                  src={
                    staff.photo ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s'
                  }
                  alt="Staff"
                />
                <div>
                  <h3 className="text-xl font-bold">{staff.name}</h3>
                  <p className="text-gray-600">Emp ID: {staff.empid}</p>
                  <p className="text-gray-600">Phone: {staff.number}</p>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Link to={`/editstaff/${staff._id}`}>
                  <button className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition duration-200">
                    Details
                  </button>
                </Link>
                <button
                  onClick={() => deleteStaff(staff._id)}
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

export default ShowStaff;
