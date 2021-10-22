import React, { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Productos from "./pages/Productos";
import Ventas from "./pages/Ventas";
import Usuarios from "./pages/Usuarios";
import Tabla from "./pages/Tabla";
import NavBar from "./Componentes/NavBar/NavBar";
import Home from './pages/Home'


function App() {
  return (
    <Fragment>
      <NavBar>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Usuarios" component={Usuarios} />
          <Route exact path="/Ventas" component={Ventas} />
          <Route exact path="/Productos" component={Productos} />
          <Route exact path="/Tabla" component={Tabla} />
        </Switch>
      </NavBar>
    </Fragment>
  );
}

export default App;
