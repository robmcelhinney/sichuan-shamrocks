import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import { useTranslation } from "react-i18next"

const Footer  = () => {
  const { t } = useTranslation()
  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img
          src={logo}
          alt="Shamrocks Logo"
          style={{ width: '10em', height: '10em' }}
        />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: '100vw' }} className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      {t('footer.home')}
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      {t('footer.about')}
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/training">
                      {t('footer.training')}
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              <section>
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/news">
                      {t('footer.news')}
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      {t('footer.contact')}
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4 social">
              <a title={t('footer.facebook')} href="https://www.facebook.com/groups/2276841945949253">
                <img
                  src={facebook}
                  alt={t('footer.facebook')}
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title={t('footer.twitter')} href="https://twitter.com/SichuanGAA">
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt={t('footer.twitter')}
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a title={t('footer.instagram')} href="https://instagram.com">
                <img
                  src={instagram}
                  alt={t('footer.instagram')}
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
