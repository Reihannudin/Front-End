import React from 'react';

import './stays-card-property.style.scss'

export const StaysCardProperty = () => {

  const CardPropertyData = [
    {
      id : 1,
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/970b309f-ae94-4cb1-83c9-b8dce0dea5e6-1604549427653-b0ffd3b67a98b2db3584f26657bd9e2b.jpg",
      typeProperty : "Apartement",
      totalProperty : "72.000+ properties"
    },
    {
      id : 2,
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/e3637f5d-2e76-4e9b-9c18-ebde1d4a935a-1604549427780-f504c456be67951fbe33707d24cf3779.jpg",
      typeProperty : "Villa",
      totalProperty : "12.000+ properties"
    },
    {
      id : 3,
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/3f6d10b9-7308-46e1-b983-e33dd1fcc38b-1604549427656-10be436ba835fdc673cf63ae012cb2be.jpg",
      typeProperty : "Budget Hotels",
      totalProperty : "71.000+ properties"
    },
    {
      id : 4,
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/c05b7093-33b8-45bd-9ba6-6b5a164dbce1-1604549427662-805e12698291530ac92e6254489e36ca.jpg",
      typeProperty : "Houses & Residence",
      totalProperty : "155.000+ properties"
    },
    {
      id : 5,
      img : "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/tix-hotel/static/2020/11/05/8a085dae-7987-444f-acff-72cb412ad80a-1604549427656-3d059a52e426e827e4acf1890ecd7e82.jpg",
      typeProperty : "Unique Lodging",
      totalProperty : "2.000+ properties"
    },
  ]

  return (
    <div className='stays-card-property-section'>
        <div className='stays-card-property-title-container'>
          <h2>We Have More Than Hotels</h2>
          <p>Find accommodation that fits your needs.</p>
        </div>
        <div className='stays-card-property-content'>
          <div className='stays-card-property-content-container'>
           {CardPropertyData.map((obj ,idx) =>{
            return(
              <div className='stays-card-property-content-box' key={idx}>
                <img src={obj.img} alt={obj.typeProperty}/>
                <h3>{obj.typeProperty}</h3>
                <p>{obj.totalProperty}</p>
              </div>
            )
           })}
          </div>
        </div>
    </div>
  )
}