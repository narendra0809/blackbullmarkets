import React from 'react'
import  './header.css'

function Header() {
    
  return (
    <div className='header-container'>
      <div className='upper-header'>
        <div><h2>Welcome to market trend</h2></div>
        <div><input type="search" name="" id="" /></div>
        <div><ol className='nav-items'>
          <li>Persnol</li>
          <li>Partner</li>
          <li>Research</li>
          <li>Academy</li></ol></div>
      </div>
      <div className='lower-header'>
        <div className='brand-name'></div>
        <div className='categories'></div>
        <div className='entry-point'></div>
      </div>
    </div>
  )
}

export default Header