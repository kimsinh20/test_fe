import React from 'react'
import Header from '../../components/HomePage/Header/Header'
import Features from '../../components/HomePage/Features/Features'
import Testimonials from '../../components/HomePage/Testimonials/Testimonials'
import Footer from '../../components/HomePage/Footer/Footer'

function HomePage() {
  return (
    <div>
        <Header/>
        <Features/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default HomePage