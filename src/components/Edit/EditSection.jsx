import React from 'react'
import '../styles/EditSection.css'

function EditSection() {

  const handleLogout = () => {
    // Clear the user session and local storage
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');

    // Redirect the user to the login page
    this.props.history.push('/login');
  };


  
  return (
    <div className='nav-edit'>
        <div className="nav-links">
            <li><a href="http://localhost:3000/homepage/Edituser"><button className='edit-btn'>Edit Profile</button></a></li>
            <li><a href="http://localhost:3000/login"><button onClick={handleLogout} className='edit-btn'>Log Out</button></a></li>

        </div>
    </div>
  )
}

export default EditSection