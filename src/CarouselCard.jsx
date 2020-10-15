import React from 'react'
import { Link } from 'react-router-dom'

function CarouselCard({ data }) {
  return (
    <Link to={`events/${data.id}`}>
      <div className='card card-event mr-16 p-3'>
        <div className='card-event-img-wrapper'>
          <img className='card-event-hero' src={data.imgSrc} alt={data.name} />
        </div>
        <div className='card-text-wrapper p-10'>
          <p className='card-event-name'>{data.name}</p>
          <p className='card-event-details mb-6 lh-24'>{`${data.date} • ${data.location}`}</p>
          <a href='/'>{data.numSellers} sellers</a>
        </div>
      </div>
    </Link>
  )
}

export default CarouselCard