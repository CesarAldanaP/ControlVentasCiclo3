import React from 'react'
import './App.css';
import Banner from './Componentes/Banner'
import Board from './Componentes/Board'
import Usuarios from './Componentes/Usuarios'
import Productos from './Componentes/Productos'

function App() {
  return (
<div className="App">
      <Banner/>
      <Board/>
      <Usuarios/>
      <Productos/>
    </div>
  );
}

export default App;