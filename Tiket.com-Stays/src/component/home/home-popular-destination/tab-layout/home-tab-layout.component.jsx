import React ,{ useState } from 'react'
import './home-tab-layout.style.scss'

export const TabContentDestinationHotel =() =>{
    const tabPopularDestinationHotels = [
        { 
            id: 1, 
            name : "Padma Hotel Bandung"
        },
        { 
            id: 2, 
            name : "The Gaia Hotel Bandung"
        },
        { 
            id: 3, 
            name : "Pullman Ciawi"
        },
      
        { 
            id: 4, 
            name : "InterContinental Bandung Dago Pakar"
        },
      
        { 
            id: 5, 
            name : "The Langham Jakarta"
        },
      
        { 
            id: 6, 
            name : "The Apurva Kempinski Bali"
        },
      
        { 
            id: 7, 
            name : "Pullman Bandung Grand Central"
        },
      
        { 
            id: 8, 
            name : "Grand Hyatt Jakarta"
        },
      
        { 
            id: 9, 
            name : "ASTON Anyer Beach Hotel"
        },
      
        { 
            id: 10, 
            name : "Fairmont Jakarta"
        },
      
        { 
            id: 11, 
            name : "Royal Tulip Gunung Geulis"
        },
      
        { 
            id: 12, 
            name : "Damar Langit"
        },
      
        { 
            id: 13, 
            name : "Chevilly Resort & Camp"
        },
      
        { 
            id: 14, 
            name : "Hotel Mulia Senayan Jakarta"
        },
      
        { 
            id: 15, 
            name : "Hotel terdekat"
        },
    ]
    
    return(
         <div className='tab-content-popular-area-container'>
            <div className='tab-content-popular-area-content-2'>
                {tabPopularDestinationHotels.map((value, idx) => 
                    <div className='tab-content-popular-area-content-container-2' key={idx}>
                        <p className='tab-content-popular-area-content-title'>{value.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export const TabContentDestinationVillas =() =>{
    const tabPopularDestinationVillas = [
        { 
            id: 1, 
            name : "Villa Batu Malang"
        },
        { 
            id: 2, 
            name : "Villa in Bogor"
        },
        { 
            id: 3, 
            name : "Villa in Bandung"
        },
      
        { 
            id: 4, 
            name : "Villa in Bali"
        },
      
        { 
            id: 5, 
            name : "Villa in Puncak"
        },
      
        { 
            id: 6, 
            name : "Villa in Jogja"
        },
        { 
            id: 8, 
            name : "Cheap Villa in Ubud"
        },
      
        { 
            id: 9, 
            name : "Villa Bandungan"
        },
      
        { 
            id: 10, 
            name : "Villa Dieng"
        },
      
        { 
            id: 11, 
            name : "Villa Pangandaran"
        },
      
        { 
            id: 12, 
            name : "Villa Ciater"
        },
      
        { 
            id: 13, 
            name : "Villa Sarangan"
        },
      
        { 
            id: 14, 
            name : "Villa di Lampung"
        },
      
        { 
            id: 15, 
            name : "Villa di Cisarua"
        },
        { 
            id: 7, 
            name : "Villa in Jakarta"
        },
      
    ]
    return(
        <div className='tab-content-popular-area-container'>
            <div className='tab-content-popular-area-content-2'>
                {tabPopularDestinationVillas.map((villa, idx) => 
                    <div className='tab-content-popular-area-content-container-2' key={idx}>
                        <p className='tab-content-popular-area-content-title' >{villa.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export const TabContentDestinationToDo =() =>{
    const tabPopularDestinationToDo = [
        { 
            id: 1, 
            name : "Dufan Ticket"
        },
        { 
            id: 2, 
            name : "Ancol Ticket"
        },
        { 
            id: 3, 
            name : "Taman Safari Bogor Ticket"
        },
      
        { 
            id: 4, 
            name : "Jakarta Aquarium Ticket"
        },
      
        { 
            id: 5, 
            name : "Trans Studio Bandung"
        },
      
        { 
            id: 6, 
            name : "Universal Studios Singapore"
        },
      
        { 
            id: 7, 
            name : "Legoland Malaysia"
        },
      
        { 
            id: 8, 
            name : "Playtopia PIK"
        },
      
        { 
            id: 9, 
            name : "Kidzania Jakarta"
        },
      
        { 
            id: 10, 
            name : "Trans Studio Cibubur Ticket"
        },
      
        { 
            id: 11, 
            name : "Concert Ticket"
        },
      
        { 
            id: 12, 
            name : "Best Places to Visit in Bali"
        },
      
        { 
            id: 13, 
            name : "Best Places to Visit in Jakarta"
        },  
        { 
            id: 15, 
            name : "Best Places to Visit in Singapore"
        },
        { 
            id: 16, 
            name : "Best Places to Visit in Bandung"
        },
    ]
    return(
        <div className='tab-content-popular-area-container'>
           <div className='tab-content-popular-area-content-2'>
               {tabPopularDestinationToDo.map((value, idx) => 
                   <div className='tab-content-popular-area-content-container-2' key={idx}>
                       <p className='tab-content-popular-area-content-title'>{value.name}</p>
                   </div>
               )}
           </div>
       </div>
   )
}

export const TabContentDestinationFlights =() =>{
    const tabPopularDestinationFlights = [
        { 
            id: 1, 
            name : "Cheap Flight Ticket Air Asia"
        },
        { 
            id: 2, 
            name : "Cheap Flight Ticket Citilink"
        },
        { 
            id: 3, 
            name : "Cheap Flight Ticket Garuda Indonesia"
        },
      
        { 
            id: 4, 
            name : "Cheap Flight Ticket Lion Air"
        },
      
        { 
            id: 5, 
            name : "Cheap Flight Ticket Sriwijaya Air"
        },
      
        { 
            id: 6, 
            name : "Cheap Flight Ticket Super Air Jet"
        },
      
        { 
            id: 7, 
            name : "Flight Ticket Balikpapan to Surabaya"
        },
      
        { 
            id: 8, 
            name : "Flight Ticket Batam to Padang"
        },
      
        { 
            id: 9, 
            name : "Flight Ticket Jakarta to Bali"
        },
      
        { 
            id: 10, 
            name : "Flight Ticket Jakarta to Jogja"
        },
      
        { 
            id: 11, 
            name : "Flight Ticket Jakarta to Medan"
        },
      
        { 
            id: 12, 
            name : "Flight Ticket Jakarta to Padang"
        },
      
        { 
            id: 13, 
            name : "Flight Ticket Medan to Batam"
        },      
        { 
            id: 15, 
            name : "Flight Ticket Medan to Jakarta"
        },
        { 
            id: 16, 
            name : "Flight Ticket Samarinda to Surabaya"
        },
    ]
    return(
        <div className='tab-content-popular-area-container'>
           <div className='tab-content-popular-area-content-2'>
               {tabPopularDestinationFlights.map((value, idx) => 
                   <div className='tab-content-popular-area-content-container-2'  key={idx}>
                       <p className='tab-content-popular-area-content-title' >{value.name}</p>
                   </div>
               )}
           </div>
       </div>
   )
}

export const HomeTabsLayout = () => {
    const [currentTab , setCurrentTab] = useState('1')
    const tabs = [
        {
            id: 1,
            tabTitle : 'Hotel',
            tabContent : <TabContentDestinationHotel />
        },
        {
            id: 2,
            tabTitle : 'Villa',
            tabContent : <TabContentDestinationVillas />
        },
        {
            id: 3,
            tabTitle : 'To Do',
            tabContent : <TabContentDestinationToDo />
        },
        {
            id: 4,
            tabTitle : 'Flights',
            tabContent : <TabContentDestinationFlights />
        }
    ]

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id)
    }

    return(
        <div className='tabs-layout-container'>
        <div className='tabs-layout-title-2'>
            <div className='tabs-id'>
                {tabs.map((tab, idx) =>
                    <button key={idx} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
        </div>
        <div className='tabs-layout-content'>
            {tabs.map((tab, idx) =>
                <div className ='tabs-layout-content-box' key={idx}>
                    {currentTab === `${tab.id}` && <div className='tabs-layout-content-box'>
                    <p>{tab.tabContent}</p>
                    </div>}
                </div>
            )}
        </div>
    </div>
    )
}