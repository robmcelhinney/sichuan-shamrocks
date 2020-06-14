import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import LanguageMenu from './LanguageMenu.js'
import { useTranslation } from "react-i18next"

const Navbar  = () => {
  const [active, setActive] = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  const toggleHamburger = () => {
    // toggle the active boolean in the state
    setActive(!active)
    !active ? setNavBarActiveClass('is-active')
      : setNavBarActiveClass('')
  }

  const { t } = useTranslation()

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={logo} alt="Shamrocks Logo" className={"navLogo"} />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navBarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              {t('navbar.about')}
            </Link>
            <Link className="navbar-item" to="/training">
              {t('navbar.training')}
            </Link>
            <Link className="navbar-item" to="/news">
              {t('navbar.news')}
            </Link>
            <Link className="navbar-item" to="/contact">
              {t('navbar.contact')}
            </Link>
            {/* <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link> */}
            <LanguageMenu></LanguageMenu>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
