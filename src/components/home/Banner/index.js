import React from 'react';
import './banner.css'

export default () => {
  return (
    <div className='first-background'>
      <div className='content'>
        <h1 className='text-first-background'>Existe um lugar para <br />
        você na tecnologia</h1>
      </div>
      <div className='content'>
        <button className='banner-button'>Avalie</button>
      </div>
    </div>
  )
}