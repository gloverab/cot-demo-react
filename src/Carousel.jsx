import React, { useCallback, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import { isMobile } from 'react-device-detect'
import CarouselCard from './CarouselCard'

const carouselData = [
  {
    id: 123456,
    name: 'Bob Weir and Wolf Brothers',
    details: 'Fri, Sep 20 • Ventura, CA',
    numSellers: 20,
    imgSrc: 'https://i.imgur.com/OBiotcH.png'
  },
  {
    id: 623962,
    name: 'The Avett Brothers',
    details: 'Fri, Sep 20 • Chicago, IL',
    numSellers: 10,
    imgSrc: 'https://i.imgur.com/VuVySXO.png'
  },
  {
    id: 293897,
    name: 'Phish',
    details: 'Fri, Sep 20 • New York, NY',
    numSellers: 2,
    imgSrc: 'https://i.imgur.com/jx7rOtA.jpg'
  },
  {
    id: 289384,
    name: 'Radiohead',
    details: 'Fri, Sep 21 • London, UK',
    numSellers: 23,
    imgSrc: 'https://i.imgur.com/tFrXA98.jpg'
  },
  {
    id: 124421,
    name: 'Khruangbin',
    details: 'Fri, Sep 21 • Portland, ME',
    numSellers: 8,
    imgSrc: 'https://i.imgur.com/DcVb09u.jpg'
  },
]

function Carousel() {
  const lineRef = useRef()
  const activeLineRef = useRef()
  const carouselRef = useRef()
  const [positionNum, setPositionNum] = useState()

  const setScrollWidth = useCallback(() => {
    const widthCalc = 112 - (100 * ((carouselRef.current.scrollWidth) - lineRef.current.offsetWidth)) / (window.innerWidth)
    const calc = ((40 * widthCalc) / 100) + 60

    activeLineRef.current.style.width = `${calc}%`
  }, [])

  useEffect(() => {
    if (!isMobile) {
      window.addEventListener('resize', setScrollWidth)
      setScrollWidth()
    }
    return () => window.removeEventListener('resize', setScrollWidth)
  }, [setScrollWidth])


  const handleScroll = useCallback((e) => {
    let ofFive = Math.floor(((e.target.scrollLeft + 130) * 5) / e.target.scrollWidth)
    const fullLineWidth = lineRef.current.offsetWidth

    if (isMobile) {
      if (((e.target.scrollWidth - e.target.scrollLeft < window.innerWidth + 20)) ||
          e.target.scrollWidth - e.target.scrollLeft === window.innerWidth
        ) {
        // This is the last item
        ofFive = 4
      }
  
      if (ofFive !== positionNum) {
        setPositionNum(ofFive)
        activeLineRef.current.style['margin-left'] = `${(fullLineWidth / 5) * ofFive}px`
      }
    } else {
      const activeLineWidth = activeLineRef.current.offsetWidth
      const totalDistance = fullLineWidth - activeLineWidth
  
      const scrollTo = (totalDistance * e.target.scrollLeft) / (e.target.scrollWidth - window.innerWidth)
      activeLineRef.current.style['margin-left'] = `${scrollTo}px`
    }
  }, [positionNum])

  return (
    <>
      <div
        ref={carouselRef}
        className={classnames('carousel pv-16', {
          snap: isMobile
        })}
        id='carousel-active-this-week'
        onScroll={handleScroll}
      >
        {carouselData.map(data => <CarouselCard key={data.id} data={data} />)}
      </div>
      <div ref={lineRef} className='carousel-line mh-80' id='carousel-line-this-week'>
        <div
          ref={activeLineRef}
          className={classnames('carousel-line-active', {
            mobile: isMobile
          })}
          id='carousel-line-active-this-week' />
      </div>
    </>
  )
}

export default Carousel