import React from 'react'
import './stays-other-popular.style.scss'
import { TabsLayoutOtherPopularDestination } from './tabs-layout/tabs-layout-other-popular-destination.component'

export const OtherPopularStays = () => {
  return (
    <div className='other-popular-stays-section'>
        <div className='other-popular-stays-container'>
            <h2 className='other-popular-stays-title'>Other Popular Destination</h2>
                <TabsLayoutOtherPopularDestination />
            <div className='other-popular-border'></div>
        </div>
    </div>
  )
}