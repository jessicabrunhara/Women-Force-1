import React from 'react';
import Api from '../components/Table/Api.js'

const Avaliacao = () => {
  return ( 
    <div className="container-ranking">
      <div className="container-descricao">        
        <h3>Conheça o Ranking das melhores Empresas para se Trabalhar</h3>
        <h6>Ranking da Great Place to Work</h6>
    </div>   
      <Api />    
  </div>
  )
}
export default Avaliacao;