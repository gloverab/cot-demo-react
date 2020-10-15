import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { eventData } from './mocks'
import NavWithSlider from './NavWithSlider'
import OfferCard from './OfferCard'
import { offerData } from './mocks'


function Event({ setThisEvent }) {
  const { eventId } = useParams()

  useEffect(() => {
    setThisEvent(eventData.find(e => e.id == eventId))
  }, [eventId, setThisEvent])

  return (
    <div>
      <div className='ph-20'>
        <NavWithSlider options={[{ label: 'Available Tickets' }, { label: 'Sell My Tickets' }]} textColor='#888888' />
        {offerData.map(offer => <OfferCard offer={offer} />)}
      </div>
    </div>
  )
}

export default Event