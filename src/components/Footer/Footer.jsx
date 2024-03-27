
import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.css';
import '../assets/images/footerlogo.png';
import footerlogo from '../assets/images/footerlogo.png';



export default function Footer() {
  return (
    <div className='footer'>
      {/* className = "img-fluid" utilisation pour que la résolution de l'image ne se détériore pas sur les appareils mobiles ou lorsque nous réduisons l'écran.. */}
      <div className='footer-logo'>
        <NavLink to="/">
          <img src={footerlogo} alt='Kasa' />
        </NavLink>
      </div>
      <p className='footer-text'>
        ⓒ  2024 Kasa. All rights reserved.

      </p>
    </div>
  )
}
