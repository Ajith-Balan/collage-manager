import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const StudentDetails = () => {
  const { email } = useParams();
  const [data, setData] = useState({});

  const getUser = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/getonestudentt/${email}`);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <div className="profile">
        <div className="avatar">
          {
            data.photo
              ? <img style={{ objectFit: "cover" }} src={data.photo} alt="Student" />
              : <img style={{ objectFit: "cover" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxGjVtHp-iKdeRIUkAuP4jJsV1CRFTN3eyg&s" alt="Default" />
          }
        </div>
      </div>
      <div className="info">
        <div className="name">
          <label htmlFor="name">Name:<br /></label>
          <h2 className='nam'>{data.name}</h2>
        </div>
        <label htmlFor="email">STD ID:<br /></label>
        <h2 className='nam'>{data.email}</h2>

        <label htmlFor="email">Email:<br /></label>
        <h2 className='nam'>{data.email}</h2>

        <label htmlFor="password">Password:<br /></label>
        <h2 className='nam'>{data.password}</h2>

        <label htmlFor="number">Number:<br /></label>
        <h2 className='nam'>{data.number}</h2>
      </div>
    </div>
  );
};

export default StudentDetails;
