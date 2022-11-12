import './App.css'
import Lista from './componentes/lista'
import logo from './libro.webp'

function App () {
  return (
    <div className='App'>
      <div className='imag'>
        <img src={logo} alt='Logo' />
        <img src={logo} alt='Logo' />
      </div>
      <h1>Libros</h1>
      <Lista />
    </div>
  )
}

export default App
