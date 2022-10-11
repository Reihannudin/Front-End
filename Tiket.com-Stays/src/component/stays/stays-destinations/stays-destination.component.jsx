import React from 'react'

import './stays-destination.style.scss'

export const StaysDestination = () => {

    
    const DestinationsData = [
        {
            id: 1,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/2a3854ae-4647-4d6e-8a9e-3dabec1e488c-1604549427662-141665fe29961d78c22b3c447447f916.jpg",
            place : "Bandung",
            property : "1000+ properties" 
        },
        {
            id: 2,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/e8497d63-f405-4aa4-9705-d734c0aad6af-1604549634080-64cb500a95dfbaafae842b5390435e6c.jpg",
            place : "Medan",
            property : "200+ properties" 
        },
        {
            id: 3,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/5487f0b1-27d3-45f0-b05f-491879e50522-1604549427762-91e866e046f296034d63ae825e1c6052.jpg",
            place : "Bogor",
            property : "300+ properties" 
        },
        {
            id: 4,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/735ba7a5-e633-4e9f-8ffd-b02629a71f1f-1604549427669-fca7a10ac92c719d1896e111656c69af.jpg",
            place : "Yogyakarta",
            property : "1000+ properties" 
        },
        {
            id: 5,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/16e562dd-e629-4021-8f14-1e6caffc8290-1604549634121-dec8d9dbd11f67e0a388a2328b710756.jpg",
            place : "Makasar",
            property : "300+ properties" 
        },
        {
            id: 6,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/33ebf79b-b842-4449-b4d2-59d8f38830fa-1604549427766-f3d55613dedf5780dbda075b7cfbedc8.jpg",
            place : "Semarang",
            property : "200+ properties" 
        },
        {
            id: 7,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/8e2f6677-6c51-4737-9f58-218aa981121a-1604549634070-a435a26650fa0e7fdb20f1e6e508f126.jpg",
            place : "Surabaya",
            property : "600+ properties" 
        },
        {
            id: 8,
            img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/a21388db-588b-4f3e-8cfd-fb8d1a0f864e-1604549634075-2765764797b529d636b99002570d4543.jpg",
            place : "Malang",
            property : "600+ properties" 
        },

    ]

    return (
    <div className='destinations-accomondations-section'>
        <div className='destinations-accomondations-title-container'>
            <h2>Wanderlist for Your Wanderlust</h2>
            <p>Destinations that worth to visit at least once in a lifetime.</p>
        </div>
        <div className='destinations-accomondations-content-container'>
            <div className='destinations-accomondations-content'>
                <div className='destinations-accomondation-content-box-container'>
                {DestinationsData.map((obj , idx) => {
                    return(
                        <div className='destinations-accomondations-box' key={idx}>
                            <img src={obj.img} alt='destination'/>
                            <div className='destinations-accomondations-content-information'>
                                <div className='destinations-accomondations-content-information-text'>
                                    <h2>{obj.place}</h2>
                                    <p>{obj.property}</p>
                                </div>
                            </div>  
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    </div>
    )
}