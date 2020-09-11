import React from 'react';
import { Link } from 'react-router-dom';
import './banner.css'
import Button from '../Button/button';

export default () => {
  return (
    <div className='first-background'>
      <div className='content'>
        <h1 className='text-first-background'>Apoiando mulheres na tecnologia</h1>
      </div>
      <div className='content'>
        <Button> 
          <Link to='/avaliacao'>Avalie Empresas</Link>
        </Button>
      </div>
    </div>
  )
}