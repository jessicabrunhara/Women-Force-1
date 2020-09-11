import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WomenForceRouter from './routes'
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js'
import './assets/css/global.css'

function App() {
  return (
    <div>         
      <Header />
      <WomenForceRouter /> 
      <Footer />
    </div>
  );
}
export default App;
