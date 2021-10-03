import React from 'react'
import './css/Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <a href="/" className="logo">Cail Wace</a>
            <ul>
                <li><a href="#users">Usuarios</a></li>
                <li><a href="#sales">Ventas</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </div>
    );
}

export default Banner;