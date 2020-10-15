import React from 'react'
import Carousel from './Carousel'
import Card from './Card'

function Main() {
  return (
    <>
      <div className='home-main contained pt-30 pb-20'>
        <div className='section-home home-section-1 ph-20 mt-60'>
          <div className='section-header mb-16'>
            <h3>Happening this week</h3>
            <button className='secondary'>
              See all
            </button>
          </div>
        </div>
        
        <Carousel />

        <div className='section-home home-section-2 mt-60 ph-20'>
          <div className='section-header mb-16'>
            <h3>Recent News</h3>
          </div>
          <Card />
        </div>
      </div>
    </>
  )
}

export default Main