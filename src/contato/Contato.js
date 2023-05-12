import React from 'react'
import style from './Contato.module.css'

const Contato = () => {
  return (
    <div className={style.contato}>
      <h1>Contato</h1>
      <p className={style.descricao}>Pode entrar em contato enviando um e-mail, através desse formulário ou pelas minhas redes socias logo abaixo.</p>
      <form>
        <input type="text" placeholder='  Digite seu nome ...' />
        <input type="text" placeholder='  Digite seu e-mail ...' />
        <textarea name="mensagem" id="mensagem"  placeholder=' Mensagem...'></textarea>
        <button className={style.btn}>Enviar</button>
      </form>
      <div className={style.redes}></div>
    </div>
  )
}

export default Contato
