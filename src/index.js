import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Order from './Order'
import Read from './Read'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/order' element={<Order />} />
      <Route path='/read' element={<Read />} />
    </Routes>
  </BrowserRouter>
)
