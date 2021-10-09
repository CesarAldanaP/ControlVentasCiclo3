import { AppBar, Toolbar, Button } from '@material-ui/core';
import React, {useState} from 'react'
import './css/Banner.css'
import ModalLogin from './ModalLogin'

const Banner = () => {

    const [estadoModal, setEstadoModal] = useState(false);
    //rutina que abre la ventana modal
    const abrirModal = () => {
        setEstadoModal(true);
    }

    //rutina que cierra la ventana modal
    const cerrarModal = () => {
        setEstadoModal(false);
    }
    return (
        <AppBar>
            <Toolbar className="banner">
                <a href="/" className="logo">Cail Wace</a>
                <ul>
                    <li><Button className="boton" href="Users">Usuarios</Button></li>
                    <li><Button className="boton" href="Sales">Ventas</Button></li>
                    <li><Button className="boton" href="Products">Productos</Button></li>
                    <li><Button className="boton" onClick={abrirModal}>Login</Button></li>
                </ul>
            </Toolbar>
            <ModalLogin open={estadoModal} cerrar={cerrarModal} />
        </AppBar>
    );
}

export default Banner;