import React from 'react'
import classnames from 'classnames'

function MenuIcon({ menuActive, setMenuActive }) {
  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <div className={classnames('menu-icon', {
      x: menuActive
    })} id='menu-icon' onClick={toggleMenu}>
      <div className='menu-line menu-line-1'></div>
      <div className='menu-line menu-line-2'></div>
      <div className='menu-line menu-line-3'></div>
    </div>
  )
}

export default MenuIcon