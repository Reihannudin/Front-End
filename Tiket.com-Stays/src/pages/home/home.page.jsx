import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from '../../component/footer/footer.component'
import { HomeMainSearch } from '../../component/home/home-main-search/home-main-search.component'
import { HomePopularDestinations } from '../../component/home/home-popular-destination/home-popular-destination.component'
import { HomePromoBox } from '../../component/home/home-promo-box/home-promo-box.component'
import { HomePromo } from '../../component/home/home-promo/home-promo.component'

import {Navbar} from '../../component/navbar/navbar.component'
import './home.style.scss'

export const Home = () => {

    // function scrollFunction() {
    //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //     document.getElementById("home-main-navbar").style.top = "0";
    //   } else {
    //     document.getElementById("home-main-navbar").style.top = "-50px";
    //   }
    // }

    // window.onscroll = function() {scrollFunction()};

    return (
      <div className='home-container-section'>
        <Outlet />
        <HomeMainSearch />
        {/* <Navbar id='home-main-navbar' className='home-main-navbar'/> */}
        <HomePromoBox />
        <HomePromo />
        <HomePopularDestinations />
        <Footer />
      </div>
    )
  }