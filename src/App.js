import React from 'react'
import './App.css';
import Banner from './Componentes/Banner'
import Board from './Componentes/Board'
import Usuarios from './Componentes/Usuarios'
import Productos from './Componentes/Productos'
import Ventas from './Componentes/Ventas'
import LoginG from './LoginG';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
<div className="App">
      <Banner />
      <Board />
      <BrowserRouter><div id="login"><LoginG/></div></BrowserRouter>
      <div id="users"><Usuarios /></div>
      <div id="sales"><Ventas /></div >
      <div id="products"><Productos /></div>
    </div>
  );
}

export default App;