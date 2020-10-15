import React, { useEffect, useRef } from 'react'

function NavWithSlider({ options, textColor }) {
  const navLink1 = useRef()
  const navLink2 = useRef()
  const lineRef = useRef()

  useEffect(() => {
    const refToUse = navLink1.current.offsetWidth > navLink2.current.offsetWidth ? navLink2 : navLink1
    const width = refToUse.current.offsetWidth - 14
    lineRef.current.style.width = `${width}px`

    const marginLeft = navLink1.current.offsetLeft - 20 + ((navLink1.current.offsetWidth - width) / 2)
    lineRef.current.style['margin-left'] = `${marginLeft}px`
  }, [])
  
  const handleClick = (e) => {
    e.preventDefault()
    navLink1.current.classList.remove('active')
    navLink2.current.classList.remove('active')
    e.target.classList.add('active')
    const widthDiff = (e.target.offsetWidth - lineRef.current.offsetWidth) / 2
    const newMargin = e.target.offsetLeft - 20 + widthDiff
    lineRef.current.style['margin-left'] = `${newMargin}px`
  }

  return (
    <div className='mb-16'>
      <a href='/' ref={navLink1} onClick={handleClick} className='nav-with-slider-link active lh-32' style={{ color: textColor }}>{options[0].label}</a>
      <a href='/' ref={navLink2} onClick={handleClick} className='nav-with-slider-link lh-32' style={{ color: textColor }}>{options[1].label}</a>
      <div ref={lineRef} className='nav-with-slider-line'/>
    </div>
  )
}

export default NavWithSlider