import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAccessToken(null);
    setRefreshToken(null);
  }
  return (
    <nav>
      <div>
        <div className='logo'>
          <div className='logo_cicle'></div>
          <div className='logo_oval'></div>
        </div>
      </div>
      <div className='group_button'>
      {accessToken && refreshToken ? (<Link className='btn_signin' to={"/profile"}>Profile</Link>) : ""}
        <Link to={"/signin"} onClick={handleLogout} className='btn_signin'>{accessToken && refreshToken ? 'Logout' : "Sign In"}</Link>
      </div>
    </nav>
  )
}

export default Navbar