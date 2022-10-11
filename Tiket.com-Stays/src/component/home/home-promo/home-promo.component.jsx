import React from 'react';
import { ReactComponent as ArrowLeft} from '../../../assets/arrow_back_FILL0_wght400_GRAD0_opsz48 1.svg'
import { ReactComponent as ArrowRight} from '../../../assets/arrow_forward_FILL0_wght400_GRAD0_opsz48 1.svg'


import './home-promo.style.scss'
import { HomeCardDestination } from '../../card/home-card-destination/home-card-destination.component';
import { RowCardTodo } from '../row-card-todo/row-card-todo.component';

export const HomePromo = () => {
    return(
        <div className="home-promo-section">
            <div className="home-promo-container">
                <div className="home-promo-banner-card">
                    <h2 className='home-promo-title'>Lowest Price Guarantee on tiket.com</h2>
                    <img className="home-card-banner-content-img" src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/08/04/7c01ce18-1e41-4de3-8829-0b1ea0afebb2-1659611050116-c69213781ad805efe814a382bc4d6e2b.png" alt='Home promo card'/>
                </div>
                <div className='home-promo-card'>
                    <RowCardTodo />
                    <div className='home-promo-slide-container'>
                        <ArrowLeft className='home-promo0-slide-left-icon'/>
                        <ArrowRight  className='home-promo0-slide-right-icon'/>
                    </div>
                </div>
                <div className='home-promo-card'>
                    <HomeCardDestination />
                    <div className='home-promo-slide-container'>
                        <ArrowLeft className='home-promo0-slide-left-icon'/>
                        <ArrowRight  className='home-promo0-slide-right-icon'/>
                    </div>
                </div>
                <div className="home-promo-banner-card">
                    <h2 className='home-promo-title'>Need help? Check this info for your travel!</h2>
                    <div className="home-promo-card-section">
                    <div className='home-promo-card-container'>
                        <div className='home-promo-card'>
                            <img className='home-promo-card-img' src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/06/30/443170a5-6e0f-44c1-9946-011f141aa04f-1656587877873-e232966d266e1cfc49053a99b0bf2754.png" alt='home promo'/>
                        </div>
                        <div className='home-promo-card'>
                            <img className='home-promo-card-img' src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/06/30/0c1c1a0f-ff22-4e53-bdb8-ce6b28c76584-1656587919553-eaf3439f737ab9f59d5f2ac6dcd6f5b6.png" alt='home promo'/>
                        </div>
                        <div className='home-promo-card'>
                            <img className='home-promo-card-img' src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/06/30/73b689ef-74b4-4d20-8ad6-a2d0113f221a-1656587956650-5984d97df856f8bcbadf00438af71c18.png" alt='home promo'/>
                        </div>
                        <div className='home-promo-card'>
                            <img className='home-promo-card-img' src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/06/30/5ba1b6d2-9f85-4711-b6a5-2580249d304b-1656587975679-6238ceb049c80c8efe02ebc3b673f6a0.png" alt='home promo'/>
                        </div>
                        <div className='home-promo-card'>
                            <img className='home-promo-card-img' src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/06/30/5eb0969c-4fab-4899-9b86-23c302c64fe9-1656588007132-dd68e0e0f425ae3e03ef4dbba1efb327.png" alt='home promo'/>
                        </div>
                        <div className='home-promo-card'>
                            <img className='home-promo-card-img' src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/06/30/61cdde0f-36da-4f4a-9d55-21b0b0df8d65-1656588044247-3da61f986659453e84a310da78167857.png" alt='home promo'/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="home-promo-banner-card">
                    <img className="home-card-banner-content-img" src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/08/09/51530432-0eba-4a46-98e6-6730063d29c0-1660038201088-77ea55039fa4f16dc980b65d1fb56530.png" alt='Home promo card'/>
                </div>
                <div className="home-promo-banner-card">
                    <div className="home-promo-banner-card-container">
                        <img className="home-promo-banner-card-img" src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/07/01/e31f938e-7306-426b-acc4-2cb72ce0e44e-1656672407836-00cefaf1facb2bca1f7aef58b9361157.png' alt='home promo'/>
                        <div className="home-promo-banner-card-text">
                            <h2 className='home-promo-card-title'>Book Tickets and Plan Your Holiday with Ease</h2>
                            <div className="home-promo-card-text-container">
                                <div className='home-promo-card-text-box'>
                                    <p className='home-promo-card-text-title'>Easy to Buy Tickets and Hotels.</p>
                                    <p>Buy flight tickets, hotels, trains, car rental, also tickets for event and attraction immediately on tiket.com app and website.</p>
                                </div>
                                <div className='home-promo-card-text-box'>
                                    <p className='home-promo-card-text-title'>Various Top Products. </p>
                                    <p>Get various airlines with complete routes around the world and find many hotels in Asia. You also can get train tickets, book car rental, and entertaiment tickets.</p>
                                </div>
                                <div className='home-promo-card-text-box'>
                                    <p className='home-promo-card-text-title'>Multiple Payment Methods.</p>
                                    <p>Choose your preferred payment methods, including via bank transfer, ATM transfer, Virtual Account (VA), debit card online, and credit card. You can also buy your tickets or hotels by installment. The process is easy and simple!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-promo-banner-card">
                    <div className="home-promo-banner-card-container-2">
                        <div className="home-promo-banner-card-text">
                            <h2 className='home-promo-card-title'>Plenty of Promo and Benefits, Save Even More!</h2>
                            <div className="home-promo-card-text-container">
                                <div className='home-promo-card-text-box'>
                                    <p className='home-promo-card-text-title'>Get Special Promo & Discount!</p>
                                    <p>Find discounts for your favorite flights and hotels to save more for your upcoming vacation! Make your dream vacation come true with a special promo provided by tiket.com. There is no reason to delay your vacation!</p>
                                </div>
                                <div className='home-promo-card-text-box'>
                                    <p className='home-promo-card-text-title'>tiket Elite Rewards Benefits. </p>
                                    <p>Enjoy the tiket Elite Rewards benefits in tiket Points that you can redeem with discounts. Also, get other exclusive benefits from your purchases!</p>
                                </div>
                                <div className='home-promo-card-text-box'>
                                    <p className='home-promo-card-text-title'>24/7 Customer Care.</p>
                                    <p>Our 24/7 Customer Care is always ready to help you. We’re here to ensure you to get the best services from tiket.com.</p>
                                </div>
                            </div>
                        </div>
                        <img className="home-promo-banner-card-img" src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/07/01/e31f938e-7306-426b-acc4-2cb72ce0e44e-1656672407836-00cefaf1facb2bca1f7aef58b9361157.png" alt='home promo'/>
                    </div>
                </div>
                <div className="home-promo-banner-card">
                    <div className="home-promo-banner-card-container">
                        <img className="home-promo-banner-card-img" src='https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/07/01/e31f938e-7306-426b-acc4-2cb72ce0e44e-1656672407836-00cefaf1facb2bca1f7aef58b9361157.png' alt='home promo'/>
                        <div className="home-promo-banner-card-text">
                            <h2 className='home-promo-card-title'>Book the Cheap Flight Tickets to Your Favorite Destinations</h2>
                            <div className="home-promo-card-text-container">
                                <div className='home-promo-card-text-box'>
                                    <p>Do you want to find a cheap flight ticket? Now you can book the cheap flight ticket to your favorite destination right on your fingertips. tiket.com is the pioneer of the online travel agent (OTA) in Indonesia which always gives the best innovation to make you easier to book flight ticket via online. Search the cheap flight ticket to thousands of routes for both domestic and international destinations over the world. You could also compare the flight ticket prices at tiket.com. Besides that, buy online flight ticket through tiket.com will give you more advantages. If you have done a transaction at tiket.com, you can get a special reward named tiket Points. The point you earn can be redeemed with the exclusive gift or special discount from tiket.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-promo-banner-cards">
                    <div className="home-promo-banner-card-text">
                        <h2 className='home-promo-title'>Easy and Simple Installment</h2>
                        <p>Book your tickets and hotel now, then pay the installment in just one click. Yup, easy-peasy as that! You can use this installment program to buy flight tickets, hotels, entertainment tickets, and rent a car. 3, 6, or 12 months installment? You choose! This installment program is valid for bank card holders partnered with tiket.com.</p>
                        <button className="btn-promo">MORE</button>
                    </div>
                </div>
                <div className="home-promo-banner-cards">
                    <div className="home-promo-banner-card-text">
                        <h2 className='home-promo-title'>Partners of tiket.com</h2>
                        <p>You are our priority! Therefore, tiket.com has been collaborated with various transportation service providers, hotel chains, car rentals, and entertainment ticket providers to ensure your holiday is always comfortable and enjoyable.</p>
                        <button className="btn-promo">MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}