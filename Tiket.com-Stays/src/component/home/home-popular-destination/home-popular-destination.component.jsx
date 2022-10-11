import React from 'react';

import './home-popular-destination.style.scss'
import { HomeTabsLayout } from './tab-layout/home-tab-layout.component';

export const HomePopularDestinations = () => {
    return(
        <div className='other-popular-destination-container'>
            <div className='other-popular-destinations'>
                <h2>Other Popular Destination</h2>
            </div>
            <HomeTabsLayout />
        </div>
    )
}