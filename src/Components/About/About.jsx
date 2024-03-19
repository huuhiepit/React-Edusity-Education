import React from 'react'
import './About.css'
import about_img from '../../images/about.png'
import play_icon from '../../images/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} className='about-img' alt="" />
            <img src={play_icon} className='play-icon' alt="" />

        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>
                Welcome to Greenwood University, where academic excellence meets endless possibilities! Our campus is a vibrant hub of learning, innovation, and community. 
                With state-of-the-art facilities, dedicated faculty, and a diverse student body, we foster a dynamic environment for growth and discovery. 
            </p>
            <p>
                From cutting-edge research to hands-on experiential learning, we provide a comprehensive education that prepares students for success in an ever-changing world. 
                At Greenwood, you'll find endless opportunities to expand your horizons, pursue your passions, and shape a brighter future. 
                Join us and embark on a transformative journey of knowledge and opportunity!
            </p>
            <p>
                Nestled in the heart of our bustling city, Greenwood University boasts a picturesque campus adorned with lush greenery and modern architecture. 
            </p>
        </div>

    </div>
  )
}

export default About