import React from 'react'
import { NavLink } from 'react-router-dom';
import './Header.scss';
import headerLogo from "../../assets/images/headerLogo.png"

export default function Header() {
  return (
    <header className='header'>
      <div className='header__logo'>
        <NavLink to="/">
          <img src={headerLogo} alt="logo d'entête" />
        </NavLink>
      </div>
      <nav className='header__nav'>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'header__nav__link isActive' : 'header__nav__link'
          }
          to="/">
          Accueil
        </NavLink>
        <NavLink
          className={(({ isActive }) =>
            isActive ? 'header__nav__link isActive' : 'header__nav__link'
          )}
          to="/a-propos">
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}