import React from 'react'
import Carousel from './Carousel'

function Home() {
  return (
    <>
      <div className='hero-image'>
        <div className='hero-wrapper'>
          <div className='hero-text-wrapper contained ml-20 mt-75'>
            <h1>Cash<span>or</span>Trade</h1>
            <p>No scalpers. No Brokers.<br/>Just real people sharing our love for music.</p>
            <a href="/" className='how-it-works mt-12'>How it works</a>
          </div>
        </div>
      </div>
      
      <div className='home-search-wrapper contained ph-20'>
        <div className='home-search-nav mb-16'>
          <a href='/' className='home-search-nav-link active lh-32'>Find tickets</a>
          <a href='/' className='home-search-nav-link lh-32'>Sell my tickets</a>
          <div className='home-search-nav-active-line' id='home-search-nav-active-line'>
        </div>
        </div>
        <div className='home-search-input-wrapper'>
          <input type='text' placeholder="What are you looking for?" className='home-search-input lh-32' />
          <button>Search</button>
        </div>
      </div>
      
      <div className='home-main-wrapper'>
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
            <div className='card card-full'>
              <div className='card-img-wrapper'>
                <img className='card-hero' src='https://i.imgur.com/WTj827d.png' alt='street team' />
              </div>
              <div className='card-text-wrapper mb-16 p-10'>
                <p className='card-event-name lh-24'>Join Street Team</p>
                <p className='card-event-details mb-16'>You go to shows every week like it’s your job, so why not make it your job? See free shows and help fans score for face.</p>
                <a href='/' className='mb-6'>Join now</a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home