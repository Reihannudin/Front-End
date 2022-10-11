
import React from 'react'
import { StaysSearch } from '../stays-search/stays-search.component'

import './stays-promo-banner.style.scss'
import { StaysPromoBannerSlider } from './slider/stays-promo-banner-slider.component'

export const StaysPromoBanner = () => {
  return (
    <div className='stays-promo-banner-section'>
      <div className='stays-promo-banner-container'> 
        <StaysPromoBannerSlider />
        <StaysSearch className='stays-search-promo-section'/>
      </div>
    </div>
  )
}
