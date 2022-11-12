import React from 'react'
import './lista.css'
import data from '../datos.json'

export default function Lista () {
  const dat = data
  return (
    <ul>
      {dat
        .sort(function () {
          return Math.random() - 0.5
        })
        .map((d) => {
          return (
            <li key={`${d.palabras} ${d.paginas}`} className={d.leido}>
              <span>
                <img src={d.imagen} alt={d.titulo} />
                <h2>{d.titulo}</h2>
                <h3>{d.autor}</h3>
                <h6>{d.fecha}</h6>
              </span>
              <span>
                <h4>Paginas: {d.paginas}</h4>
                <h5>Palabras: {d.palabras}</h5>
                <h6 className='tiempo'>
                  Tiempo:{' '}
                  {d.tiempo ? d.tiempo : Math.round(d.palabras / 140 / 60)}
                </h6>
              </span>
            </li>
          )
        })}
    </ul>
  )
}
