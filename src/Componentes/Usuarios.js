import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from "reactstrap"

const data = [
    { id: 1000000, Nombre: " Cesar ", Apellido: " Aldana ", Rol: "Vendedor", Estado: " Activo " },
    { id: 2000000, Nombre: " Walter ", Apellido: " Allen ", Rol: "Vendedor", Estado: " Activo " },
    { id: 3000000, Nombre: " Aidi ", Apellido: " NNNN ", Rol: "Vendedor", Estado: " Activo " },
    { id: 4000000, Nombre: " Laura ", Apellido: " NNNN ", Rol: "Vendedor", Estado: " Activo " },
    { id: 5000000, Nombre: " Catherin ", Apellido: " Londoño ", Rol: "Vendedor", Estado: " Activo " },
    { id: 6000000, Nombre: " Otro ", Apellido: " NNN ", Rol: "Vendedor", Estado: " Activo ", },
];

class Usuarios extends React.Component {
    state = {
        data: data,
    };
    render() {
        return (
            <>
                <Container>
                    <br /><br /><a>Usuarios</a><br /><br />
                    <Button color="success">Agregar Usuario</Button>
                    <br /><br />
                    <Table>
                        <thead><tr><th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Acciones</th></tr></thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.Nombre}</td>
                                    <td>{elemento.Apellido}</td>
                                    <td>{elemento.Rol}</td>
                                    <td>{elemento.Estado}</td>
                                    <td><Button color="primary">Editar</Button>{"   "}
                                        <Button color="danger">Eliminar</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
                <Container>
                    <br /><br /><a>Agregar Usuario</a><br /><br />
                    <Table>
                        <thead><tr><th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th>Acciones</th></tr></thead>
                        <tbody>
                            <tr>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td><input type="text"></input></td>
                                <td>
                                    <select>
                                        <option>Vendedor</option>
                                        <option>Administrador</option>
                                    </select>
                                </td>
                                <td><input type="text"></input></td>
                                <td><Button color="primary">Guardar</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </>
        )
    }
}
export default Usuarios;