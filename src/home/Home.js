import React from 'react'
import style from './Home.module.css'
import Menu from '../Menu'
import foto from '../img/perfil.png'

const Home = () => {
  return (
    <div className={style.home}>
      <Menu />
      <div className={style.perfil}>
        <span className={style.bemvindo}>Bem vindos !</span>
        <div className={style.foto}>
          <img src={foto} alt="perfil" />
        </div>
        <span className={style.name}>Vinicius Silva Souza</span>
        <p className={style.description}>Web developer <br/> JavaScript | Node.js | Vue.js | React.js</p>
      </div>
    </div>
  )
}

export default Home
