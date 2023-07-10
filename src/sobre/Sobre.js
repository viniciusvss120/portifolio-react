import React from 'react'
import style from './Sobre.module.css'
import fundo from '../img/fundo.png'

const Sobre = () => {
  return (
    <div className={style.sobre} id='sobre'>
      {/* <img src={fundo}/> */}
      <div className={style.sobreinfo}>
        <h1>Sobre</h1>
        <p className={style.description}> Meu nome é Vinicius Silva Souza, sou desenvolvedor web, trabalhei por 1 ano no departamento de T.I de uma rede de supermercados. Meu cargo era de auxiliar de T.I, mas trabalhei prestando suporte aos usuários do sistema desenvolvido na empresa. 
        </p>
        <p className={style.description}>Tive uma breve experiência com desenvolvimento web, utilizando <strong>JavaScript, Node.js, Vue.js</strong> e <strong>MySQL</strong>, além de trabalhar com <strong> SQL Serve</strong>. <br /></p>
        <p className={style.description}>
        Gosto de trabalhar em equipe e busco sempre me atualizar e melhorar minhas habilidades, comecei a atuar na área de T.I no inicio de 2021 e passei gostar ainda mais dessa área, estou sempre em busca de oportunidades e desafios, para agregar ainda mais meu currículo e contribuir com a equipe.
        </p>
      </div>
    </div>
  )
}

export default Sobre
