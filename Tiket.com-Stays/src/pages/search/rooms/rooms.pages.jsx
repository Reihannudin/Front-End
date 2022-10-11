

import React from 'react'
import { RoomsFilter } from '../../../component/rooms/rooms-filter/rooms-filter.component'
import { RoomsRowCard } from '../../../component/rooms/rooms-row-card/rooms-row-card.component'
import { RoomsSearch } from '../../../component/rooms/rooms-search/rooms-search.component'

import './rooms.style.scss'

export const Rooms = () => {
  return (
    <div className='rooms-section'>
        <RoomsSearch />
        <div className='rooms-container'>
            <RoomsFilter />
            <RoomsRowCard />
        </div>
    </div>
  )
}
