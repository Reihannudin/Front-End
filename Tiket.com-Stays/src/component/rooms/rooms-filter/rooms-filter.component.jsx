
import React , {useState} from 'react';

import {
    faLocationDot,
    faCaretUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './rooms-filter.style.scss'

export const RoomsFilter = () => {

    const [openFilter , setOpenFilter] = useState(false)

    const [openFilter2 , setOpenFilter2] = useState(false)

    return(
        <div className="filter-card-room-container-section">
        <div className='filter-card-room-sections'>
            <div className='map-card-room-sections'>
                <div className='map-card-room-container'>
                    <div className='map-card-room-button'>
                        <button >
                            <FontAwesomeIcon className='filters-rooms-icon' icon={faLocationDot} />
                            <p>Map View</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className='filter-card-room-section'>
                <div className='filter-card-room-container'>
                <div className='filter-card-box-title' onClick={() => setOpenFilter(!openFilter)}>
                    <p>Most Searched</p>
                    <FontAwesomeIcon className='filter-rooms-icon-2' icon={faCaretUp} />
                </div>
                { openFilter && (
                    <div className="filter-card-radio-box">
                    <label className='filter-card-radio'>
                        <input type="radio" value="option1" defaultChecked={true} />
                        All
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option2" />
                        Up to 50%+10% off
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option3" />
                        Apartment
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option4" />
                        5-Star Hotels
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option5" />
                        Elite Sale up to 15%
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option6" />
                        Family Hotels
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option7" />
                        Business Hotels
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option8" />
                        Weekly/Monthly
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option9" />
                        With Bathtub
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option10" />
                        Unique Stays
                    </label>
                    <label  className='filter-card-radio'>
                        <input type="radio" value="option11" />
                        tiket CLEAN
                    </label>
                </div>
                )}
                </div>
            </div>
            <div className='filter-card-room-section'>
            <div className='filter-card-room-container'>
                <div className='filter-card-box-title' onClick={() => setOpenFilter2(!openFilter2)}>
                    <p>Most Searched</p>
                    <FontAwesomeIcon className='filter-rooms-icon-2' icon={faCaretUp} />
                </div>
                { openFilter2 && (
                    <div className="filter-card-radio-box">
                    <label className='filter-card-radio'>
                        <input type="radio" value="option1" defaultChecked={true} />
                        Recommended
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option2" />
                        Price (lowest first)
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option3" />
                        Price (highest first)
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option4" />
                        Rating (highest first)
                    </label>
                    <label className='filter-card-radio'>
                        <input type="radio" value="option5" />
                        Hotel star (highest first)
                    </label>
                </div>
                )}
            </div>
            </div >
        </div>
        </div>
    )
}