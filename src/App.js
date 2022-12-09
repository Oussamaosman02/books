import './App.css'
import Lista from './componentes/lista'
import logo from './libro.webp'
import data from './datos.json'
import { Link } from 'react-router-dom'

function App () {
  const datos = data.sort(function () {
    return Math.random() - 0.5
  })

  return (
    <div className='App'>
      <div className='imag'>
        <img src={logo} alt='Logo' />
        <img src={logo} alt='Logo' />
      </div>
      <h1>Libros</h1>
      <Link to='/order'>
        <button>EN ORDEN</button>
      </Link>
      <Link to='/read'>
        <button>LEIDOS</button>
      </Link>
      <Lista dats={datos} />
    </div>
  )
}

export default App
