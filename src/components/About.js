import React, { useState, useEffect } from 'react'
import './About.css';
import pic2 from '../images/mars_image.jpg'

function About() {
    return (
        <div className='planetPic'>
            <p>This will be where you can get to know me a little and learn some fun facts.</p>
            <img id='interest' src={pic2} alt='mars' />
        </div>
    )
}
export default About
