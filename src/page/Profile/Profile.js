import React from 'react'
import Nav from '../../components/Profile/Nav/Nav'
import Datable from '../../components/Profile/DataTable/Datable'
import './Profile.css'

function Profile() {
  return (
    <section className='profile'>
        <Nav/>
        <Datable/>
    </section>
  )
}

export default Profile