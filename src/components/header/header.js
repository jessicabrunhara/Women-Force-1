import React from 'react';
import '../header/header.css'
import Logo from '../Logo/logo';


const Header = () => {
  return (
    <header className='header-wrapper'>
      <div className='black-banner'>
        <p>Black Lives Matter</p>
      </div>
      <div className='blue-banner'>
        <Logo />
      </div>
    </header>
  )
}

export default Header;