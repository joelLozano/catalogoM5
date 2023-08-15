import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Card from './componentes/card/Card.jsx'
import Menu from './Menu/Menu.jsx'


let array = [] 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
   <div className='test'>
    <Card  titulo="Casa de Fin de semana"/>
    <Card  titulo="Pa Dominguear"/>
   </div>
  </React.StrictMode>,
)
