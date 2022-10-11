
import React from 'react'

import {
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './hotel-location.style.scss'

function Redirect() {
  window.location.replace(`https://www.google.com/maps/place/6%C2%B013'37.6%22S+106%C2%B048'23.0%22E/@-6.227097,106.806396,17z/data=!4m4!3m3!8m2!3d-6.227097!4d106.806396`)
}

export const HotelLocation = () => {
  return (
    <div className='hotel-location-section'>
      <div className='hotel-location-container-1'>
          <div className='hotel-location-box-1'>
            <h3>Location</h3>
            <div className='hotel-location-box-1-sections'>
                <FontAwesomeIcon className='hotel-location-icon' icon={faLocationDot} />
                <p>District 8, SCBD, Lot 28 Jakarta, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190, Indonesia</p>
            </div>
          </div>
      </div>
      <div className='hotel-location-container-2'>
        <div className='hotel-location-box-2'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.27750036548!2d106.80639599999999!3d-6.227097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e95a0ff7aa9fca3!2zNsKwMTMnMzcuNiJTIDEwNsKwNDgnMjMuMCJF!5e0!3m2!1sen!2sid!4v1664458836213!5m2!1sen!2sid"></iframe>
          <div className='hotel-location-box-2-btn'>
            <a  href="https://www.google.com/maps/place/6%C2%B013'37.6%22S+106%C2%B048'23.0%22E/@-6.227097,106.806396,17z/data=!4m4!3m3!8m2!3d-6.227097!4d106.806396">
             <button >See on Map</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}