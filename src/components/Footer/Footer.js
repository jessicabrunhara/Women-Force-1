import React from 'react';
import './footer.css';

const Footer = (props) => (
  <footer className={props.className}>
    <div>
      <Img src={logo} alt="logo" className="logo" />
    </div>
    <div>
      <h3>Desenvolvido por</h3>
      <p>Evellyn Thamires</p>
      <p>Jessica Brunhara</p>
      <p>Jucilene Barros</p>
      <p>Milena Ferraz</p>
    </div>
    <div>
      <h3>Bootcamp</h3>
      <h3>Meetups</h3>
    </div>
  </footer>
);

export default Footer;
