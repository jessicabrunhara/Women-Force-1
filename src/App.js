import React from 'react';
import ControlledCarousel from './Carousel.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import WomenForceRouter from './routes'
import Header from './components/header/header';
import './assets/css/global.css'
import Banner from './components/home/Banner'
import Search from './components/home/Search'

function App() {
  return (
    <div>
         
      <Header />
      <WomenForceRouter />
      <Banner />
      <section className="search">
      <Search />
      </section>
      <ControlledCarousel />
    </div>
  );
}
export default App;
