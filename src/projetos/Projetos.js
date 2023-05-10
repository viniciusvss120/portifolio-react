import React from 'react'
import style from './Projetos.module.css'
import alugel from '../img/alugel.png'
import dogs from '../img/dogs.png'
import flexbox from '../img/flexbox.png'
import login from '../img/login.png'
import mec from '../img/mec.png'
import direita from '../img/direita.png'
import esquerda from '../img/esquerda.png'

const Projetos = () => {
  return (
    <div className={style.projetos}>
      <h1>Projetos</h1>
      <div className={style.container}>
        <button className={style.left}>
          <img src={esquerda} alt="esquerda" />
        </button>
        <button className={style.right}>
          <img src={direita} alt="direita" />
        </button>
        <div className={style.gallery_wraper}>
          <div className={style.gallery}>
            <img className={`${style.item} ${style.currentItem}`} src={alugel} alt="alugel" />
            <img className={`${style.item} ${style.currentItem}`} src={dogs} alt="dogs" />
            <img className={`${style.item} ${style.currentItem}`} src={flexbox} alt="flexbox" />
            <img className={`${style.item} ${style.currentItem}`} src={login} alt="login" />
            <img className={`${style.item} ${style.currentItem}`} src={mec} alt="mec" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projetos
