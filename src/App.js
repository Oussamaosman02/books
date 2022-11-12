import './App.css'
import Lista from './componentes/lista'
import logo from './libro.webp'
import data from './datos.json'

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
      <Lista dats={datos} />
    </div>
  )
}

export default App
