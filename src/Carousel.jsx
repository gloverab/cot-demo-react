import React, { useCallback, useEffect, useRef, useState } from 'react'
import classnames from 'classnames'
import { isMobile } from 'react-device-detect'
import CarouselCard from './CarouselCard'
import { eventData } from './mocks'

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
        {eventData.map(data => <CarouselCard key={data.id} data={data} />)}
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