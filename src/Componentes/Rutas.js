import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Board from './Board'
import Usuarios from './Usuarios';
import Ventas from './Ventas';
import Productos from './Productos';
import '../App.css';


const Rutas = () => {
    return (
        <Switch>
            <Route exact path='/' component={Board} />
            <Route exact path='/Users' component={Usuarios} />
            <Route exact path='/Sales' component={Ventas} />
            <Route exact path='/Products' component={Productos} />
        </Switch>
    )
}

export default Rutas;