import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from "reactstrap"

const data = [
    { id: 1, Nombre: " Televisor ", Referencia: " LG ", Marca: "LG", VUnit: " 5400000 " },
    { id: 2, Nombre: " Celular ", Referencia: " Iphone ", Marca: "Iphone", VUnit: " 6200000 " },
    { id: 3, Nombre: " Portátil ", Referencia: " ASUS ", Marca: "ASUS", VUnit: " 2800000 " },
    { id: 4, Nombre: " Manos libres ", Referencia: " SONY ", Marca: "SONY", VUnit: " 190000 " },
    { id: 5, Nombre: " Mouse ", Referencia: " Logitech ", Marca: "Logitech", VUnit: " 45000 " },
    { id: 6, Nombre: " Teclado ", Referencia: " Logitech ", Marca: "Logitech", VUnit: " 65000 ", },
];

const agregar = () => {
    window.alert("Venta Agregada Exitosamente")
}

const editar = () => {
    window.alert("Venta Editada Exitosamente")
}

class Ventas extends React.Component {
    state = {
        data: data,
    };
    render() {
        return (
            <>
                <Container>
                    <br /><br /><a>Ventas</a><br /><br />
                    <Button color="success">Agregar Venta</Button>
                    <br /><br />
                    <Table>
                        <thead><tr><th>ID</th>
                            <th>Nombre</th>
                            <th>Referencia</th>
                            <th>Marca</th>
                            <th>Valor Unitario</th>
                            <th>Acciones</th></tr></thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.Nombre}</td>
                                    <td>{elemento.Referencia}</td>
                                    <td>{elemento.Marca}</td>
                                    <td>{elemento.VUnit}</td>
                                    <td><Button color="primary">Editar</Button>{"   "}
                                        <Button color="danger">Eliminar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
                <Container>
                    <br /><br /><a>Agregar Venta</a><br /><br />
                    <Table>
                        <thead><tr><th>ID</th>
                            <th>Nombre</th>
                            <th>Referencia</th>
                            <th>Marca</th>
                            <th>Valor Unitario</th>
                            <th>Acciones</th></tr></thead>
                        <tbody>
                                <tr>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                    <td><input type="text"></input></td>
                                <td><Button onClick={agregar} color="success">Guardar</Button></td>
                                </tr>
                        </tbody>
                    </Table>
                </Container>
                <Container>
                    <br /><br /><a>Editar Venta</a><br /><br />
                    <Table>
                        <thead><tr><th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Acciones</th></tr></thead>
                        <tbody>
                            <tr>
                                <td>104</td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="number"></input></td>
                                <td><Button onClick={editar} color="primary">Guardar</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </>
        )
    }
}
export default Ventas;