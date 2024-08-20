import { Link } from 'react-router-dom'
import React
 from 'react'
function home() {


  return (
    <>


<div className="container">
     
      <div className="contacts-header">
        <Link to={'/login'}>         <button className="add-button">log in</button>
        </Link>
       
      </div>
  
    
      <div className="contact-list">






       
      </div>
    </div>
















    </>
  )
}

export default home