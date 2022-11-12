import './Order.css'
import Lista from './componentes/lista'
import logo from './libro.webp'
import data from './datos.json'

function Order () {
  const dates = data.filter(lib => lib.leido === 'false')
  const datos = dates.sort(function (a, b) {
    if (a.palabras > b.palabras) {
      return 1
    }
    if (a.palabras < b.palabras) {
      return -1
    }
    return 0
  })
  return (
    <div className='Order'>
      <div className='imag'>
        <img src={logo} alt='Logo' />
        <img src={logo} alt='Logo' />
      </div>
      <h1>Libros</h1>
      <Lista dats={datos} />
    </div>
  )
}

export default Order
