
import React from 'react'

import './hotel-accomondation.style.scss'

export const HotelAccomodation = () => {
  return (
    <div className='hotel-accomondation-section'>
        <h3>About Accommodation</h3>
        <div className='hotel-accomodation-container'>
          <p>Description</p>
          <div className='hotel-accomodation-content'>
            <div className='hotel-accomodation-content-box'>
              <p>
              The Langham Jakarta welcomes you to a luxurious stay in the center of Sudirman Central Business District, South Jakarta. Boasting the city skyline views, the 5-star hotel features an outdoor swimming pool and a health club at its 63rd floor.
              <br/>              
              <br/>             
              The hotel’s spacious rooms have classic designs and are equipped with elegant furnishings. The marble bathroom comes with a bathtub, a hairdryer, and free toiletries. Room amenities include a flat-screen satellite TV, coffee/tea making facilities, and a minibar. Some rooms offer Jakarta panoramic city views.
              <br/>              
              <br/>              
              The Langham Jakarta offers an exquisite dining experience at its 3 on-site restaurants. Enjoy authentic Cantonese flavors while overlooking the city skyline at the award-winning T’ang Court. Brunch with modern French brasserie and patisserie are available at Alice, while Tom’s by Tom Aikens serves British and European specialties.
              <br/>              
              <br/>              
              Revitalize your mind and body with various calming treatments at the hotel’s Chuan Spa. Friendly staff at the hotel can assist you with any queries such as airport transfers, valet services, and luggage storage.
              <br/>              
              <br/>              
              The Langham Jakarta is located 350 meters away from ASHTA District 8, 1 km away from Pacific Place, and 3 km away from Gelora Bung Karno Sports Complex. Soekarno-Hatta International Airport is 27.8 km away from the hotel.
              </p>
            </div>
          </div>
        </div>
        <div className='hotel-accomodation-container'>
          <p>Announcement</p>
          <div className='hotel-accomodation-content'>
              <img />
              <span>Children aged under 18 are not allowed to access The Langham Club</span>
          </div>
        </div>
        <div className='hotel-accomodation-container'>
          <p>Check-in & check-out time</p>
          <div className='hotel-accomodation-content'>
              <div className='hotel-accomodation-content-box2'>
                 <div className='hotel-accomodation-content-box2-value'>
                    <p>Check-in time: </p>
                    <h4>15:00-23:59</h4>
                 </div>
                 <div className='hotel-accomodation-content-box2-value'>
                    <p>Check-out time: </p>
                    <h4>12:00</h4>
                 </div>
              </div>
              <span className="hotel-accomodation-content-box2-footer">Do you want to check-in early? Arrange check-in time with the accommodation</span>
          </div>
        </div>
        <div className='hotel-accomodation-container'>
          <p>Policy</p>
          <div className='hotel-accomodation-content'>
            <div className='hotel-accomodation-content-box'>
              <h3>Children</h3>
              <p>Guests of all ages are welcome to stay. Children ages 17 years old and above will be considered as adults. Please make sure that the children’s age is consistent with the information listed on your booking details. Otherwise, you may have to pay additional fees upon check-in.</p>
            </div>
            <div className='hotel-accomodation-content-box'>
              <h3>Deposit</h3>
              <p>Guests need to pay a deposit at check-in.</p>
            </div>
            <div className='hotel-accomodation-content-box'>
              <h3>Age</h3>
              <p>Guests of all ages are welcome to stay</p>
            </div>
            <div className='hotel-accomodation-content-box'>
              <h3>Breakfast</h3>
              <p>Breakfast is available from 06:30 - 10:30 local time.</p>
            </div>
            <div className='hotel-accomodation-content-box'>
              <h3>Pets</h3>
              <p>No pets allowed.</p>
            </div>
            <div className='hotel-accomodation-content-box'>
              <h3>Smoking</h3>
              <p>No smoking room.</p>
            </div>
            <div className='hotel-accomodation-content-box'>
              <h3>Alcohol</h3>
              <p>Alcohol drinks allowed</p>
            </div>
          </div>
        </div>
    </div>
  )
}