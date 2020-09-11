import React from 'react';
import CardResultados from '../components/Resultados/resultados'
import './resultadospage.css'

const Resultados = () => {

  return (
    <>
      <div className='page-description'>
        <p>Avaliações</p>
      </div>
      <div className='results-wrapper'>
        <CardResultados />
      </div>
    </>
  )
}

export default Resultados;