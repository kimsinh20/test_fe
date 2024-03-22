import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }
    return (
        <div className='nav_link'>
            <div id='logo'>
                <div id='logo_cicle'></div>
                <div id='logo_oval'></div>
            </div>
            <Link className='link' id='link_post' to={'/post'}>Post</Link>
            <Link className='link' id='link_logout' onClick={handleLogout} to={'/signin'}>Logout</Link>
        </div>
    )
}

export default Nav