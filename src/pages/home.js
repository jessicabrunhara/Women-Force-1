import React from 'react';
import Banner from '../components/home/Banner'
import Search from '../components/home/Search'
import ControlledCarousel from '../Carousel.js';

const Home = () => {

    return (
    <div>
        <Banner />
      <section className="search">
      <Search />
      </section>
      <section className="carousel">
      <ControlledCarousel />
      </section>
    </div>
    )
}
export default Home