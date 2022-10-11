import React from 'react'

import {
  faWifi,
  faUtensils,
  faBed,
  faPerson,
  faMinimize
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './hotel-room.style.scss'

export const HotelRoom= () => {
  return (
    <div className="hotel-room-section">
        <div className='hotel-room-container'>
            <div className='hotel-room-box-img'>
                <img src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2022/02/25/10e02905-a6af-41e5-a55f-49fbc9d66cfd-1645761322887-bd24cfeae277d36658fe8f9c0770a01f.jpg' alt='hotel-room'/>
                <h2>King Deluxe Room</h2>
            </div>
            <div className='hotel-room-box-content'>
                <div className='hotel-room-hotels-content'>
                  <h2>Deluxe King Room</h2>
                  <div className='hotel-room-hotel-facility'>
                    <div>
                      <FontAwesomeIcon className='hotel-room-content-facilities-icon' icon={faUtensils} />
                      <span>Breakfast not included</span>
                    </div>
                    <div>
                      <FontAwesomeIcon className='hotel-room-content-facilities-icon' icon={faWifi} />
                      <span>Wifi</span>
                    </div>
                  </div>
                  <div className='hotel-room-hotel-quantity'>
                  <FontAwesomeIcon className='hotel-room-content-facilities-icon' icon={faBed} />
                    <span>1 King</span>
                  </div>
                  <div className='hotel-room-hotel-quantity'>
                  <FontAwesomeIcon className='hotel-room-content-facilities-icon' icon={faPerson} />
                    <span>2 Guest</span>
                  </div>
                  <div className='hotel-room-hotel-quantity'>
                  <FontAwesomeIcon className='hotel-room-content-facilities-icon' icon={faMinimize} />
                    <span>42m²</span>
                  </div>
                </div>
                <div className='hotel-room-administration'>
                  <p>See Details</p>
                  <div className='hotel-room-price'>
                    <h4>IDR 4.000.000</h4>
                    <span>per room per night</span>
                    <div className='hotel-room-price-btn'> 
                      <button>SELECT</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
    </div>
  )
}