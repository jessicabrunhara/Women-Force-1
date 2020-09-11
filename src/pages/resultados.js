import React, { useState, useEffect } from 'react';
import firebase from '../plugins/firebase'

const Resultados = () => {
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
      {recomendation.map((i, index) => {
        return (
        <li key={index}>
        Empresa {i.company}
        <br />
        Setor: {i.setor}
        <br />
        Possui plano de carreira: {i.career}
        <br />
        Benefícios: {i.benefits}
        <br />
        Ambiente inclusivo: {i.inclusive}
        <br />
        Ambiente com acessibilidade: {i.acessibility}
        <br />
        Ambiente seguro para mulheres: {i.safePlace}
        <br />
        Possui canal para denunciar assédio? : {i.channel}
        <br />
        Apoio maternidade/paternidade: {i.maternity}
        <br />
        Recomenda a empresa? : {i.recomendation}
        <br />
        Nota geral : {i.geral}
        <br />
        Quer deixar algum comentário sobre a empresa? : {i.comment}
        <br />

        </li>
            );
        })}
    </>
  )
}

export default Resultados
