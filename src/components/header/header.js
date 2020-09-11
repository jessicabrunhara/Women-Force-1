import React from 'react';
import '../Header/header.css'
import Navbar from '../Navbar.js'

const Header = () => {
  return (
    <header className='header-wrapper'>
      <div className='black-banner'>
        <p className='text-black-lives-matter'>Black Lives Matter</p>
      </div>   
      <div className="menu">
        <Navbar />
      </div>  
    </header>
  )
}

export default Header;