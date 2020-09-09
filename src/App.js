import React from 'react';
import WomenForceRouter from './routes'
import Header from './components/header/header';
import '../src/global-css.css'

function App() {
  return (
    <div>
      <Header />
      <WomenForceRouter />
    </div>
  );
}

export default App;
