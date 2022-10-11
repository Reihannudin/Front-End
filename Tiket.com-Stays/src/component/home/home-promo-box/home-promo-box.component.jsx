import React from 'react';

// import { SlidesPromo } from './slide-promo/slide-promo.component'

import './home-promo-box.style.scss'
import { RowHomePromoSlider } from './row-home-promo-slider/row-home-promo-slider.component';


export const HomePromoBox = () => {
    return(
        <div className='home-promo-box-sections'>
            <div className='home-promo-box-container'>
                <div className='home-promo-box'>
                    <img className='home-promo-box-1-img' src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/mobile-modules/2022/07/07/26bcbfd4-fb30-4d14-9750-7e988db3597a-1657166355700-abd5cb1719de69d3eddc8a58f047a393.png' alt='img-icon' />
                    <h2 className='home-promo-box-title'>
                        Check out the promo before you go!
                    </h2>
                    <button className='btn-home-promo'>See all promos!</button>
                </div>
                <div className='home-promo-box'>
                    <RowHomePromoSlider />
                </div>
            </div>
        </div>
    )
}