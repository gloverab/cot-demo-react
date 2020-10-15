import React, { useEffect, useMemo, useState, useRef } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import Main from './Main'
import Event from './Event'
import NavWithSlider from './NavWithSlider'
import HeroEventText from './HeroEventText'
import HeroMainText from './HeroMainText'

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

      {thisEvent && <HeroEventText event={thisEvent} shrink={isSubroute} />}
      <HeroMainText hideDetails={isSubroute} />
        
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

      <div className='home-routes-wrapper'>
        <Switch>
          <Route path={`/events/:eventId`}>
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