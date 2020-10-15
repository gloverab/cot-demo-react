import React from 'react'
import StarIcon from './StarIcon';

function OfferCard({ offer }) {
  return (
    <div className='card card-offer p-12 mb-16'>
      <p className='label mb-12'>{offer.label}</p>
      <div className='flex-row'>
        <div className='profile-circle mr-12'>
        
        </div>
        <div className='flex-column'>
          <p className='sub-label'>{offer.details}</p>
          <div className='flex-row'>
            <StarIcon fill />
            <StarIcon fill />
            <StarIcon fill />
            <StarIcon fill />
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OfferCard