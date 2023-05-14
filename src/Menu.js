import React from 'react'
import style from './Menu.module.css'

const Menu = () => {
  return (
    <header className={style.menu}>
      <nav className={style.menuItem}>
        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  )
}

export default Menu
