
import React,{ useState } from 'react'
import ArrowLeft  from '../../../../assets/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz48 1.svg'
import ArrowRight from '../../../../assets/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg'

import './stays-promotion.style.scss'


const dataSlider = [
  {
      id: "1",
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/922e56d5-52f4-4d11-8124-bcc7a3c06858-1609831940863-bd95d18ab1afd1bcacbcadf6a4134049.svg",
      title : "Best Hotel Options",
      desc : "Spend a warm and restful night both in domestic or international destinations by booking hotels online at tiket.com. What’s even better, is that you can read real reviews from guests who stayed at the hotel before. After having a night or two there, then it’s your time to tell your fun stay experience on the review section!"
  },
  {
      id: "2",
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/6c149285-b212-4b6a-b706-23ecd63fd604-1609831940843-900b3a65ddf7369375e5fb954f947926.svg",
      title : "Simple Booking Process",
      desc : "Enjoy the simple hotel booking process at tiket.com! You can book a hotel room anywhere and anytime without any hassle. Simply choose the destination as well as the check-in and check-out dates, then numerous hotel recommendations will appear on your phone screen."
  },
  {
      id: "3",
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/ad10c285-7ef0-4697-b0e1-9569b4a34593-1609831940812-49f19c738216df95f6dc2dda3b1eb6c5.svg",
      title : "Easy Payment Methods",
      desc : "Let's skip all the fuss of booking a hotel online by using tiket.com! With different types of payment options, you don't have to worry about finalizing your hotel payment at tiket.com. Choose the preferred payment method, be it Bank Transfer, Debit Card, Credit Card, Installment, Virtual Account, Mobile Banking, and or paying from a convenience store such as Alfamart."
  },
  {
      id: "4",
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/41888c6e-8bde-4897-b578-15d053a7a23a-1609831940847-0831970f0a1c3c885eca424f44ea69cb.svg",
      title : "Check-in Guarantee",
      desc : "You'll be guaranteed to check-in when you've booked a hotel room at tiket.com. Having issues during the check-in process? Call tiket.com Customer Care! Our team is ready to help you in getting the best solution for you."
  },
  {
      id: "5",
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/4a67046b-e98c-4b67-93bf-5b70ce55104d-1609831940816-c184424c0be8cfc908753fe8889bdb6b.svg",
      title : "Hotel Deals",
      desc : "No need to have any doubts when it comes to choosing your accommodation in domestic or international destinations. Enjoy countless promos and discounts to get the best prices when booking cozy hotels around the world. tiket.com has both regular and special promos that will save your travel budget!"
  },
  {
      id: "6",
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel-extranet/2021/01/05/2f23dbc8-b78d-49af-8841-94e06a146bad-1609831940811-b08da4b6cbf3ea408f59051c5d8f23bb.svg",
      title : "24/7 Customer Care",
      desc : "if you have any questions or problems when finalizing your payment or booking on tiket.com, don’t worry and keep calm. tiket.com Customer Care is ready 24 hours to assist you with everything you need. Making sure that your booking process goes smoothly is a must!"
  },
];


export default function BtnSlider({ direction, moveSlide }) {
  // console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? ArrowRight : ArrowLeft} alt='next-img' />
    </button>
  );
}

export const StaysPromotionsSlider = () =>{
  
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
      if(slideIndex !== dataSlider.length){
          setSlideIndex(slideIndex + 1)
      } 
      else if (slideIndex === dataSlider.length){
          setSlideIndex(1)
      }
  }

  const prevSlide = () => {
      if(slideIndex !== 1){
          setSlideIndex(slideIndex - 1)
      }
      else if (slideIndex === 1){
          setSlideIndex(dataSlider.length)
      }
  }

  const moveDot = index => {
      setSlideIndex(index)
  }

  
  return(
    <div className="container-slider">
    {dataSlider.map((obj, idx) => {
      return (
             <div
              key={idx}
              className={slideIndex === idx + 1 ? "slide active-anim" : "slide"}>
                 <img src={obj.img} alt={obj.title}/>
                  <h2>{obj.title}</h2>
                  <p>{obj.desc}</p>
             </div>
            )
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
      
        <div className="container-dots">
            {Array.from({length: 6}).map((item, idx) => (
              <div  
                key={idx}
                onClick={() => moveDot(idx + 1)}
                className={slideIndex === idx + 1 ? "dot active" : "dot"}
              ></div>
          ))}
        </div>
    </div>
  )
}