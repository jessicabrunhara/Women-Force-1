import React from 'react';
import './header.css'
import Logo from '../Logo/logo';


const Header = () => {
  return (
    <header className='header-wrapper'>
      <div className='black-banner'>
        <h6 className='text-banner'>Black Lives Matter</h6>
      </div>
      <div className='blue-banner'>
        <Logo />
      </div>
    </header>
  )
}

export default Header;