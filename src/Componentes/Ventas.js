import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from "reactstrap"

const data = [
    { id: 1, Fecha: " 28/Sep/2021 ", Hora: " 15:08 ", Elementos: "1,2,3", Cliente: "Homecenter", VVenta: " 2401400 " },
    { id: 2, Fecha: " 29/Sep/2021 ", Hora: " 8:48 ", Elementos: "1,2,3", Cliente: "Exito", VVenta: " 4250100 " },
    { id: 3, Fecha: " 30/Sep/2021 ", Hora: " 11:21 ", Elementos: "1,2,3", Cliente: "Carulla", VVenta: " 24050150 " },
    { id: 4, Fecha: " 01/Oct/2021 ", Hora: " 8:56 ", Elementos: "1,2,3", Cliente: "Exito", VVenta: " 1125200 " }
    ,
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
                    <br /><br /><br /><a>Ventas</a><br /><br />
                    <Button color="success">Agregar Venta</Button>{"    "}
                    <Button color="primary">Buscar</Button>{"    "}
                    <input type="text"></input>
                    <br /><br />
                    <Table>
                        <thead><tr><th>ID</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Elementos</th>
                            <th>Cliente</th>
                            <th>Valor Venta</th>
                            <th>Acciones</th></tr></thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.Fecha}</td>
                                    <td>{elemento.Hora}</td>
                                    <td>{elemento.Elementos}</td>
                                    <td>{elemento.Cliente}</td>
                                    <td>{elemento.VVenta}</td>
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
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Elementos</th>
                            <th>Cliente</th>
                            <th>Valor Venta</th>
                            <th>Acciones</th></tr></thead>
                        <tbody>
                            <tr>
                                <td>5</td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="number"></input></td>
                                <td><Button onClick={agregar} color="success">Guardar</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
                <Container>
                    <br /><br /><a>Editar Venta</a><br /><br />
                    <Table>
                        <thead><tr><th>ID</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Elementos</th>
                            <th>Cliente</th>
                            <th>Valor Venta</th>
                            <th>Acciones</th></tr></thead>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="number"></input></td>
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