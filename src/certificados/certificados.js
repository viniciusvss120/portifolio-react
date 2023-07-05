import React from 'react'
import style from './certificados.module.css'
import instituicao from '../img/instituicao.png'

const certificados = () => {
  return (
    <div className={style.certificados}>
      <h1>Certificados</h1>
      <div className={style.container}>
        <div className={style.itens}>
          <img src={instituicao} alt=''/>
          <div className={style.itensInfo}>
            <p>React Completo</p>
            <span>Origamid</span>
            <a href='https://www.origamid.com/certificate/f9563dea'>Acessar certificado</a>
          </div>
        </div>
        <div className={style.itens}>
          <img src={instituicao} alt=''/>
          <div className={style.itensInfo}>
            <p>Vue.js 2 Completo</p>
            <span>Origamid</span>
            <a href='https://www.origamid.com/certificate/864c5ae3'>Acessar certificado</a>
          </div>
        </div>
        <div className={style.itens}>
          <img src={instituicao} alt=''/>
          <div className={style.itensInfo}>
            <p>Javascript Completo ES6+</p>
            <span>Origamid</span>
            <a href='https://www.origamid.com/certificate/55a1b68b/'>Acessar certificado</a>
          </div>
        </div>
        <div className={style.itens}>
          <img src={instituicao} alt=''/>
          <div className={style.itensInfo}>
            <p>Formação Node.js</p>
            <span>Origamid</span>
            <a href='https://udemy-certificate.s3.amazonaws.com/pdf/UC-8d1c7637-094c-4dcc-a24d-f39e4ba299cc.pdf'>Acessar certificado</a>
          </div>
        </div>
        <div className={style.itens}>
          <img src={instituicao} alt=''/>
          <div className={style.itensInfo}>
            <p>HTML 5 e CSS 3</p>
            <span>Origamid</span>
            <a href='https://www.origamid.com/certificate/cd8110fa/'>Acessar certificado</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default certificados
