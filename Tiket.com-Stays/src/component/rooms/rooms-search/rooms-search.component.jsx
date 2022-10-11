import React , { useState }from 'react';

import { addDays , format } from 'date-fns';

import {
    faBed,
    faDoorOpen,
    faMoon,
    faTag,
    faLocationDot,
    faCalendarDays,
    faBookOpenReader,
    faStar,
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DateRangePicker , DateRange } from 'react-date-range';

import './rooms-search.style.scss'

export const RoomsSearch = () => {

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

    const [openFilterPrice , setOpenFilterPrice ] = useState(false)
    const [ optionsFilterPrice , setOptionsFilterPrice ] = useState({
        minPrice : 0,
        rangePrice : 0,
        maxPrice : 15000000,
        reset : 0

    })


    const [openFilterArea , setOpenFilterArea] = useState(false)
    const [ optionsFilterArea , setOptionsFilterArea ] = useState({
        areaFilter : []
    })

    const [openFilterStar , setOpenFilterStar] = useState(false)
    const [ optionsFilterStar , setOptionsFilterStar ] = useState({
        star : 0
    })

    const [openFilterMore , setOpenFilterMore ] = useState(false)

    const handleOption = (name , operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name] : operation === "i" ? options[name] + 1 : options[name] -1
            }
        })
    }

    const filterFacilities = [
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/1e1c1576-921e-4194-886f-402be9d9e98a-1624509048457-3cc87b0824e9092916de07b32990c0d2.png",
            headline : "InDOnesia CARE"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/ceb54c2f-f320-4b6a-90bf-d63c6ac5cd2a-1624508842051-716ef87502ee8088268c20a035be82d6.png",
            headline : "tiket CLEAN"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/64308875-2c0c-49b8-ada0-2f5aa4a03b9b-1624508866246-987a94b61c053348f6b048a3689ef1bc.png",
            headline : "Swimming Pool"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/e439ddaa-1776-4456-b696-7625d0c9b0cb-1624508530038-65a302eaec7741c09624187f7edcf123.png",
            headline : "WiFi"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/067d9b51-5efc-4b49-9a33-faf7966074e5-1624509093161-683494af2a0384bb725f509b2959264a.png",
            headline : "Parking"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/dcb6701d-2f8c-42fe-bc08-7ef896eec21e-1624508918904-f806c7e3964dee2f86595fe8f1884598.png",
            headline : "Restaurant"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/b77d1fa4-55d1-4d33-b375-62905129cf2b-1624508793197-ebb347eef8a351ec5f57338a1b68bb34.png",
            headline : "24-hour Front Desk"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/9c5af805-a940-4d89-a480-b7bf99f24e3a-1624508895148-71a95375c30f96c7ae604de4842cd109.png",
            headline : "Spa"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/248d8367-f9d9-40a4-b53f-8502d620e9a6-1624509154681-6ece1f1028ee4dc5473afbe81354cfd7.png",
            headline : "Elevator"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/19802cb1-facf-4d9b-b859-260a05bf174b-1624509305726-68a4704f9508bd74c93f55e8dd0442ee.png",
            headline : "AC"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/605d9527-c201-4aaa-9c26-97c2627e0e63-1624509120468-ccee131f4b36ba68c571f3c54ff1c8bb.png",
            headline : "Fitness Center"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/e823ddd1-0126-48ea-8798-b77367760fcd-1624509282574-c7c56dd27bef1df63e338225873544cd.png",
            headline : "Airport Transfer"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/e7b76f9a-e274-4c10-b530-828ad58ba171-1624508952051-ebafe2e3e76010eb6d57f2c1e61f24a6.png",
            headline : "Meeting Facilities"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/1eb59ebf-344f-407f-8b36-156fd604763d-1624508724744-8b4760c69c411d96436ccd6d379ce591.png",
            headline : "Wheelchair Access"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/54b69d2e-586b-41e9-8475-99093e4b8421-1624509748988-94606c1120ce20c2cb278101d0d34001.png",
            headline : "Children Facility"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/07/19/536048cb-1ceb-47b8-9b41-d8727901d4a0-1626675669767-3d21f0ca91d55b678b3869aa33a56d8e.png",
            headline : "Covid-19 Vaccination"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/12/21/50da01bc-204c-4c50-9390-c3b1f5502963-1640062067185-83ccc154abdd0f9a22d971bb3b40b364.png",
            headline : "Streaming Service"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/067d9b51-5efc-4b49-9a33-faf7966074e5-1624509093161-683494af2a0384bb725f509b2959264a.png",
            headline : "Free Parking"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit500500gsm/hotel/2021/12/21/950bd153-3f9e-4829-bad0-352ace43d883-1640061800923-5df4123d8e7094cfb1bfa9038b572750.png",
            headline : "Board Games"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/12/21/ba842c52-e091-439e-ac7c-51ff8ec83b3b-1640061927045-f81c18a8a83ba7cdc0d95bacf74965e5.png",
            headline : "Living Room"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/64308875-2c0c-49b8-ada0-2f5aa4a03b9b-1624508866246-987a94b61c053348f6b048a3689ef1bc.png",
            headline : "Private Pool"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2022/02/25/1c923dde-efb7-447b-9bf9-e14bdd27de60-1645761031907-debb1df589a65f400f48b99fb4d65098.png",
            headline : "Sea View"
        },

              {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2022/02/25/c6e721ae-36ab-4094-b925-27f55fbe2d26-1645761232708-3157f803b80add5e94707549821e7d79.png",
            headline : "BBQ Equipment"
        },
              {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2022/02/25/a6f28b77-78df-40a7-a171-380203319bd0-1645761082514-1fa0160dfe0c7d7d140fc84bd2fde830.png",
            headline : "Electric Charging"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2022/02/25/49077353-b4cc-429e-9425-a02205343df6-1645761108249-b0cf2d444d6fc55ca8f2e3bbaa25e1d2.png",
            headline : "Pet-friendly"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2022/02/25/bbc000ac-7139-44c1-8fa1-54fdb74e0518-1645761162282-a2b6888d744a28c4fda9e0cdb90d7829.png",
            headline : "Workspace"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2022/02/25/cd9371bd-9683-478e-ba2f-cfa355530724-1645761207054-609ebb9d1bd26287b1132299fbfdf97a.png",
            headline : "Luggage Storage"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2022/04/05/fdbab069-5920-4ea3-bcd7-6b25de39a8ac-1649141107919-5919919340f612abf5e49f7e191c4f8d.png",
            headline : "Weekly Monthly"
        },
     
    ]

    const filterRoomFacilities = [
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/36e3cba4-1471-4744-a453-ecc0e270c0e4-1624509228760-a08ee7b0697ced82d216b9305e73f78b.png",
            headline : "Bathtub"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/9827f5b3-4b55-4922-9ea1-7c7b1ef00bbe-1624510045658-716099d8ccaedbc50e6cb8c54051c7f2.png",
            headline : "Coffee Tea Maker"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/684de1a8-2467-47da-84ab-73321690d56d-1624509072116-50d93d0200f85b3efab7950c536ab367.png",
            headline : "Hair Dryer"
        },

        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/070da924-b6ee-475f-abbf-cfe85fe32e47-1624508987180-0b5f6beb4bcd18fefdc893a789d514b9.png",
            headline : "Kitchen"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/d382092d-ed91-49de-9cdb-d99f090e7c4a-1624509019548-9155c4e399d75425b06d449f3eca3477.png",
            headline : "Ironing"
        },

        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/d1d7b139-8aae-4ee8-b4da-02ff4c22f5f2-1624508816153-3c57baabf92585d22c39c94c071c867d.png",
            headline : "TV"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/a743508b-7e8b-45f8-ae12-03d06619d3bb-1624508759824-67e105ddbd3cb1171e5e1a5b69e4a8d8.png",
            headline : "Washing Machine"
        },
        {
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit00gsm/hotel-static/2021/06/24/8843e2c2-3fb5-4d87-9870-6425df534838-1624509180210-91f9fa5cbd5fdac3304637a58935cfc5.png",
            headline : "Connecting Room"
        },
    ]

    const filterPropetyType = [
        {
            propertyType : "Apartment",
            propertyTotal : "5.775 properties"
        },
        {
            propertyType : "Hotel ",
            propertyTotal : "2.053 properties"
        },
        {
            propertyType : "Guest House",
            propertyTotal : "577"
        },
        {
            propertyType : "Vacation Home",
            propertyTotal : "100"
        },
        {
            
            propertyType : "House",
            propertyTotal : "93"
        },
        {
            propertyType : "Kost",
            propertyTotal : "21"
        },
        {
            propertyType : "Villa",
            propertyTotal : "15"
        },
             {
            propertyType : "Motel",
            propertyTotal : "5"
        },
    ]

    const filterBenefit = [
        {
            headlines : "Free Breakfast"
        },
        {
            headlines : "Free Cancellation" 
        },
        {
            headlines : "Deals" 
        },
    ]

    const ratingPropety = [
        {
            unrated : "2.391",
            rated1 : "443" ,
            rated2 : "1.057" ,
            rated3 : "3.699" ,
            rated4 : "697" ,
            rated5 :  "632",
        },
    ]

    const filterArea = [
        
        {
            destination : "Jatinegara",
            totalProperty : "728"
        },
        {
            destination : "Setiabudi",
            totalProperty : "613"
        },
        {
            destination : "Cipinang Besar Selatan",
            totalProperty : "567"
        },
        {
            destination : "Pancoran",
            totalProperty : "500"
        },
        {
            destination : "Tanah Abang",
            totalProperty : "477"
        },
        {
            destination : "Menteng",
            totalProperty : "401"
        },
        {
            destination : "Thamrin",
            totalProperty : "305"
        },
        {
            destination : "Tebet",
            totalProperty : "281"
        },
        {
            destination : "Sudirman",
            totalProperty : "179"
        },
        {
            destination : "Sudirman Central Business District (SCBD)",
            totalProperty : "29"
        },

    ]

    return(
        <div className="search-rooms-sections">
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
                        <div className='search-rooms-box-2-content'  onClick={() => setOpenDate(!openDate)}>
                            <FontAwesomeIcon className='search-rooms-icon' icon={faCalendarDays} />
                            <p> {`${format(date[0].startDate, "MM/dd/yyyy")}` }</p>
                        </div>
                    </div>
                    <div className="search-rooms-night">
                        <div className='search-rooms-box-2-night-content'>
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
                    <div className='search-rooms-calendar'>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                months={2}
                                direction="horizontal"
                                showSelectionPreview={false}
                                className="date"
                                minDate={new Date()}
                              />
                            )}
                    </div>
                </div>
                <div className='search-rooms-box-3-container'>
                    <div className='search-rooms-box-3'>
                        <span>Room & Guest</span>
                        <div className='search-rooms-box-3-content' onClick={() => setOpenOptions(!openOptions)}>
                            <FontAwesomeIcon className='search-rooms-icon' icon={faDoorOpen} />
                            <p>
                            {`${options.room} Room , ${options.guest} Guest ${options.childern} Childern`}
                            </p>
                        </div>
                        <div className='search-room-count'>
                {openOptions && (
                    <div className='options'>
                        <div className='options-item'>
                            <span className='options-text'>Room</span>
                            <div className='options-counter'>
                                <button
                                    disabled={options.room <= 1}
                                    className='options-counter-button'
                                    onClick={() => handleOption("room" , "d")}
                                > - </button>
                                <span className='options-counter-number'>
                                    {options.room}
                                </span>
                                <button
                                    className='options-counter-button'
                                    onClick={() => handleOption("room" , "i")}
                                > + </button>
                            </div>
                        </div>
                        <div className='options-item'>
                            <span className='options-text'>Guest</span>
                            <div className='options-counter'>
                                <button
                                    disabled={options.guest <= 1}
                                    className='options-counter-button'
                                    onClick={() => handleOption("guest" , "d")}
                                > - </button>
                                <span className='options-counter-number'>
                                    {options.guest}
                                </span>
                                <button
                                    className='options-counter-button'
                                    onClick={() => handleOption("guest" , "i")}
                                > + </button>
                            </div>
                        </div>
                        <div className='options-item'>
                            <span className='options-text'>Children (below 17 years old)</span>
                            <div className='options-counter'>
                                <button
                                    disabled={options.childern <= 0}
                                    className='options-counter-button'
                                    onClick={() => handleOption("childern" , "d")}
                                > - </button>
                                <span className='options-counter-number'>
                                    {options.childern}
                                </span>
                                <button
                                    className='options-counter-button'
                                    onClick={() => handleOption("childern" , "i")}
                                > + </button>
                            </div>
                            </div>
                        </div>
                        )}
                    </div>
                    </div>
                    <div className='search-rooms-button-box-3'>
                        <button>
                            Search
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
           
            <div className='filter-rooms-container'>
            <div className='filter-rooms-box-container'>
                <p>Filters</p>
                <div className='filter-rooms-box'>
                    <div className='filter-rooms-content' onClick={() => setOpenFilterPrice(!openFilterPrice)}>
                         <FontAwesomeIcon className='filter-rooms-icon' icon={faTag} />
                        <p>Price</p>
                        <FontAwesomeIcon className='filter-rooms-dropdown' icon={faChevronDown} />
                    </div>
                    <div className='room-search-filter-price'>
                    {openFilterPrice && (
                        <div className='room-search-filter-price-container'>
                            <div className='room-search-filter-price-header'>
                                <h3>Price Range per Night</h3>
                                <button>Reset</button>
                            </div>
                            <div className='room-search-filter-price-value-container'>
                                <div className='room-search-filter-price-value-box'>
                                    <input type="number" className="input-min" placeholder='0' value="0" />
                                </div>
                                <div className='room-search-filter-price-value-box'>
                                    <input type="number" className="input-max"  placeholder='150000'  value="1500000"/>
                                </div>
                            </div>
                            <div className='room-search-filter-slider'>
                                <div  className='room-search-filter-progress'></div>
                            </div>
                            <div className='range-input'>
                                <input type="range"  min="0" max='1500000' value="0" step='50000' />
                                <input type="range"  min="0" max='1500000' value="1500000" step='50000'  />
                            </div>
                        </div>
                    )}
                    </div>
                </div>
                <div className='filter-rooms-box'>  
                    <div className='filter-rooms-content' onClick={() => setOpenFilterArea(!openFilterArea) }>
                         <FontAwesomeIcon className='filter-rooms-icon' icon={faLocationDot} />
                        <p>Areas</p>
                        <FontAwesomeIcon className='filter-rooms-dropdown' icon={faChevronDown} />
                    </div>
                    <div className='room-search-filter-area' >
                        {openFilterArea && (
                            <div className='room-search-filter-area-container'>
                                <div className='room-search-filter-area-header'>
                                    <h3>Area</h3>
                                    <button>Reset</button>
                                </div>
                                <div className='room-search-filter-area-value-container'>
                                    { filterArea.map((obj , idx) =>{
                                        return(
                                            <div className='room-search-filter-area-value-box'>
                                            <input type="checkbox" />
                                            <p>{obj.destination}</p>
                                            <span>({obj.totalProperty} property)</span>
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='filter-rooms-box'>
                    <div className='filter-rooms-content'  onClick={() => setOpenFilterStar(!openFilterStar) }>
                    <FontAwesomeIcon className='filter-rooms-icon' icon={faStar} />
                        <p>Hotel Star</p>
                        <FontAwesomeIcon className='filter-rooms-dropdown' icon={faChevronDown} />
                    </div>
                    <div className='room-search-filter-hotel-star'>
                        {openFilterStar && (
                            <div className='room-search-filter-star-container'>
                                <div className='room-search-filter-star-header'>
                                    <h3>Hotel Star</h3>
                                    <button>Reset</button>
                                </div>
                                {ratingPropety.map((obj , idx) => {
                                    return(
                                    <div className='room-search-filter-star-value-container'>
                                    <div className='room-search-filter-star-value-box'>
                                        <input type="checkbox" />
                                        <p>Unrated</p>
                                        <span>({obj.unrated} property)</span>
                                    </div>
                                    <div className='room-search-filter-star-value-box'>
                                        <input type="checkbox" />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <span>({obj.rated1} property)</span>
                                    </div>
                                    <div className='room-search-filter-star-value-box'>
                                        <input type="checkbox" />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <span>({obj.rated2} property)</span>
                                    </div>
                                    <div className='room-search-filter-star-value-box'>
                                        <input type="checkbox" />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <span>({obj.rated3} property)</span>
                                    </div>
                                    <div className='room-search-filter-star-value-box'>
                                        <input type="checkbox" />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <span>({obj.rated4} property)</span>
                                    </div>
                                    <div className='room-search-filter-star-value-box'>
                                        <input type="checkbox" />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <FontAwesomeIcon className='filter-rooms-rating-icon' icon={faStar} />
                                        <span>({obj.rated5} property)</span>
                                    </div>
                                </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <div className='filter-rooms-box'>
                    <div className='filter-rooms-content' onClick={() => setOpenFilterMore(!openFilterMore)}>
                        <p>More Filters</p>
                        <FontAwesomeIcon className='filter-rooms-dropdown' icon={faChevronDown} />
                    </div>
                    <div className='room-search-filter-other'>
                        {openFilterMore && (
                            <div className='room-search-filter-more-container'>
                                <div className='room-search-filter-more-value-section'>
                                    <div className='room-search-filter-more-value-container'>
                                        <h3>Benefits</h3>
                                        <div className='room-search-filter-more-value-container-box'>
                                        {filterBenefit.map((obj , idx) => {
                                            return(
                                            <div className='room-search-filter-more-value-box'>
                                                <input type="checkbox" />
                                                <p>{obj.headlines}</p>
                                            </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                    <div className='room-search-filter-more-value-container'>
                                        <h3>Payment Method</h3>
                                        <div className='room-search-filter-more-value-container-box'>
                                        <div className='room-search-filter-more-value-box'>
                                            <input type="checkbox" />
                                            <p>Pay at Hotel</p>
                                        </div>
                                        <div className='room-search-filter-more-value-box'>
                                            <input type="checkbox" />
                                            <p>Pay at Hotel (Without Credit Card)</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className='room-search-filter-more-value-container'>
                                        <h3>Facilities</h3>
                                        <div className='room-search-filter-more-value-facilities-container-box'>
                                            {filterFacilities.map((obj , idx) => {
                                                return(
                                                    <div className='room-search-filter-more-value-facilities-box'>
                                                        <img src={obj.img} alt={obj.headline}/>
                                                        <p>{obj.headline}</p>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='room-search-filter-more-value-container'>
                                        <h3>Room Facilities</h3>
                                        <div className='room-search-filter-more-value-container-box'>
                                        { filterRoomFacilities.map((obj , idx) => {
                                            return(
                                                <div className='room-search-filter-more-value-box'>
                                                    <input type="checkbox" />
                                                    <img className='room-facilities-icon' src={obj.img} alt='icon-room-facilities' />
                                                    <p>{obj.headline}</p>
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                    <div className='room-search-filter-more-value-container'>
                                        <h3>Property Type</h3>
                                        <div className='room-search-filter-more-value-container-box'>
                                        {filterPropetyType .map((obj , id) => {
                                            return(
                                                <div className='room-search-filter-more-value-box'>
                                                    <input type="checkbox" />
                                                    <p>{obj.propertyType}</p>
                                                    <span>({obj.propertyTotal} properties)</span>
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

// <div className='room-search-filter-more-value-room-facility-container'>
// <div>
//     <h3>Room Facility</h3>
// </div>
// <div>
//     <div>
//         <input type='checkbox'/>
//         <img src=''/>
//     </div>
// </div>


// </div>