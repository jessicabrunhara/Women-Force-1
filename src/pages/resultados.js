import React, { useState, useEffect } from 'react';
import firebase from '../plugins/firebase'
import { Card } from 'react-bootstrap'

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
      <h2>Recomendações</h2>
      <ul>
        <Card>
          {recomendation.map((i, index) => {
            return (
              <li key={index}>
                <Card.Header>
                  Empresa
                </Card.Header>
                <Card.Body>
                <Card.Text>
                  <p>
                  Nome: {i.name}
                  <br /> 
                  Primeira pergunta: {i.firstQuestion}
                  </p>
                </Card.Text>
                </Card.Body>
              </li>
            );
          })}
        </Card>
      </ul>
    </>
  )
}

export default Resultados
