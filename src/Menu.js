import React from 'react'
import style from './Menu.module.css'

const Menu = () => {
  function handleClick(){
    let menu = document.querySelector('.mobile')
    let hamburgue = document.querySelector('.barras')
    hamburgue.style.display = 'none'
    menu.style.display = 'grid'
    
  }

  function fechar(){
    let menu = document.querySelector('.mobile')
    let hamburgue = document.querySelector('.barras')

    menu.style.display = 'none'
    hamburgue.style.display = 'grid'
  }
  return (
    <>
      <header className={style.menu}>
        <nav className={style.menuItem}>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <div className={`${style.hamburgue} barras`} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <header className={`${style.menuMobile} mobile`}>
        <div className={style.fechar} onClick={fechar}>X</div>
        <nav className={`${style.menuItemMobile}`}>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
    </>
  )
}

export default Menu
