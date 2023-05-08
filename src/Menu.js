import React from 'react'
import style from './Menu.module.css'

const Menu = () => {
  return (
    <header className={style.menu}>
      <nav className={style.menuItem}>
        <a href="#">Home</a>
        <a href="#">Sobre</a>
        <a href="#">Habilidades</a>
        <a href="#">Projetos</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  )
}

export default Menu
