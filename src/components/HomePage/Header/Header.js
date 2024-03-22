import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero.js'


function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <Hero/>
    </div>
  )
}

export default Header