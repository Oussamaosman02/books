import React from 'react'
import './lista.css'

export default function Lista ({ dats }) {
  const dat = dats
  return (
    <ul>
      {dat.map((d) => {
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
