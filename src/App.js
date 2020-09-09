import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import WomenForceRouter from './routes'
import Header from './components/header/header';
import './assets/css/global.css'

function App() {
  return (
    <div>         
      <Header />
      <WomenForceRouter />  
    </div>
  );
}
export default App;
