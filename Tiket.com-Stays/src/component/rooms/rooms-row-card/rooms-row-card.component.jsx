import React , {useState} from 'react';

import {
    faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './rooms-row-card.style.scss'
import { RoomsCard } from '../rooms-card/room-card.component';

export const RoomsRowCard = () => {

    const [openFilter , setOpenFilter] = useState(false)

    return(
        <div className="row-card-room-sections">
            <div className='row-card-room-sections-container'>
            <div className='row-card-room-container'>
                <p>Showing 9.000+ best accomodation with best deals</p>
                <div className='row-card-room-box-container'>
                    <p>Price Display :</p>
                    <div className='row-card-room-box' onClick={() => setOpenFilter(!openFilter)}>
                      <p>Per Room Per Night</p>
                      <FontAwesomeIcon className='filter-rooms-dropdown' icon={faChevronDown} />
                    </div>
                </div>
            </div>
            {openFilter && (
                        <div className='filter-rooms-open-container'>
                            <div className='filter-rooms-open-box'>
                                 <input type="radio" value="per-room-per-night"  defaultChecked={true} />
                                     <p>per room per night</p>
                            </div>
                            <div className='filter-rooms-open-box'>
                                <input type="radio" value="total-price"/>
                                <p>Total price</p>
                            </div>
                        </div>
                      )}
            </div>
            <RoomsCard />
        </div>
    )
}