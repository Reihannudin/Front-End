import React ,{ useState } from 'react'

import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
    faBed,
    faDoorOpen,
    faLocationDot,
    faCalendarDays
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './stays-search.style.scss'

export const StaysSearch = ({ type }) => {

    const [destination , setDestination] = useState("");
    const [openDate , setOpenDate] = useState(false);
    const [date , setDate] = useState([
        {
            startDate : new Date(),
            endDate : new Date(),
            key : "selection"
        }
    ]);

    const [openOptions , setOpenOptions ] = useState(false)
    const [options , setOptions] = useState({
        room: 1,
        guest: 1, 
        childern : 0,
    })

    const navigate = useNavigate();

    const handleOption = (name , operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name] : operation === "i" ? options[name] + 1 : options[name] -1
            }
        })
    }

    const handleSearch = () => {
        navigate("search", { state: { destination, date, options } });
    };

  return (
    <div className="stays-sections">
    <div className='stays-section'>
        <div className='stays-container'>
            <div className='stays-box-title'>
                <FontAwesomeIcon className='stays-icon-box' icon={faBed} />
                <h2 className='stays-title-text'>Booking Cheap Hotels Online with Promo Prices</h2>
            </div>
        </div>
        <div className='stays-search'>
                <div className='stays-search-item'>
                    <span className='stays-search-label'>Destination</span>
                    <div className='stays-search-box'>
                        <FontAwesomeIcon className='stays-icon' icon={faLocationDot} />
                        <input
                          type="text"
                          placeholder="Where are you going?"
                          className="stays-search-input stays-input"
                          onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                </div>
                <div className='stays-search-item'>
                    <div className='stays-search-box center'>
                        <div className='stays-booking'>
                            <span className='stays-search-label'>Check-in</span>
                            <FontAwesomeIcon className='stays-icon' icon={faCalendarDays} />
                            <span className="stays-search-input" onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0].startDate, "MM/dd/yyyy")}` }
                            </span>
                        </div>
                        <div className='stays-booking'>
                            <span className='stays-search-label'>Check-out</span>
                            <FontAwesomeIcon className='stays-icon' icon={faCalendarDays} />
                            <span className="stays-search-input"  onClick={() => setOpenDate(!openDate)}>
                                {`${format(date[0].endDate, "MM/dd/yyyy")}`}
                            </span>
                        </div>
                    </div>
                    <div className='stays-search-calendar'>
                        {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date"
                                minDate={new Date()}
                              />
                            )}
                        </div>
                    </div>
           
                <div className='stays-search-item'>
                    <div className='stays-search-box '>
                        <div className='stays-booking'>
                            <span className='stays-search-label'>Guest & room</span>
                            <FontAwesomeIcon className='stays-icon' icon={faDoorOpen} />
                            <span className="stays-search-input" onClick={() => setOpenOptions(!openOptions)}>
                                {`${options.room} Room , ${options.guest} Guest ${options.childern} Childern`}
                            </span>
                        </div>
                    </div>
                    <div className='stays-search-room'>
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
                    </div>
        <div className='stays-button-container'>
            <button className='stays-button' onClick={handleSearch}>
                SEARCH HOTEL
            </button>
        </div>
    </div>
    </div>
  )
}