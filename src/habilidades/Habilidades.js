import React from 'react'
import style from './Habilidades.module.css'
const Habilidades = () => {
  return (
    <div className={style.habilidades} id='habilidades'>
      <h1>Habilidades</h1>
      <ul className={style.nivel}>
        <li>
          <span>JavaScript: </span>
          <div className={style.stack}><div style={{width: "90%"}}></div></div>
          <span>90%</span>
        </li>
        <li>
          <span>Node.js:</span>
          <div className={style.stack}><div style={{width: "55%"}}></div></div>
          <span>55%</span>
        </li>
        <li>
          <span>Vue.js:</span>
          <div className={style.stack}><div style={{width: "75%"}}></div></div>
          <span>75%</span>
        </li>
        <li>
          <span>React.js:</span>
          <div className={style.stack}><div style={{width: "45%"}}></div></div>
          <span>45%</span>
        </li>
        <li>
          <span>Typescript:</span>
          <div className={style.stack}><div style={{width: "40%"}}></div></div>
          <span>40%</span>
        </li>
        <li>
          <span>MySQL:</span>
          <div className={style.stack}><div style={{width: "42%"}}></div></div>
          <span>42%</span>
        </li>  
      </ul>
    </div>
  )
}

export default Habilidades
