import { Link } from 'react-router-dom'

import './hotel-header.style.scss'

export const HotelHeader = () => {
    return(
        <div className="hotel-section-header">
              <div className='hotel-container-header'>
                  <Link  className='header-link' to='#overview-section'>
                    <div className='hotel-box-header'>
                      <p>Overview</p>
                    </div>  
                  </Link>
                  <Link  className='header-link' to='#location-section'>
                    <div className='hotel-box-header'>
                      <p>Location</p>
                    </div>  
                  </Link>
                  <Link  className='header-link' to='#room-section'>
                    <div className='hotel-box-header'>
                      <p>Room</p>
                    </div>  
                </Link>
                  <Link  className='header-link' to='#accommodation-section'>
                    <div className='hotel-box-header'>
                      <p>About Accommodation</p>
                    </div>  
                  </Link>
                  <Link  className='header-link' to='#facilities-section'>
                    <div className='hotel-box-header'>
                      <p>Facilities</p>
                    </div>  
                  </Link>
                  <Link  className='header-link' to='#reviews-section'>
                    <div className='hotel-box-header'>
                      <p>Reviews</p>
                    </div>  
                  </Link>
              </div>
        </div>
    )
}