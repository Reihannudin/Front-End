
import React , { useState } from 'react'

import {
  faLocationDot,
  faCaretUp,
  faChevronDown,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './hotel-review.style.scss'

export const HotelReviews = () => {

  const [openReviewSort , setOpenReviewSort] = useState(false);
  const [openReviewFilter , setOpenReviewFilter] = useState(false);

  const hotelReviewAvg = [
    {
      title : "Cleanliness",
      rating : 4.8
    },
    {
      title : "Facilities",
      rating : 4.7
    },
    {
      title : "Location",
      rating : 4.8
    },
    {
      title : "Service",
      rating : 4.6
    },
    {
      title : "Value",
      rating : 4.4
    }
  ]

  const hotelReviewCount = [
    {
      title : "Couple Trip",
      rating : 33
    },
    {
      title : "Family Trip",
      rating : 454
    },
    {
      title : "Solo Trip",
      rating : 8
    },
    {
      title : "Trip with Friends",
      rating : 8
    },
    {
      title : "Business Trip",
      rating : 8
    },
    {
      title : " Others",
      rating : 2
    },
  ]

  const ReviewsData = [
    {
      name : "Andrian Raihannudin",
      date : "24 Oct 2022",
      type : "Couple Trip",
      rating : 4.8,
      reviews : "Everything was great! i really high recommend you guys to try their club. The most stunning and luxury hotel in town. All staff are very friendly and helpful. Hope to see you soon, Thanks Langham Jakarta.",
      photos : [
        {
          img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/review/2021/12/17/4de22f9b-ca91-4e3e-872b-5f74c54be86a-1639677263662-60e66911194460be3d3ecfa866096619.jpg"
        },
        {
          img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/review/2021/12/17/03eec681-4098-4c30-afba-5645de4a6566-1639677263921-5c35cdc9408b0e4e7778979719d4784e.jpg"
        },
        {
          img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/review/2021/12/17/f073676e-3253-4e3d-a40a-3ea7a2a0fe02-1639677264100-c55748506438d8ea6466b47e96f31d88.jpg"
        },
      ],
      mosthelp : 4
    },
    {
      name : "Nadia Fairuzh",
      date : "24 Mar 2022",
      type : "Couple Trip",
      rating : 5.0,
      reviews : "Pricey but worth it, huge room, amazing views, strategic location, friendly staff.",
      photos : [
      ],
      mosthelp : 2
    },
    {
      name : "Ahmad Ziyaad Sabiq",
      date : "8 Aug 2022",
      type : "Solo Trip",
      rating : 3.6,
      reviews : "Great location, good view, looks fancy. Mungkin karena aku booking di tiket.com jadi ga begitu flexible mau ubah kamar dan reseptionist check-in did not helpful. Karena waktu beli tidak ada pilihan twins bed, jadi saya buat request. Namun waktu check in diminta tambah. Well, akhir say putusin untuk check in dan lihat kamar secara booking dari tiket com ga bisa di cancel. Kamar standard tidak begitu luas dan begitu mengejutkan bahwa jarak dengan bangunan kantor sebelah begitu dekat sehingga sangat tidak nyaman karena serasa banyak mata melihat kita di kamar. Saya sendiri tidak begitu nyaman. Saya coba melihat ke tempat gym dan indoor pool di lantai atasnya. Ruang gym kecil dan ramai Ibu-Ibu. Begitu juga kolam renang. View kolam renang bagus. Saya tidak pergi ke kolam outdoor. Overall akhirnya sayang tidak jadi nginap. Saya kasih kamar ke teman, saya minta teman untuk take away breakfast namun tidak diizinkan sama pihak hotel. Overall, saya merasa Langham Jakarta berbeda jauh dengan Langham lainnya. Tidak begitu memuaskan bagi saya, front officers mostly are young adults, yang servicenya tidak kelihatan begitu genuine. Dengan harga Langham saya rasa hotel bintang 5 lainnya lebih baik",
      photos : [
        {
          img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/review/2022/03/07/f6a283e4-053d-4211-8803-f387e758203a-1646665489606-c98f1fa7dae5444c12def869b9e71892.jpg"
        },
      ],
      mosthelp : 2
    },
  ]

  return (
    <div className='hotel-review-section'>
        <h3>Review</h3>
        <div className='hotel-review-container'>
          <div className='hotel-review-header-container'>
              <div className='hotel-review-header-box'>
                <div className='hotel-review-header-box-rating'>
                  <h2>4.6</h2>
                </div>
                <div className='hotel-review-header-box-reviewers'>
                   <p>Fantastic</p>
                   <span>From 210 reviews</span>
                </div>
              </div>
              <div className='hotel-review-header-container'>
                  <div className='hotel-review-header-filter-container'>
                    <h3>Sort</h3>
                    <div className='hotel-review-header-filter-box' onClick={() => setOpenReviewSort(!openReviewSort)}>
                        <p>Most Helpful</p>
                        <FontAwesomeIcon className='hotel-review-header-filter-dropdown' icon={faChevronDown} />
                    </div>
                    {openReviewSort && (
                      <div className='hotel-review-open-card-section'>
                        <div className='hotel-review-open-card-container'>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Most helpful</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Latest</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Highest Rating</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Lowest Rating</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className='hotel-review-header-filter-container'>
                    <h3>Filter</h3>
                    <div className='hotel-review-header-filter-box' onClick={() => setOpenReviewFilter(!openReviewFilter)}>
                        <p>All</p>
                        <FontAwesomeIcon className='hotel-review-header-filter-dropdown' icon={faChevronDown} />
                    </div>
                    {openReviewFilter && (
                      <div className='hotel-review-open-card-section-filter'>
                        <div className='hotel-review-open-card-container'>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>All</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Solo Trip</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Family Trip</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Couple Trip</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Trip with Friends</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Business Trip</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Medical Trip</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Others</p>
                          </div>
                          <div className='hotel-review-open-card-box'>
                            <input type='radio'/>
                            <p>Reviews with photos</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
              </div>
          </div>
          <div className='hotel-review-content-container'>
            <div className='hotel-review-content-avg-review'>
                <div className='hotel-review-avg-container'>
                  {hotelReviewAvg.map((obj , idx) => {
                    return(
                      <div className='hotel-review-avg-box' key={idx}>
                        <p>{obj.title}</p>
                        <span>{obj.rating}</span>
                      </div>  
                    )
                  })}
                </div>
                <div className='hotel-review-avg-container'>
                  {hotelReviewCount.map((obj , idx) => {
                    return(
                      <div className='hotel-review-avg-box' key={idx}>
                        <p>{obj.title}</p>
                        <span>{obj.rating}</span>
                      </div>  
                    )
                  })}
                </div>
            </div>
            <div className='hotel-reviews-content-section'>
              <div className='hotel-reviews-content-container'>
              {ReviewsData.map((obj ,idx) => {
                return(
                  <div className='hotel-reviews-content-box'>
                    <div className='hotel-reviews-content-header'>
                      <img src='https://en.tiket.com/hotel/v3/assets/avatar-solo-m.png'/>
                      <div className='hotel-reviews-content-header-content'>
                        <p>{obj.name}</p>
                        <div className='hotel-reviews-content-header-text'>
                          <span>{obj.date}</span>
                          <p>-</p>
                          <span>{obj.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="hotel-reviews-content">
                        <div className="hotel-reviews-content-rating">
                          <span>{obj.rating}/5</span>
                        </div>
                        <p className="hotel-reviews-content-reviews">
                        {obj.reviews}
                        </p>
                        <div className="hotel-reviews-content-review-img-container">
                        {obj.photos.map((objImg ,idxImg) => {
                          return(
                            <div className="hotel-reviews-content-review-img">
                              <img src={objImg.img} alt='review-img'/>
                            </div>
                          )
                        })}
                        </div>
                        <div className="hotel-review-content-review-help">
                          <FontAwesomeIcon className='hotel-review-content-review-help-thumbs' icon={faThumbsUp} />
                          <span>{obj.mosthelp}</span>
                          <span>people found this helpful.</span>
                        </div>
                    </div>
                  </div>
                )
              })}
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}