import React from 'react'
import './App.css';
import Banner from './Componentes/Banner'
import { BrowserRouter } from 'react-router-dom';
import Rutas from './Componentes/Rutas';
import Tabla from './Componentes/Tabla'

function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Rutas />
    </BrowserRouter>
  );
}

export default App;