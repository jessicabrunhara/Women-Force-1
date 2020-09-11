import React from 'react';
import '../header/header.css'
import Navbar from '../home/Navbar.js'

const Header = () => {
  return (
    <header className='header-wrapper'>
      <div className='black-banner'>
        <p>Black Lives Matter</p>
      </div>   
      <div className="menu">
        <Navbar />
      </div>  
    </header>
  )
}

export default Header;