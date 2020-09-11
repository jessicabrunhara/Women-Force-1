import React from 'react';
import Banner from '../components/Banner/banner.js'
import Search from '../components/Search/search.js'
import Jumbotron from '../components/About/about.js'

const Home = () => {

    return (
    <div>
        <Banner />
      <section className="search">
      <Search />
      </section>
      <div className="carousel">
        <Jumbotron/>
      </div>
    </div>
    )
}
export default Home