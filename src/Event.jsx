import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { eventData } from './mocks'
import NavWithSlider from './NavWithSlider'
import OfferCard from './OfferCard'
import { offerData } from './mocks'


function Event({ setThisEvent }) {
  const { eventId } = useParams()
  let { path, url } = useRouteMatch()

  useEffect(() => {
    setThisEvent(eventData.find(e => e.id == eventId))
  }, [eventId, setThisEvent])

  return (
    <div>
      <div className='ph-20'>
        <NavWithSlider options={[{ label: 'Available Tickets', path: `${url}/available` }, { label: 'Sell My Tickets', path: `${url}/sell` }]} textColor='#888888' />
        <Switch>
          <Route path={`${path}/available`}>
            {offerData.map(offer => <OfferCard offer={offer} />)}
          </Route>
          <Route path={`${path}/sell`}>
            <h3>Sell content goes here</h3>
          </Route>
          <Redirect to={`${url}/available`}/>
        </Switch>
      </div>
    </div>
  )
}

export default Event