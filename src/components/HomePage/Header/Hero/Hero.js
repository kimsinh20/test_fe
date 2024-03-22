import React from 'react'
import './Hero.css'
import hero_img from '../../../../assets/imgs/image1.png'
function Hero() {
    return (
        <div className='Hero'>
            <div className='Headline'>
                <h2>Save your data storage here.</h2>
                <p>Data Warehouse is a data storage area that has been
                    tested for security, so you can store your data here
                    safely but not be afraid of being stolen by others.</p>
                <button className='btn_lean_more'>learn more</button>
            </div>
            <img src={hero_img}></img>
        </div>
    )
}

export default Hero