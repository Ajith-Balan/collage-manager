import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
      const response = await axios.delete(`http://localhost:3000/api/deletestaff/${id}`);
      if (response.status === 200) {
        alert("Staff deleted successfully");
        fetchStaff(); // Refresh the list after deletion
      }
    } catch (error) {
      console.error("Error deleting staff:", error);
    }
  };

  const editStaff = (id) => {
    navigate(`/editstaff/${id}`);
  };

  return (
    <div className="container">
      <h2>Staff List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.name}</td>
              <td>{staff.empid}</td>
              <td>{staff.email}</td>
              <td>{staff.number}</td>
              <td>
                <button  opening the onClick={() => editStaff(staff.id)}>Edit</button>
                <button onClick={() => deleteStaff(staff.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowStaff;
