import React, { useState, useEffect } from 'react';
import firebase from '../../plugins/firebase'
import '../Resultados/resultados.css'

const CardResultados = () => {
  const [recomendation, setRecomendation] = useState([])

  useEffect(() => {
    firebase
      .firestore()
      .collection('avaliations')
      .get()
      .then((querySnapshot) => {
        setRecomendation(
          querySnapshot.docs
            .map((i) => ({ ...i.data(), idDoc: i.id }))
        )
      })
  }, [])

  return (
    <>
      {
        recomendation.map((i, index) => {
          return (
            <div key={index} className='result-card-wrapper'>


              <div className='company-setor-wrapper'>
                <div className='company'>
                  Empresa: {i.company}
                </div>
                <div className='sector'>
                  Setor: {i.setor}
                </div>
                <div className='options-wrapper'>
                </div>
              </div>

              <div className='career'>
                Possui plano de carreira: {i.career}
              </div>
              <div className='benefits'>
                Benefícios: {i.benefits}
              </div>
              <div className='inclusive'>
                Ambiente inclusivo: {i.inclusive}
              </div>
              <div className='acessibility'>
                Ambiente com acessibilidade: {i.acessibility}
              </div>
              <div className='safe-place'>
                Ambiente seguro para mulheres: {i.safePlace}
              </div>
              <div className='channel'>
                Possui canal para denunciar assédio? {i.channel}
              </div>
              <div className='maternity'>
                Apoio maternidade/paternidade: {i.maternity}
              </div>
              <div className='recomendation'>
                Recomenda a empresa?  {i.recomendation}
              </div>
              <div className='geral'>
                Nota geral: {i.geral}
              </div>
              <div className='comment-wrapper'>
                <p>Comentário: </p>
                <div className='comment'>
                  {i.comment}
                </div>
              </div>
            </div>

          );
        })
      }
    </>
  )
}

export default CardResultados
