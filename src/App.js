import React from 'react';
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
      <Search />
    </div>
  );
}

export default App;
