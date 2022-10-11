import React from 'react'
import { HotelAccomodation } from '../../../component/hotel/hotel-accomondation/hotel-accomondation.component'
import { HotelHeader } from '../../../component/hotel/hotel-header/hotel-header.component'
import { HotelLocation } from '../../../component/hotel/hotel-location/hotel-location.component'
import { HotelOverview } from '../../../component/hotel/hotel-overview/hotel-overview.component'
import { HotelReviews } from '../../../component/hotel/hotel-review/hotel-review.component'
import { HotelRoom } from '../../../component/hotel/hotel-room/hotel-room.component'
import { Footer } from '../../../component/footer/footer.component'

import { Link } from 'react-router-dom'

import './hotel.style.scss'
import { HotelFacilities } from '../../../component/hotel/hotel-facilities/hotel-facilities.component'

export const Hotel = () => {
  return (
    <div className='hotel-section'>
       <HotelHeader />
      <HotelOverview id='overview-section'  />
      <HotelLocation  id='location-section' />
      <HotelRoom id='room-section' />
      <HotelAccomodation id='accomodation-section'  />
      <HotelFacilities />
      <HotelReviews id='review-section' />
      <div className='hotel-footer'>
        <Footer />
      </div>
    </div>
  )
}
