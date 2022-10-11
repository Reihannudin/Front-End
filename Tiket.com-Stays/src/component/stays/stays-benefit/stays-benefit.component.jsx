import React from 'react'

import './stays-benefit.style.scss'

export const StaysBenefit = () => {

  const BenefitData = [
    {
      id: 1,
      img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/921ad007-7f8b-4bd7-9c3c-8da202ff9708-1609831940849-bd46b39f2f2120740ddab7f3d564c2d9.svg",
      title : "Early Bird Offer",
      desc : "Book early and save money! Perfect deal for those who plan early."
    },
    {
      id: 2,
      img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/cd9290ec-3a44-4f2f-8907-d072dd9a5cb8-1609831940856-f74e87143dc8e051d8cacd64d8c55761.svg",
      title : "Last Minutes",
      desc : "Never too late to get away! Get great last-minute deals for your last-minute plans!"
    },
    {
      id: 3,
      img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/69bb1777-9591-41d9-b308-a686b10e28db-1609831940861-e6fa33c47c040118218ce4c2ee5b108d.svg",
      title : "Hotel Now!",
      desc : "Book a room for tonight and enjoy same day check-in deal."
    },
    {
      id: 4,
      img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/55a2cebe-f663-481e-8a51-c73362101371-1609831940813-3c6888a0042404847aa16fa0897a3753.svg",
      title : "Bonus Night",
      desc : "Book several nights and get free extra night. Perfect for a long stay."
    },
    {
      id: 5,
      img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/69027481-3156-4ca5-8d08-28d90d7dfcb2-1609831940818-788f20fb3502bf603ebabd27ececc543.svg",
      title : "Extra Benefits",
      desc : "Book with tiket.com and get extra benefits from selected hotel partners."
    },
    {
      id: 6,
      img: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/0b8f571e-f711-4c4c-834b-32967a61bac2-1609831940852-ebe9b622540da7a9558a46ca8ef53031.svg",
      title : "Discounts",
      desc : "Book more, save more! Get our best online rate for your stay."
    },
  ]

  return (
    <div className='stays-benefit-section'>
        <div className='stays-benefit-title-container'>
            <h2>Best Hotel Deals For You</h2>
            <p>Save more with our best deals.</p>
        </div>
        <div className='stays-benefit-container'>
            <div className='stays-benefit-content'>
                <div className='stays-benefit-content-container'>
                  {BenefitData.map((obj , idx) => {
                    return(
                      <div className='stays-benefit-content-box' key={idx}>
                         <img src={obj.img} alt='benefit' />
                         <h3>{obj.title}</h3>
                         <p>{obj.desc}</p>
                      </div>
                    )
                  })}                    
                </div>
                <div>
                  
                </div>
            </div>
        </div>
    </div>
  )
}