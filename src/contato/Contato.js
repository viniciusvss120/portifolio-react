import React from 'react'
import style from './Contato.module.css'
// import nodemailer from 'nodemailer'

const Contato = () => {
  function handleSubmit(event){
    event.preventDefault()

    // let transporter = nodemailer.createTransport({
    //   host: "SMTP.office365.com",
    //   port: 587,
    //   secure: false,
    //   auth: {
    //       user: "vinicius100@live.com",
    //       pass: "93062435vi"
    //   }
    // })

    // transporter.sendMail({
    //   from: "DOGS <vinicius100@live.com>",
    //   to: "viniciusvss120@gmail.com",
    //   subject: "MSG",
    //   text: "Token"
    // })
  }
  return (
    <div className={style.contato}>
      <h1>Contato</h1>
      <p className={style.descricao}>Pode entrar em contato enviando um e-mail, através desse formulário ou pelas minhas redes socias logo abaixo.</p>
      <form onSubmit={handleSubmit}>
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
