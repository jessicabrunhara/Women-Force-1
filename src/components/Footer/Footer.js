import React from 'react';
import './footer.css';
import Logo from '../Logo/logo'


const Footer = () => (
  <footer className = 'footer'>
    <div ClassName = 'logo'>
      <Logo/>
    </div>
    <div className = 'description'>
    <h3>Desenvolvido por</h3>
      <p>Evellyn Thamires</p>
      <p>Jessica Brunhara</p>
      <p>Jucilene Barros</p>
      <p>Milena Ferraz</p>
    </div>
  </footer>
);

export default Footer;
