import React from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import Button from '../Button/button';

export default () => {
  return (
    <div className="search-background">
      <div className="second-background">
        <div className="content">
          <h1 className="text-second-background">
            Veja as avaliações das empresas
          </h1>
        </div>
        <div className="content">
          <Button>
            <Link to="/resultados">Resultados</Link>
          </Button>
        </div>
      </div>
    </div>
  )
};
