import React from 'react'
import './Features.css'
import img1 from '../../../assets/imgs/image3.png'
import img2 from '../../../assets/imgs/image4.png'
import img3 from '../../../assets/imgs/image5.png'
import img4 from '../../../assets/imgs/image6.png'
function Features() {
    return (
        <div className='features'>
            <div className='feature_title'>
                <h2>Features</h2>
                <p>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</p>
            </div>
            <ul className='feature_list'>
                <li className='feature_item' id='item1'>
                    <img src={img1} alt='search'></img>
                    <div className='feature_box'>
                        <h2>Search Data</h2>
                        <p>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</p>
                        <button>
                            Learn more
                            <div className='arrow'>
                                <div className='shaft'></div>
                                <div className='head'></div>
                            </div>
                        </button>
                    </div>
                </li>
                <li className='feature_item' id='item2'>
                    <img src={img2} alt='search'></img>
                    <div className='feature_box'>
                        <h2>24 Hours Access</h2>
                        <p>Access is given 24 hours a full morning to night and
                            meet again in the morning, giving you comfort when
                            you need data when urgent.</p>
                        <button>
                            Learn more
                            <div className='arrow'>
                                <div className='shaft'></div>
                                <div className='head'></div>
                            </div>
                        </button>
                    </div>
                </li>
                <li className='feature_item' id='item3'>
                    <img src={img3} alt='search'></img>
                    <div className='feature_box'>
                        <h2>Print Out</h2>
                        <p>Print out service gives you convenience if someday
                            you need print data, just edit it all and just print it.</p>
                        <button>
                            Learn more
                            <div className='arrow'>
                                <div className='shaft'></div>
                                <div className='head'></div>
                            </div>
                        </button>
                    </div>
                </li>
                <li className='feature_item' id='item4'>
                    <img src={img4} alt='search'></img>
                    <div className='feature_box'>
                        <h2>Security Code</h2>
                        <p>Data Security is one of our best facilities. Allows for your files
                            to be safer. The file can be secured with a code or password that
                            you created, so only you can open the file.</p>
                        <button>
                            Learn more
                            <div className='arrow'>
                                <div className='shaft'></div>
                                <div className='head'></div>
                            </div>
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Features