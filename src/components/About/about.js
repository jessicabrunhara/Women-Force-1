import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../About/about'

export default () => {
return (
<section className='about-background'>
  <Jumbotron >
    <h1 id='jumbo'>Sobre</h1>
    <p>
      Somos uma plataforma destinada a ajudar as mulheres a identificarem empresas na área de tecnologia que possuam ambiente inclusivo e seguro.
    </p>
    {/* <p>
      <Button variant="primary">Learn more</Button>
    </p> */}
  </Jumbotron>
</section>
)}