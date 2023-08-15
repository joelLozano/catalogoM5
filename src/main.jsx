import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Card from './componentes/card/Card.jsx'
import Menu from './Menu/Menu.jsx'
import Alojamientos from './alojamientos/Alojamientos'


let array = [] 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Alojamientos/>
  </React.StrictMode>,
)
