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
  

  React.useEffect(() => {
    const btn = document.querySelectorAll(".btn")
    let currentItem = 0
    const item = document.querySelectorAll(".img")
    const maxItem = item.length

    console.log(item)

    btn.forEach(control => {
      control.addEventListener("click", () => {
        const isLeft = control.classList.contains("Projetos_left__b+r+q")
  
        if(isLeft){
          currentItem -= 1
        }else{
          currentItem += 1
        }

        if(currentItem >= maxItem){
          currentItem = 0
        }

        if(currentItem < 0) {
          currentItem = maxItem - 1
        }
        
        item[currentItem].scrollIntoView({
          inline: "center",
          behavior: "smooth"
        })
        // item.forEach(index => {
          
        // })
        console.log(isLeft, currentItem)
      })
    })
  }, [])


  return (
    <div className={style.projetos}>
      <h1>Projetos</h1>
      <div className={style.container}>
        <button className={`${style.left} btn`}>
          <img src={esquerda} alt="esquerda" />
        </button>
        <button className={`${style.right} btn`}>
          <img src={direita} alt="direita" />
        </button>
        <div className={style.gallery_wraper}>
          <div className={style.gallery}>
            <img className={`${style.item} ${style.currentItem} img`} src={alugel} alt="alugel" />
            <img className={`${style.item} ${style.currentItem} img`} src={dogs} alt="dogs" />
            <img className={`${style.item} ${style.currentItem} img`} src={flexbox} alt="flexbox" />
            <img className={`${style.item} ${style.currentItem} img`} src={login} alt="login" />
            <img className={`${style.item} ${style.currentItem} img`} src={mec} alt="mec" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projetos
