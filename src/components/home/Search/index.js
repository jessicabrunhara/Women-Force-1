import React from 'react'
import './search.css'
import imageSearch from '../../../assets/images/second-photo-banner.jpg'

export default () => {
  return (
    <div className='search-background'>
      <div className='container'>
        <div className='search-content'>
          <img src={imageSearch} alt="mulher na tecnologia" />
        </div>
        <div className='search-content search-text'>
          <h1>Apoiando mulheres na tecnologia</h1>
          <button>Resultados</button>
        </div>
      </div>
    </div>
  )
}