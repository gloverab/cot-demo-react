import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <Link>
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
    </Link>
  )
}

export default Card