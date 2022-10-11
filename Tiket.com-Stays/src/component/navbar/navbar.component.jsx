import React  from 'react'

import { ReactComponent as TiketLogo } from '../../assets/tiketcom-home-icon-blue.svg'
import { ReactComponent as PartnershipIcon } from '../../assets/partnership-icon.svg'
import { Outlet } from 'react-router-dom'

import {
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './navbar.style.scss'

export const Navbar = () => {

    return (
      <div className='main-container-section'>
      <nav className='navbar-footer-section'>
        <div className='navbar-footer-sections'>
          <div className='navbar-footer-container'>
            <div className='navbar-footer-content-anchor'>
              <p>Register Your Properties</p>
              <p>Register Your Activities/Events</p>
              <p>Promos</p>
              <p>Help Center</p>
            </div>
            <div className="navbar-footer-content-img">
              <div className="navbar-footer-content-img-box">
                <img src='https://en.tiket.com/hotel/v3/assets/us-flag.png' alt='flag image'/>
                <FontAwesomeIcon className='navbar-footer-content-icon' icon={faChevronDown} />
              </div>
              <div className="navbar-footer-content-text-box">
                <p>IDR</p>
                <FontAwesomeIcon className='navbar-footer-content-icon' icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className='navbar-section'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
              <TiketLogo />
              <div className='navbar-anchor-feature-box'>
                  <p className='navbar-anchor-feature-text'>Flights</p>
                  <p className='navbar-anchor-feature-text'>Hotels</p>
                  <p className='navbar-anchor-feature-text'>To Dos</p>
                  <p className='navbar-anchor-feature-text'>Trains</p>
                  <p className='navbar-anchor-feature-text'>Car Rentals</p>
                  <p className='navbar-anchor-feature-text'>Events</p>
              </div>
          </div>
          <div className='navbar-anchor-container'>
              <div className='navbar-anchor-box'>
                  <p className='navbar-anchor-text'>Elite Reward</p>
                  <p className='navbar-anchor-text'>Check Order</p>
                  <button className='navbar-anchor-btn'>Login</button>
                  <button className='navbar-anchor-btn signIn'>Register</button>
              </div>
          </div>
        </div>
      </nav>
      <Outlet />
      </div>
    )
  }