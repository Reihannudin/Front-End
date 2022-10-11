
import React from 'react';
import { StaysPromotionsSlider } from './slider/stays-promotion-slider.component';

import './stays-promotion.style.scss'

export const StaysPromotions = () => {
  return (
    <div className='stays-promotions-section'>
        <div className='stays-promotions-container'>
            <h2 className='stays-promotions-h2'>tiket.com, Smart Solution to Get the Cheap Hotel Deals</h2>
            <p className='stays-promotions-p'>tiket.com is the pioneer of online travel agent Indonesia that can be your best choice to get cheap hotel deals in many popular cities. Not only that, tiket.com also has a special feature for you who want to book a cheap hotel online.</p>
        </div>
        <StaysPromotionsSlider />
    </div>
  )
}