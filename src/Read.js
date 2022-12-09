import './App.css'
import Lista from './componentes/lista'
import logo from './libro.webp'
import data from './datos.json'
import { Link } from 'react-router-dom'

function Read () {
  const dates = data.filter(lib => lib.leido === 'true')
  const datos = dates.sort(function (a, b) {
    if (a.tiempo > b.tiempo) {
      return 1
    }
    if (a.tiempo < b.tiempo) {
      return -1
    }
    return 0
  })
  return (
    <div className='Read'>
      <div className='imag'>
        <img src={logo} alt='Logo' />
        <img src={logo} alt='Logo' />
      </div>
      <h1>Libros</h1>
      <Link to='/'>
        <button>
          HOME
        </button>
      </Link>
      <h2 className='readed'>Se han leido {datos.length} desde 2022</h2>
      <Lista dats={datos} />
    </div>
  )
}

export default Read
