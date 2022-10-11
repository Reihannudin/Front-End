
import React from 'react'

import './hotel-facilities.style.scss'

export const HotelFacilities = () => {
  return (
    <div className='hotel-facilities-section'>
         <div className='hotel-facilities-container'>
            <h3>Facilities</h3>
            <div className='hotel-facilities-content-container'>
                <p>Popular Facility</p>
                <div className='hotel-facilities-content-box brd-btm'>
                    <div className='hotel-facilities-wrap-content'>
                        <img src ='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/ceb54c2f-f320-4b6a-90bf-d63c6ac5cd2a-1624508842051-716ef87502ee8088268c20a035be82d6.png' alt='facilities icon' />
                        <p>tiket Clean</p>
                    </div>
                </div>
            </div>
            <div className='hotel-facilities-content-container'>
                <p>Public Facilities</p>
                <div className='hotel-facilities-content-box-container'>
                    <ul className='hotel-facilities-content-box'>
                        <li>Shower</li>
                        <li>Shower</li>
                        <li>Shower</li>
                        <li>Shower</li>
                    </ul>
                </div>
            </div>
            <div className='hotel-facilities-content-container'>
                <p>In-room Facilities</p>
                <div className='hotel-facilities-content-box-container'>
                    <ul className='hotel-facilities-content-box'>
                        <li>Shower</li>
                        <li>Shower</li>
                        <li>Shower</li>
                        <li>Shower</li>
                    </ul>
                </div>
            </div>
            <div className='hotel-facilities-content-container'>
                <p>Hotel Services</p>
                <div className='hotel-facilities-content-box-container'>
                    <ul className='hotel-facilities-content-box'>
                        <li>Shower</li>
                        <li>Shower</li>
                        <li>Shower</li>
                        <li>Shower</li>
                    </ul>
                </div>
            </div>
            <div  className='hotel-facilities-content-container'>
                <p>Hotel Policy</p>
                <div className='hotel-facilities-content-box-container'>
                    <ul className='hotel-facilities-content-box'>
                        <li>Shower</li>
                        <li>Shower</li>
                        <li>Shower</li>
                        <li>Shower</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
