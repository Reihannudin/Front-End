
import React , {useState} from 'react'
import { ReactComponent as ArrowLeft} from '../../../../assets/arrow_back_ios_new_FILL0_wght400_GRAD0_opsz48 1.svg'
import { ReactComponent as ArrowRight} from '../../../../assets/arrow_forward_FILL0_wght400_GRAD0_opsz48 1.svg'

import './stays-promotion-banner-slider.style.scss'

const dataSlider = [
    {
        id : 1,
        img:"https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/discovery-desktop/promo/2022/09/30/5694ba88-10d6-479e-af64-64508ec75fa4-1664505211624-ac0963fe25a9152bb32937ba3a3dc205.png",
        url : "https://www.tiket.com/promo/campaign/10-10"
    },
    {
        id : 2,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/discovery-desktop/promo/2022/09/30/821f1dd6-174b-48ca-9cfe-8596292bbf74-1664533053207-efb1467be6d8e3b053e00564feeeb986.png",
        url : "https://www.tiket.com/promo/campaign/10-10-hotel-vila"
    },
    {
        id : 3,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/discovery-desktop/promo/2022/09/30/c22a0d0f-399b-480d-8d2f-b8510bfcdc00-1664533104094-d7e4e7778691ac5b24e265730d3480fe.png",
        url : "https://www.tiket.com/promo/campaign/10-10-hotel-internasional"
    },
    {
        id : 4,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/discovery-desktop/promo/2022/09/30/cd85f91b-b87c-4ba7-a6bb-e8249313a429-1664532518175-c26470f7b27399fb77de8e8736b101b8.png",
        url : "https://www.tiket.com/promo/campaign/blibli-10-10"
    },
    {
        id : 5,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/discovery-desktop/promo/2022/07/27/5864fbb8-21a8-4c0a-9f96-82dd0a725389-1658890171990-ec48b4532d2200c02627c342dea3bd7d.png",
        url : "https://www.tiket.com/promo/campaign/tiket-paylater"
    },
    {
        id : 6,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/discovery-desktop/promo/2022/08/09/97942eed-c387-4d8d-be27-0c3328052c06-1660029573583-51e29624efb9d317933fe2d556bd4318.png",
        url : "https://www.tiket.com/promo/campaign/ovo"
    },
    {
        id : 7,
        img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/discovery-desktop/promo/2022/09/09/3d196087-c0a0-4ae0-93a6-1719a5d3b37a-1662720599203-9b5d111d90b272dd8bc54488284013f0.png",
        url : "https://www.tiket.com/promo/campaign/bank-mandiri"
    },
]

export default function BtnSlider({ direction, moveSlide }) {
    // console.log(direction, moveSlide);
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-banner-slide next" : "btn-banner-slide prev"}
      >
        <img src={direction === "next" ? ArrowRight : ArrowLeft} alt='next-img' />
      </button>
    );
  }

export const StaysPromoBannerSlider = () => {
  
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
      <div className="banner-container-slider">
      {dataSlider.map((obj, idx) => {
        return (
               <div
                key={idx}
                className={slideIndex === idx + 1 ? "banner-slide active-anim" : "banner-slide"}>
                   <img src={obj.img} alt={obj.title}/>
               </div>
              )
          })}
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
        
          <div className="container-banner-dots">
              {Array.from({length: 7}).map((item, idx) => (
                <div  
                  key={idx}
                  onClick={() => moveDot(idx + 1)}
                  className={slideIndex === idx + 1 ? "banner-dot active" : "banner-dot"}
                ></div>
            ))}
          </div>
      </div>
    )
}



// const [slideIndex , setSlideIndex] = useState(1)

// const nextSlide = () => {
//     if(slideIndex !== dataSlider.length){
//         setSlideIndex(slideIndex + 1)
//     } 
//     else if (slideIndex === dataSlider.length){
//         setSlideIndex(1)
//     }
// }

// const prevSlide = () => {
//     if(slideIndex !== 1){
//         setSlideIndex(slideIndex - 1)
//     }
//     else if (slideIndex === 1){
//         setSlideIndex(dataSlider.length)
//     }
// }

// const moveDot = index => {
//     setSlideIndex(index)
// }

// return (
// <div className='stays-promo-banner-img-section'>
//     {dataSlider.map((obj , idx) => {
//         return(
//             <div lassName='stays-promo-banner-img' key={idx} >
//                 <img src={obj.img} alt='banner'/>
//             </div>
//         )
//     })}
//     <div className='stays-promo-banner-slide'>
//       <ArrowLeft  moveSlide={nextSlide} direction={"next"} className='stays-promo-banner-left-icon'/>
//       <ArrowRight  moveSlide={prevSlide} direction={"prev"}  className='stays-promo-banner-right-icon'/>
//     </div>
//     <div className="container-dots">
//         {Array.from({length: 6}).map((item, idx) => (
//           <div  
//             key={idx}
//             onClick={() => moveDot(idx + 1)}
//             className={slideIndex === idx + 1 ? "dot active" : "dot"}
//           ></div>
//       ))}
//     </div>
// </div>
// )