
import React from 'react'

import './home-card-destination.style.scss'

export const HomeCardDestination = () => {

    const DestinationsData = [
       {
        id: 1,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/09/19/e6a9374c-18bd-4ef4-8602-894d49db7d6f-1663585964851-7ca4050792df7ed0ffc494cf9a4b481c.png",
        name : "JAPAN",
        lowPrice : 85
       },
       {
        id: 2,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/09/19/a8549ee4-c256-479e-b9be-2fdfde78b92b-1663585996392-95c97aee89ed36d6e992761b1b44a282.png",
        name : "SINGAPORE",
        lowPrice : 38
       },
       {
        id: 3,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/09/19/b53fae95-74d2-4706-b56a-7b1468761dbb-1663586228988-b2a8a20898fe8294f193cfa0be791bc1.png",
        name : "SOUTH KOREA",
        lowPrice : 88
       },
       {
        id: 4,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/09/19/93c15f4a-4913-451f-bf78-dfb2472494c0-1663586168236-0bcf208b2276739bde990886b275ea77.png",
        name : "USA",
        lowPrice : 362
       },
       {
        id: 5,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/09/19/f8d4902c-2dc6-498c-b26e-2db652444d99-1663586191256-8829d474f2139e95aebc58a18acceac2.png",
        name : "THAILAND",
        lowPrice : 78
       },
       {
        id: 6,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/platform-mweb-mid/mobile-modules/2022/09/19/1c06acee-4a0f-4f24-b847-32a1ff6a847a-1663586150634-0b4fdffe8d891d4fddf7b2a76bf76270.png",
        name : "AUSTRALIA",
        lowPrice : 230
       }
    ]

    
    return (
        <div className='destinations-accomondations-section'>
            <div className='destinations-accomondations-title-container'>
                <h2>Fill your bucket with top attractionst</h2>
                <p>Exciting activities, boundless fun! Visit your favorite countries and enjoy every moment.</p>
            </div>
            <div className='destinations-accomondations-content-container'>
                <div className='destinations-accomondations-content'>
                    <div className='home-destinations-content-box-container'>
                    {DestinationsData.map((obj , idx) => {
                        return(
                            <div className='home-destinations-box' key={idx}>
                                <img src={obj.img} alt='destination'/>
                            </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}
