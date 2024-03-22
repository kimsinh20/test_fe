import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='line'></div>
      <div className='footer_nav'>
        <div className='footer_info'>
          <div className='company'>
            <div className='logo'>
              <div className='logo_cicle'></div>
              <div className='logo_oval'></div>
            </div>
            <h2>DataWarehouse</h2>
          </div>
          <p className='address'>
            Warehouse Society, 234 <br />
            Bahagia Ave Street PRBW 29281
          </p>
          <span>info@warehouse.project
            <br />1-232-3434 (Main)
          </span>
        </div>

        <div className='about'>
          <h3 className='about_title'>About</h3>
          <ul className='about_list'>
            <li className='about_item'>Profile</li>
            <li className='about_item'>Features</li>
            <li className='about_item'>Careers</li>
            <li className='about_item'>DW News</li>
          </ul>
        </div>
        <div className='help'>
          <h3 className='help_title'>Help</h3>
          <ul className='help_list'>
            <li className='help_item'>Support</li>
            <li className='help_item'>Sign up</li>
            <li className='help_item'>Guide</li>
            <li className='help_item'>Reports</li>
            <li className='help_item'>Q&A</li>
          </ul>
        </div>
        <div className='social_media'>
          <h3 className='social_media_title'>Social media</h3>
          <ul className='social_media_list'>
            <li className='social_media_item'></li>
            <li className='social_media_item'></li>
            <li className='social_media_item'></li>
          </ul>
        </div>
      </div>
      <div className='footer_bottom'>
        <div className='bottom_left'>
          © Datawarehouse™, 2020. All rights reserved.<br />
          Company Registration Number: 21479524.
        </div>
        <div className='bottom_right'>
          <div className='cicle'>
            <div className='chat'>
              <div></div>
              <div></div>
              <div></div>
              <span className='trigle'></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer