import React, { useEffect, useRef, useState } from 'react'
import classnames from 'classnames'

function NavDrawer({ menuActive, setMenuActive }) {
  const overlayRef = useRef()
  const drawerRef = useRef()
  const [show, setShow] = useState(false)

  const hideMenu = () => {
    setMenuActive(false)
  }

  useEffect(() => {
    if (menuActive && !show) {
      drawerRef.current.style.display = 'block'
      overlayRef.current.style.display = 'block'
      document.body.style.overflowY = 'hidden'
      setTimeout(() => setShow(true), 20)
    } else {
      setShow(false)
      setTimeout(() => {
        drawerRef.current.style.display = 'none'
        overlayRef.current.style.display = 'none'
        document.body.style.overflowY = 'visible'
      }, 301)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuActive])


  return (
    <>
      <div
        className={classnames('overlay', {
          show
        })}
        id='overlay'
        onClick={hideMenu}
        ref={overlayRef}
      />
      <div className={classnames('nav-drawer', {
        show
      })} id='nav-drawer' ref={drawerRef} />
    </>
  )
}

export default NavDrawer