import React ,{ useState } from 'react'

import { addDays , format } from 'date-fns';

// import { DateRangePicker , DateRange } from 'react-date-range';

import {
    faAngleRight,
    faDoorOpen,
    faMoon,
    faLocationDot,
    faCalendarDays,
    faStar,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './hotel-overview.style.scss'

export const HotelOverview = () => {

    const [destination , setDestination] = useState("");
    const [openDate , setOpenDate] = useState(false);
    const [date , setDate] = useState([
        {
            startDate : new Date(),
            endDate: addDays(new Date(), 1),
            key : "selection"
        }
    ]);

    const [openOptions , setOpenOptions ] = useState(false)
    const [options , setOptions] = useState({
        room: 1,
        guest: 1, 
        childern : 0,
    })


    const [slideNumber , setSlideNumber] = useState(0);
    const [open , setOpen] = useState(false)

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
      };

    const handleMove = (direction) => {
      let newSlideNumber;

      if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }

      setSlideNumber(newSlideNumber)
    };
    
    const overviewPhoto = [
        {   
            img : [
                {
                    src1 : {
                        id : 1,
                        url : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/0d3a6d24-d647-4fc1-9a38-7c999e578a76-1640663715305-ebc35e8365762d8dcc47cf80cf9eb112.jpg",
                    },
                    src2 : {
                        id: 2,
                        url : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/ac249483-47e7-4e1f-bd75-7b06d0e190a7-1640663715239-70c614981d1d8959172a3c12da9a4e84.jpg",
                    },
                    src3 : {
                        id: 3,
                        url : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/37ff6b24-c690-4c3c-b363-2f55776d2749-1640664152460-45c974af48bd58072f4f238c1fffdceb.jpg",
                    },
                    src4: {
                        id: 4,
                        url : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/3b6638c4-d45d-47e0-a9bc-fb6f65954c81-1640663715244-2d83e46151f099a6c6b4d6f2955d3c21.jpg",
                    },
                    src5 : {
                        id: 5,
                        url : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2021/12/28/120facca-021f-431a-8b98-3456009b478b-1640663715311-4b044c91a1704b5261804c5849d35401.jpg",
                    }
                }
            ]
        
            // img :"",
            // img :"",
            // img :"https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/8f4ef9f9-a40d-4e88-aebc-5f2922a69941-1604158847664-9f85e5b5223a90f408bc854b6d391e56.jpg",
            // img :"https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/e8733fc1-048d-457a-862e-02c79b7aa4aa-1604158848229-d5c202523731dd5105924023311d4922.jpg"
        }
    ]

  return (
    // <div className="hotel-overview-container-section">
    <div className='hotel-overview-section'>
        <div className='hotel-header-navigation-overview-container'>
            <span>
                Hotel
            </span>
            <FontAwesomeIcon className='hotel-header-navigation-overview-icon' icon={faAngleRight} />
            <span>
                Jakarta
            </span>
            <FontAwesomeIcon className='hotel-header-navigation-overview-icon' icon={faAngleRight} />
            <span>
                East Jakarta
            </span>
        </div>
        <div className='hotel-header-search-overview'>
            <div className="search-rooms-container-section">
            <div className="search-rooms-container">
                <div className="search-rooms-container-box">
                <div className="search-rooms-box-1">
                    <span>Destination</span>
                    <div className='search-rooms-box-1-content'>
                        <FontAwesomeIcon className='search-rooms-icon' icon={faLocationDot} />
                        <p>Jakarta</p>
                    </div>
                </div>
                <div className='search-rooms-box-container'>
                    <div className='search-rooms-box-2'>
                        <span>Check-in</span>
                        <div className='search-rooms-box-2-content'>
                            <FontAwesomeIcon className='search-rooms-icon' icon={faCalendarDays} />
                            <p>
                                {`${format(date[0].startDate, "MM/dd/yyyy")}` }
                            </p>
                        </div>
                    </div>
                    <div className="search-rooms-night">
                        <div className='search-rooms-box-2-night-content' onClick={() => setOpenDate(!openDate)}>
                            <FontAwesomeIcon className='search-rooms-icon-nights' icon={faMoon} />
                            <span>1</span>
                        </div>
                        <p>Nights</p>
                    </div>
                    <div className='search-rooms-box-2'>
                        <span>Check-out</span>
                        <div className='search-rooms-box-2-content' onClick={() => setOpenDate(!openDate)}>
                            <FontAwesomeIcon className='search-rooms-icon' icon={faCalendarDays} />
                            <p>
                                {`${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className='search-rooms-box-3-container'>
                    <div className='search-rooms-box-3'>
                        <span>Room & Guest</span>
                        <div className='search-rooms-box-3-content'>
                            <FontAwesomeIcon className='search-rooms-icon' icon={faDoorOpen} />
                            <p>1 Rooom, 2 Guest</p>
                        </div>
                    </div>
                    <div className='search-hotel-overview-rooms-button-box-3'>
                        <button>
                            Search
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="hotel-overview-card-container">
            {overviewPhoto.map((obj , idx) => {
                return(
                    <div className="hotel-overview-img-sections" key={idx}>
                        {obj.img.map((objImg , idxImg ) => {
                            return(
                                <div className='hotel-overview-img-container' key={idxImg}>
                                     <img src={objImg.src1.url} alt={objImg.src1.id}/>
                                     <div className="hotel-overview-img">
                                         <div className="hotel-overview-img-lt-1 border-side-2-up">
                                             <img src={objImg.src2.url} alt="image content"/>
                                         </div>
                                         <div  className="hotel-overview-img-lt-1">
                                             <img src={objImg.src3.url} alt="image content"/>
                                         </div>
                                         <div  className="hotel-overview-img-lt-2">
                                             <img src={objImg.src4.url} alt="image content"/>
                                         </div>
                                         <div  className="hotel-overview-img-lt-2 border-side-2-down">
                                             <img src={objImg.src5.url} alt="image content"/>
                                         </div>
                                     </div>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            <div className="hotel-overview-content-container">
                <div className="hotel-overview-content-hotel">
                    <span>Hotel</span>
                    <h2>The Langham Jakarta</h2>
                    <div className='card-room-place-container'>
                        <div className='card-room-stars-container'>
                            <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                            <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                            <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                            <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                            <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStar} />  
                            {/* <FontAwesomeIcon className='stars-card-rooms-icon' icon={faStarHalf} />   */}
                        </div>
                        <ul>
                            <li>Kebayoran Baru, Jakarta Selatan</li>
                        </ul>
                    </div>
                </div>
                <div className="hotel-overview-content-price">
                    <span>Starts From</span>
                    <h3>IDR 3.437.563</h3>
                    <p>per room per night</p>
                    <div>
                        <button>SEE ROOM</button>
                    </div>  
                </div>             
            </div>
        </div>
      
    </div>
    /* <div className='hotel-overview-section'>
        <div>
            <div>
                <p>Review</p>
            </div>
        </div>
    </div> */
    /* </div> */
  )
}