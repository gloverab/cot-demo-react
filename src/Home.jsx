import React, { useEffect, useMemo, useState, useRef } from 'react'
import { Link, Switch, Route, useParams, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import Main from './Main'
import Event from './Event'
import NavWithSlider from './NavWithSlider';

const homeHeroImage = "http://i.imgur.com/Nnp4KbT.png"

function Home() {
  const heroImageRef = useRef()
  const location = useLocation()
  const [thisEvent, setThisEvent] = useState()

  useEffect(() => {
    if (location.pathname === '/') {
      setThisEvent()
    }
  }, [location])

  useEffect(() => {
    if (thisEvent) {
      heroImageRef.current.style.backgroundImage = `url(${thisEvent.imgSrc})`
    } else {
      heroImageRef.current.style.backgroundImage = `url(${homeHeroImage})`
    }
  }, [thisEvent])

  const isSubroute = useMemo(() => {
    return location.pathname.includes('events')
  }, [location])

  return (
    <>
      <div ref={heroImageRef} className={classnames('hero-sizing hero-image', {
          shrink: isSubroute
        })}>
        <div className={'hero-wrapper'} />
      </div>

      {thisEvent &&
        <div className={classnames('event-text-wrapper hero-sizing', {
          shrink: isSubroute
        })}>
          <div className={'hero-text-wrapper ml-20 mb-16'}>
            <p className='event-text-wrapper-name'>{thisEvent.name}</p>
            <p className='event-text-wrapper-details'>{`${thisEvent.date} • ${thisEvent.venue}`}</p>
            <p className='event-text-wrapper-details'>{thisEvent.location}</p>
          </div>
        </div>
      }

      <div className={classnames('hero-text-wrapper ml-20', {
        'mt-75': !isSubroute,
        'mt-28': isSubroute,
      })}>
        <div className='contained'>
          <Link to='/' className='header'>
            <h1>Cash<span>or</span>Trade</h1>
          </Link>
          {!isSubroute && <>
            <p>No scalpers. No Brokers.<br/>Just real people sharing our love for music.</p>
            <a href="/" className='how-it-works mt-12'>How it works</a>
          </>}
        </div>
      </div>
        
      
      {!isSubroute &&
        <div className='home-search-wrapper contained ph-20'>
          <NavWithSlider
            options={[{ label: 'Find Tickets' }, { label: 'Sell My Tickets' }]}
            textColor='#fff' />
          <div className='home-search-input-wrapper'>
            <input type='text' placeholder="What are you looking for?" className='home-search-input lh-32' />
            <button>Search</button>
          </div>
        </div>}

      <div className='home-main-wrapper'>
        <Switch>
          <Route path='/events/:eventId'>
            <Event
              setThisEvent={setThisEvent}
            />
          </Route>
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </div>
      
      
    </>
  )
}

export default Home