
import React, { useState } from 'react';

import './tabs-layout-other-popular-destination.style.scss'

export const TabContentPopularArea = () => {
    const tabPopularAreaData =[
        {
            popularArea: 'Hotels in Bali',
            propertyCount : '8.294+ properties'
        },
        {
            popularArea: 'Hotels in Yogyakarta',
            propertyCount : '953+ properties'
        },
        {
            popularArea: 'Hotels in Jakarta',
            propertyCount : '2.260+ properties'
        },
        {
            popularArea: 'Hotels in Batam',
            propertyCount : '173+ properties'
        },
        {
            popularArea: 'Hotels in Cirebon',
            propertyCount : '63+ properties'
        },
        {
            popularArea: 'Hotels in Pekanbaru',
            propertyCount : '88+ properties'
        },
        {
            popularArea: 'Hotels in Tangerang',
            propertyCount : '144+ properties'
        },
        {
            popularArea: 'Hotels in Bekasi',
            propertyCount : '53+ properties'
        },
        {
            popularArea: 'Hotels in Balikpapan',
            propertyCount : '69+ properties'
        },
        {
            popularArea: 'Hotels in Solo',
            propertyCount : '154+ properties'
        },
        {
            popularArea: 'Hotels in Padang',
            propertyCount : '157+ properties'
        },
        {
            popularArea: 'Hotels in Singapore',
            propertyCount : '619+ properties'
        },
        {
            popularArea: 'Hotels in Kuala Lumpur',
            propertyCount : '2.354+ properties'
        },
        {
            popularArea: 'Hotels in Palembang',
            propertyCount : '137+ properties'
        },
        {
            popularArea: 'Hotels in Bandar Lampung',
            propertyCount : '98+ properties'
        }
    ]
    return(
        <div className='tab-content-popular-area-container'>
            <div className='tab-content-popular-area-content'>
                {tabPopularAreaData.map((popularArea , idx) => 
                    <div className='tab-content-popular-area-content-container' key={idx}>
                        <p className='tab-content-popular-area-content-title' >{popularArea.popularArea}</p>
                        <p className='tab-content-popular-area-content-span' key={idx}>{popularArea.propertyCount}</p>
                    </div>
                )}
            </div>
        </div>
    )
}


export const TabContentPopularHotels = () => {
    const tabPopularAreaData =[
        {
            popularArea: 'Hotel Borobudur Jakarta',
            propertyCount : '343+ reviews'
        },
        {
            popularArea: 'Adimulia Hotel Medan',
            propertyCount : '192+ reviews'
        },
        {
            popularArea: 'Hotel Ciputra Jakarta',
            propertyCount : '219+ reviews'
        },
        {
            popularArea: 'Hotel Louis Kienne Pemuda',
            propertyCount : '217+ reviews'
        },
        {
            popularArea: '7 Days Premium Jatinegara',
            propertyCount : '201+ reviews'
        },
        {
            popularArea: 'Vasa Hotel Surabaya',
            propertyCount : '119+ reviews'
        },
        {
            popularArea: 'Permata Kuta Hotel',
            propertyCount : '151+ reviews'
        },
        {
            popularArea: 'Royal Kuningan Hotel',
            propertyCount : '166+ reviews'
        },
        {
            popularArea: 'Discovery Ancol',
            propertyCount : '374+ reviews'
        },
        {
            popularArea: 'Resorts World Genting',
            propertyCount : '82+ reviews'
        },
        {
            popularArea: 'Maxonehotels at Balikpapan',
            propertyCount : '124+ reviews'
        },
        {
            popularArea: 'THE 1O1 Bandung Dago',
            propertyCount : '282+ reviews'
        },
        {
            popularArea: 'Wyndham Opi Hotel Palembang',
            propertyCount : '166+ reviews'
        },
        {
            popularArea: 'Selyca Mulia Hotel Convention',
            propertyCount : '143+ reviews'
        },
        {
            popularArea: 'The Rinra Makassar',
            propertyCount : '164+ reviews'
        }
    ]
    return(
        <div className='tab-content-popular-area-container'>
            <div className='tab-content-popular-area-content'>
                {tabPopularAreaData.map((popularArea , idx) => 
                    <div className='tab-content-popular-area-content-container' key={idx}>
                        <p className='tab-content-popular-area-content-title' >{popularArea.popularArea}</p>
                        <p className='tab-content-popular-area-content-span' >{popularArea.propertyCount}</p>
                    </div>
                )}
            </div>
        </div>
    )
}


export const TabsLayoutOtherPopularDestination = () => {
    const [currentTab , setCurrentTab] = useState('1');
    const tabs = [
        {
            id:1,
            tabTitle: 'Area Popular',
            tabContent:  <TabContentPopularArea />
        },
        {
            id:2,
            tabTitle: 'Hotel Popular',
            tabContent:  <TabContentPopularHotels/>
        }
    ]

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='tabs-layout-container'>
            <div className='tabs-layout-title'>
                <div className='tabs-id'>
                    {tabs.map((tab, idx) =>
                        <button key={idx} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                    )}
                </div>
            </div>
            <div className='tabs-layout-content'>
                {tabs.map((tab, idx) =>
                    <div key={idx}>
                        {currentTab === `${tab.id}` && <div><p>{tab.tabContent}</p></div>}
                    </div>
                )}
            </div>
        </div>
    );
}