import React, { useState } from 'react'
import './SignInForm.css'
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const [username, setUsername] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await fetch('https://agiletech-test-api.zeabur.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
      });
      console.log(response);
     

      const { accessToken, refreshToken } = await response.json();
      if (!accessToken && !refreshToken) {
        throw new Error('Đăng nhập thất bại');
      }
      navigate("/");

      // Xử lý thành công đăng nhập
      console.log('Đăng nhập thành công');

      // lưu token vào localStorage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    } catch (error) {
      // Xử lý lỗi đăng nhập
      alert('Đăng nhập thất bại:', error);
    }
  };
  return (
    <section className='signin'>
      <div className='logo'>
        <div className='logo_cicle'></div>
        <div className='logo_oval'></div>
      </div>
      <form className="signin-container">
        <h2 className="signin-title">Sign In</h2>
        <div className="signin-form">
          <label className="signin-label" htmlFor="username">Username</label>
          <input className="signin-input" onChange={handleUsernameChange} value={username} type="text" id="username" />
          <button type='button' className="signin-button" onClick={handleLogin}>Sign In</button>
        </div>
      </form>
    </section>
  )
}

export default SignInForm