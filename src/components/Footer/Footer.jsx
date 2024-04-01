
import React from 'react'
import { NavLink } from 'react-router-dom';
import './Footer.scss';
import footerlogo from '../../assets/images/footerlogo.png';



export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__logo'>
        <NavLink to="/">
          <img src={footerlogo} alt='Kasa' />
        </NavLink>
      </div>
      <p className='footer__text'>
        ⓒ  2024 Kasa. All rights reserved.

      </p>
    </footer>
  )
}
