
import React from 'react'
import { StaysAccommondation } from '../../component/stays/stays-accomondation-card/stays-accomondation.component'
import { StaysBenefit } from '../../component/stays/stays-benefit/stays-benefit.component'
import { StaysCardProperty } from '../../component/stays/stays-card-property/stays-card-property.component'
import { StaysDestination } from '../../component/stays/stays-destinations/stays-destination.component'
import { OtherPopularStays } from '../../component/stays/stays-other-popular-destination/stays-other-popular.component'
import { StaysPartner } from '../../component/stays/stays-partner/stays-partner.component'
import { StaysPromoBanner } from '../../component/stays/stays-promo-banner/stays-promo-banner.component'
import { StaysPromotions } from '../../component/stays/stays-promotion/stays-promotion.component'
// import { StaysSearch } from '../../component/stays/stays-search/stays-search.component'
import { Footer } from '../../component/footer/footer.component'
import './stays.style.scss'

export const Stays = () => {
  return (
    <div>
        <StaysPromoBanner />
        <div className='stays-content-container'>
          <StaysAccommondation />
          <StaysCardProperty />
          <StaysDestination />
          <StaysBenefit />
          <OtherPopularStays />
          <StaysPartner />
          <StaysPromotions />
          <Footer />
        </div>
    </div>
  )
}
