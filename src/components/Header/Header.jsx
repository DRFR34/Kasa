import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.scss';
import headerLogo from "../../assets/images/headerLogo.png"


export default function Header() {
  return (
    <div className='header'>
      <div className='headerLogo'>
        <NavLink to="/">
          <img src={headerLogo} alt='header logo"' />
        </NavLink>
      </div>
      <ul className='nav'>
        <li className='nav-item item1'><NavLink className='nav-link' to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Accueil</NavLink></li>
        <li className='nav-item item2'><NavLink className='nav-link' to='/a-propos' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>A Propos</NavLink></li>
      </ul>
    </div>

  )
}
