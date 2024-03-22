import React, { useState } from 'react'
import './Testimonials.css'
import avatar from '../../../assets/imgs/Ellipse.png'

const Testimonials = () => {
    const [index, setIndex] = useState(1);
    const dataSlider = [
        {
            id: 1,
            name: 'John Fang ',
            website: 'wordfaang.com',
            text: 'Suspendisse ultrices at diam lectus nullam.Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'
        },
        {
            id: 2,
            name: 'khoa pub',
            website: 'khoapub.com',
            text: 'A YouTube personality in Vietnam known for his travel reviews has come under criticism for displaying impolite behaviors and making condescending comments about a waitress in a recent video shot at a restaurant in Japan.'
        },
        {
            id: 3,
            name: 'elon musk',
            website: 'tesla.com',
            text: 'Elon Musk, né le 28 juin 1971 à Pretoria, est un entrepreneur, chef dentreprises et milliardaire sud-africain, canadien et américain. Il est cofondateur et président-directeur général de la société astronautique SpaceX et directeur général de la société automobile Tesla.'
        },
        {
            id: 4,
            name: 'elena smift',
            website: 'wordfaang.com',
            text: 'Suspendisse ultrices at diam lectus nullam.Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.'
        },
    ]
    const prev = () => {
        if (index > 1) {
            setIndex(index - 1);
        } else {
            setIndex(index);
        }
    }
    const next = () => {
        if (index < 4) {
            setIndex(index + 1);
        } else {
            setIndex(dataSlider.length);
        }
    }
    const choiseIndex = (i) => {
        setIndex(i);
    }
    return (
        <div className='Testimonial'>
            <h2>Testimonials</h2>
            <div className='slide'>
                <div className='arrow_left' onClick={prev}>
                    <div className='shaft'></div>
                    <div className='head'></div>
                </div>
                <div className='slide_main'>
                    {dataSlider.map((obj, i) => {
                        return (
                            <div key={obj.id} className={index === obj.id ? 'slide_content_active' : 'slide_content'}>
                                <img src={avatar} alt='img'></img>
                                <div className='main_content'>
                                    <h3>{obj.name} </h3>
                                    <span>{obj.website}</span>
                                    <p>{obj.text}</p>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='arrow_right' onClick={next}>
                    <div className='shaft'></div>
                    <div className='head'></div>
                </div>
            </div>
            <div className='container_dots'>
                {dataSlider.map((e, i) => {
                    return (
                        <div key={i} className={index === i + 1 ? 'dot_active' : 'dot'}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonials