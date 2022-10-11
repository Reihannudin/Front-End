import React , {useState} from 'react'

import { ReactComponent as BackIcon } from '../../../../assets/arrow_back_FILL0_wght400_GRAD0_opsz48 1.svg'
import { ReactComponent as NextIcon } from '../../../../assets/arrow_forward_FILL0_wght400_GRAD0_opsz48 1.svg'
import { HomePromoSlider } from './home-promo-slider/home-promo-slider.component'
// import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './row-home-promo-slider.style.scss'

export const RowHomePromoSlider = ({rowID ,  poster}) => {

    const [slide , setSlide] = useState([])

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
      };

    const slideRight = () => {
      var slider = document.getElementById('slider' + rowID);
      slider.scrollLeft = slider.scrollLeft + 500;
    };

  return (
    <div className='row-home-promo-slider-section'>
        <div className='row-home-promo-slider-content'>
            <HomePromoSlider />
            <HomePromoSlider />
            <HomePromoSlider />
            <HomePromoSlider />
            <HomePromoSlider />
        </div>
        <div className='row-home-promo-slider-footer'>
            <div className='row-home-promo-slider-button'>
                <div className='row-home-promo-slider-button-container'>
                    <button  className='row-home-promo-button'>
                        <BackIcon className='row-home-promo-button-icon'/>
                    </button>
                    <button className='row-home-promo-button'>
                        <NextIcon className='row-home-promo-button-icon'/>
                    </button>
                </div>
            </div>
            <div className='row-home-promo-slider-dots'>
                <div className='row-home-promo-slider-dots-container'>
                    <hr/>
                    <p>2/10</p>
                </div>
            </div>
        </div>
    </div>
  )
}
