import React from 'react';

import './stays-accomondation.style.scss'

export const StaysAccommondation = () => {
  return (
    <div className='accommondation-section'>
      <div className='accommondation-title-container'>
        <h2 className='accommondation-title'>Our Choice For You</h2>
        <p className='accommondation-p' >Some accommodation options that you will definitely like.</p>
      </div>
      <div className='accommondation-container-component'>
        <div className='accommondation-component light-blue'>
            <div className='accommondation-card'>
              <h2 className='accommodation-card-h2'>
                Property in Bali
              </h2>
              <p className='accommondation-card-p'>8000+ property</p>
            </div>
        </div>
        <div className='accommondation-component blue'>
          <div className='accommondation-card'>
                <h2 className='accommodation-card-h2'>
                  Property in Jakarta
                </h2>
                <p className='accommondation-card-p'>2000+ property</p>
              </div>
          </div>
        <div className='accommondation-component red'>
        <div className='accommondation-card'>
              <h2 className='accommodation-card-h2'>
                Property in Yogyakarta
              </h2>
              <p className='accommondation-card-p'>1000+ property</p>
            </div>
        </div>
      </div>
      
    </div>
  )
}