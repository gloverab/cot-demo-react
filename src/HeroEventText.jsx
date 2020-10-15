import React from 'react'
import classnames from 'classnames'

function HeroEventText({ event, shrink }) {
  return (
    <div className={classnames('event-text-wrapper hero-sizing', {
      shrink
    })}>
      <div className={'hero-text-wrapper contained ph-20 mb-16'}>
        <p className='event-text-wrapper-name'>{event.name}</p>
        <p className='event-text-wrapper-details'>{`${event.date} • ${event.venue}`}</p>
        <p className='event-text-wrapper-details'>{event.location}</p>
      </div>
    </div>
  )
}

export default HeroEventText