import React from 'react';
import './footer.css';
import Logo from '../Logo/logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Logo />
      </div>
      <div className="description">
        <h3>
          Desenvolvido por Evellyn Thamires | Jessica Brunhara | Jucilene Barros
          | Milena Ferraz
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
