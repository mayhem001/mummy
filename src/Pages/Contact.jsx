import React from 'react'
import "./Contact.css"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPhone, FaVoicemail } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact us</h1>
      <p>Contact us on our varrious social media networks and our speed dial numbers</p>
      <FaPhone size={40} className='icons' />
      <p>08067858819</p>
      <p>08033553381</p>
      <FaLinkedin size={40} className='icons'/>
      <p>CornerStone Academy</p>
      <FaFacebook size={40} className='icons'/>
      <p>CornerStone Academy</p>
      <FaInstagram size={40} className='icons'/>
      <p>CornerStone Academy</p>

        
      
    </div>
  )
}

export default Contact