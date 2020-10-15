import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

function HeroMainText({ hideDetails }) {
  return (
    <div className={classnames('hero-text-wrapper ph-20', {
      'mt-75': !hideDetails,
      'mt-28': hideDetails,
    })}>
      <div className='contained'>
        <Link to='/' className={classnames('header', {
          sm: hideDetails
        })}>
          <h1>Cash<span>or</span>Trade</h1>
        </Link>
        {!hideDetails && <>
          <p>No scalpers. No Brokers.<br/>Just real people sharing our love for music.</p>
          <a href="/" className='how-it-works mt-12'>How it works</a>
        </>}
      </div>
    </div>
  )
}

export default HeroMainText