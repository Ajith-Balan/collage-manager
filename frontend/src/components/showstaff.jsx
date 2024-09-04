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
      const response = await axios.get("http://localhost:3000/api/getstaff");
      setStaffList(response.data);
    } catch (error) {
      console.error("Error fetching staff:", error);
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
      console.error("Error deleting staff:", error);
      alert('Failed to delete staff');
    }
  };


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Staff List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 border">Photo</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Employee ID</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone Number</th>
              <th className="py-2 px-4 border">Password</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff._id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border">
                  <img 
                    style={{ objectFit: "cover" }} 
                    className="h-12 w-12 rounded-full"
                    src={staff.photo || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s"} 
                    alt="Staff"
                  />
                </td>
                <td className="py-2 px-4 border">{staff.name}</td>
                <td className="py-2 px-4 border">{staff.empid}</td>
                <td className="py-2 px-4 border">{staff.email}</td>
                <td className="py-2 px-4 border">{staff.number}</td>
                <td className="py-2 px-4 border">{staff.password}</td>
                <td className="py-2 px-4 border flex space-x-2">
                  <Link to={`/editstaff/${staff._id}`}>
                    <button className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-200">Edit</button>
                  </Link>
                  <button 
                    onClick={() => deleteStaff(staff._id)} 
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShowStaff;
