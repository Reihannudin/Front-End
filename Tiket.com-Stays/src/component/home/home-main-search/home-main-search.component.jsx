
import React from 'react'
// , { useState , useEffect } 

import { ReactComponent as TiketLogo } from '../../../assets/tiketcom-home-icon.svg'
import { ReactComponent as PartnershipIcon } from '../../../assets/handshake_FILL0_wght400_GRAD0_opsz48 1-white.svg'
import { useNavigate } from "react-router-dom";

import {
    faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './home-main-search.style.scss'

export const HomeMainSearch = () => {

    const navigate = useNavigate();

    // const [navbar , setNavbar] = useState(false)
    const handleSearch = () => {
        navigate("stays");
    };
  return (
    <div className='home-main-search-section'>
        <img src='https://i.pinimg.com/originals/e2/45/47/e24547b6d0b63924294191179d76e798.jpg' alt='background-image'/>
        <div className='home-main-search-navbar-section active'>
        <div className='home-main-search-navbar-container'> 
            <div className='navbar-logo'>
              <TiketLogo />
            </div>
            <div className='navbar-anchor-container'>
              <div className='navbar-anchor-box'>
                  <p className='navbar-anchor-text white'><PartnershipIcon className='navbar-icon white'/> Be Partner of tiket.com</p>
                  <p className='navbar-anchor-text  white'>Elite Reward</p>
                  <button className='navbar-anchor-btn f-18 transparent white'>Sign In</button>
                  <button className='navbar-anchor-btn f-18 signIn white bg-blue no-border'>Sign Up</button>
              </div>
          </div>
        </div>
        <div className='home-main-search-content-container'>
            <div className='home-main-search-box-container'>
                <div className='home-main-search-box-text'>
                    <h3>Hey there, </h3>
                    <h2>going anywhere?</h2>
                </div>
                <div className='home-main-search-input'>
                    <FontAwesomeIcon className='home-main-icon-box' icon={faSearch} />
                    <input placeholder='Event in Jakarta'/>
                </div>
                <div className='home-main-search-feature-container'>
                    <div className='home-main-search-feature-box'>
                        <img src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/vertical/2022/08/16/92cf7c03-41fe-486f-bd60-f82cade0181d-1660611754235-31487f961874c2519a3e6f697849c913.png' alt='Flights' />
                        <p>Flights</p>
                    </div>
                    <div className='home-main-search-feature-box' onClick={handleSearch}>
                        <img src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/vertical/2022/08/16/3aa42d9b-c48e-46e9-b4d9-47b3e2ca5141-1660611776003-cb9e12064c3a6984c945e77b07437340.png' alt='Hotels' />
                        <p>Hotels</p>
                    </div>
                    <div className='home-main-search-feature-box'>
                        <img src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/vertical/2022/08/16/41544952-2769-46a4-8f3a-3f3712b449a9-1660611802388-f4e39ef115c07d010c7bb3fbd7158949.png' alt='To Dos' />
                        <p>To Dos</p>
                    </div>
                    <div className='home-main-search-feature-box'>
                        <img src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/vertical/2022/08/16/5807e6c0-6df3-4db1-a208-d285ff441f1f-1660611823059-b745fe4926ae2d13670a0e7643a29392.png' alt='Trains' />
                        <p>Trains</p>
                    </div>
                    <div className='home-main-search-feature-box'>
                        <img src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/vertical/2022/08/16/5a79e376-a33e-4e34-a51d-21abbe856c6a-1660611842992-8c5cf71c0df09095e579768f1b0fe418.png' alt='Car Rentals' />
                        <p>Car Rentals</p>
                    </div>
                    <div className='home-main-search-feature-box'>
                        <img src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-low/vertical/2022/08/16/da819236-f4d4-43f3-a0ad-ece1f9e4b814-1660611860900-795097ed6a67de4d41bfb7403645431e.png' alt='Event' />
                        <p>Event</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
