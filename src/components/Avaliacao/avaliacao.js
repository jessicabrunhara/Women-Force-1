import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../../plugins/firebase'
import Input from '../input/input';
import './avaliacao.css';

const FormAvaliar = () => {

  const [company, setCompany] = useState('');
  const [career, setCareer] = useState('');
  const [benefits, setBenefits] = useState('');
  const [inclusive, setInclusive] = useState('');
  const [acessibility, setAcessibility] = useState('');
  const [safePlace, setSafePlace] = useState('');
  const [channel, setChannel] = useState('');
  const [maternity, setMaternity] = useState('');
  const [recomendation, setRecomendation] = useState('');
  const [comment, setComment] = useState('');
  const [geral, setGeral] = useState('');
  const [setor, setSector] = useState('');

  const history = useHistory()

  const sendAvaliation = () => {
    if (!company || !career || !benefits || !inclusive || !acessibility || !safePlace || !channel || !maternity || !recomendation || !geral || !setor) {
      console.log('Preencha todos os campos')
    } else {
      const avaliation = firebase.firestore().collection('avaliations')
      avaliation.doc().set({
        company,
        career,
        benefits,
        inclusive,
        acessibility,
        safePlace,
        channel,
        maternity,
        recomendation,
        comment,
        geral,
        setor
      }).then(() => {
        console.log('Enviado')
        history.push('/resultados')
      }).catch((error) => {
        console.log(error)
      })
    }
  };

  return (
    <>
      <h1 className='title=avaliation'>Avalie as empresas</h1>
      <h4>Avalie a empresa que você trabalha/trabalhou.</h4>
      <form className='form-wrapper'>

        <div className='company-sector-wrapper'>
          <div className='input-text-wrapper'>
            <label>Empresa: </label>
            <Input className='input-text' type='text' value={company} onChange={(e) => setCompany(e.target.value)} ></Input>
          </div>
          <div className='input-text-wrapper'>
            <label>Setor: </label>
            <Input className='input-text' type='text' value={setor} onChange={(e) => setSector(e.target.value)} ></Input>
          </div>
        </div>

        <div className='input-wrapper'>
          <p>Possui plano de carreira?</p>
          <div className='input-radio-wrapper'>
            <Input className='input-radio' name='career' type='radio' value='sim' onChange={(e) => setCareer(e.target.value)}></Input>
            <label >Sim</label>
            <Input className='input-radio' name='career' type='radio' value='nao' onChange={(e) => setCareer(e.target.value)}></Input>
            <label>Não</label>
          </div>
        </div>

        <div className='input-wrapper'>
          <p>Benefícios:</p>
          <div className='input-radio-wrapper'>
            <Input className='input-radio' name='benefits' type='radio' value='ótimo' onChange={(e) => setBenefits(e.target.value)}></Input>
            <label>Ótimo</label>
            <Input className='input-radio' name='benefits' type='radio' value='bom' onChange={(e) => setBenefits(e.target.value)}></Input>
            <label>Bom </label>
            <Input className='input-radio' name='benefits' type='radio' value='regular' onChange={(e) => setBenefits(e.target.value)} ></Input>
            <label>Regular </label>
            <Input className='input-radio' name='benefits' type='radio' value='ruim' onChange={(e) => setBenefits(e.target.value)}></Input>
            <label>Ruim </label>
          </div>
        </div>

        <div className='input-wrapper'>
          <p>Ambiente Inclusivo:</p>
          <div className='input-radio-wrapper'>
            <Input className='input-radio' name='inclusive' type='radio' value='ótimo' onChange={(e) => setInclusive(e.target.value)}></Input>
            <label>Ótimo </label>
            <Input className='input-radio' name='inclusive' type='radio' value='bom' onChange={(e) => setInclusive(e.target.value)}></Input>
            <label>Bom </label>
            <Input className='input-radio' name='inclusive' type='radio' value='regular' onChange={(e) => setInclusive(e.target.value)} ></Input>
            <label>Regular </label>
            <Input className='input-radio' name='inclusive' type='radio' value='ruim' onChange={(e) => setInclusive(e.target.value)}></Input>
            <label>Ruim </label>
          </div>
        </div>

        <div className='input-wrapper'>
          <p>Ambiente com acessibilidade:</p>
          <div className='input-radio-wrapper'>
            <Input className='input-radio' name='acessibility' type='radio' value='ótimo' onChange={(e) => setAcessibility(e.target.value)}></Input>
            <label>Ótimo </label>
            <Input className='input-radio' name='acessibility' type='radio' value='bom' onChange={(e) => setAcessibility(e.target.value)}></Input>
            <label>Bom </label>
            <Input className='input-radio' name='acessibility' type='radio' value='regular ' onChange={(e) => setAcessibility(e.target.value)}></Input>
            <label>Regular </label>
            <Input className='input-radio' name='acessibility' type='radio' value='ruim' onChange={(e) => setAcessibility(e.target.value)}></Input>
            <label>Ruim </label>
          </div>
        </div>

        <div className='input-wrapper'>
          <p>Ambiente seguro para mulheres:</p>
          <div className='input-radio-wrapper'>
            <Input className='input-radio' name='safe-place' type='radio' value='ótimo' onChange={(e) => setSafePlace(e.target.value)}></Input>
            <label>Ótimo </label>
            <Input className='input-radio' name='safe-place' type='radio' value='bom' onChange={(e) => setSafePlace(e.target.value)}></Input>
            <label>Bom </label>
            <Input className='input-radio' name='safe-place' type='radio' value='regular' onChange={(e) => setSafePlace(e.target.value)}></Input>
            <label>Regular </label>
            <Input className='input-radio' name='safe-place' type='radio' value='ruim' onChange={(e) => setSafePlace(e.target.value)}></Input>
            <label>Ruim</label>
          </div>

        </div>
        <div className='input-wrapper'>
          <p>Possui canal para denunciar assédio?</p>
          <div className='input-radio-wrapper'>
            <Input className='input-radio' name='channel' type='radio' value='sim' onChange={(e) => setChannel(e.target.value)}></Input>
            <label>Sim</label>
            <Input className='input-radio' name='channel' type='radio' value='não' onChange={(e) => setChannel(e.target.value)}></Input>
            <label>Não</label>
          </div>
        </div>

        <div className='input-wrapper'>
          <p>Apoio Maternidade/Paternidade:</p>
          <div className='input-radio-wrapper'>
            <Input className='input-radio' name='maternity' type='radio' value='sim' onChange={(e) => setMaternity(e.target.value)}></Input>
            <label>Sim</label>
            <Input className='input-radio' name='maternity' type='radio' value='não'
              onChange={(e) => setMaternity(e.target.value)}></Input>
            <label>Não</label>
          </div>
        </div>

        <div className='input-wrapper'>
          <p>Recomenda a empresa?</p>
          <div className='input-radio-wrapper'>
            <Input className='input-radio' name='recomendation' type='radio' value='sim' onChange={(e) => setRecomendation(e.target.value)}></Input>
            <label>Sim</label>
            <Input className='input-radio' name='recomendation' type='radio' value='não' onChange={(e) => setRecomendation(e.target.value)}></Input>
            <label>Não</label>
          </div>
        </div >

        <div className='input-select-wrapper'>
          <label>Nota geral</label>
          <select className='select' name='geral' value={geral} onChange={(e) => setGeral(e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>

        <div className='input-comment-text-wrapper'>
          <label>Quer deixar algum comentário sobre a empresa?</label>
          <Input className='input-comment-text' type='text' value={comment} onChange={(e) => setComment(e.target.value)}></Input>
        </div>

        <div className='btn-wrapper'>
          <button type='button' className='btn-style' children={'Enviar'} onClick={sendAvaliation}></button>
        </div>
      </form >
    </>
  )
}

export default FormAvaliar;