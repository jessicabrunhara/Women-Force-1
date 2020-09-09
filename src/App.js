import React from 'react';
import WomenForceRouter from './routes'
import Header from './components/header/header';
import './assets/css/global.css'
import Banner from './components/home/Banner'
import Search from './components/home/Search'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <WomenForceRouter />
      <Banner />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
