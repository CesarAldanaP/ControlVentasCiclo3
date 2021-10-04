import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container } from "reactstrap"

const data = [
    { id: 101, Nombre: " Cesar ", Apellido: " Aldana ", Rol: "Vendedor", Estado: " Activo " },
    { id: 102, Nombre: " Walter ", Apellido: " Allen ", Rol: "Vendedor", Estado: " Activo " },
    { id: 103, Nombre: " Aidi ", Apellido: " NNNN ", Rol: "Vendedor", Estado: " Activo " },
    { id: 104, Nombre: " Laura ", Apellido: " NNNN ", Rol: "Vendedor", Estado: " Activo " },
    { id: 105, Nombre: " Catherin ", Apellido: " Londoño ", Rol: "Vendedor", Estado: " Activo " },
    { id: 106, Nombre: " Otro ", Apellido: " NNN ", Rol: "Vendedor", Estado: " Activo ", },
];

const agregar = () => {
    window.alert("Usuario Agregado Exitosamente")
}

const editar = () => {
    window.alert("Usuario Editado Exitosamente")
}

class Usuarios extends React.Component {
    state = {
        data: data,
    };
    render() {
        return (
            <>
                <Container>
                    <br /><br /><a>Usuarios</a><br /><br />
                    <Button color="success">Agregar Usuario</Button>{"    "}
                    <Button color="primary">Buscar</Button>
                    <input type="text"></input>
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
                                <td><Button onClick={agregar} color="success">Guardar</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
                <Container>
                    <br /><br /><a>Editar Usuario</a><br /><br />
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
                                <td>
                                    <select>
                                    <option>Vendedor</option>
                                    <option>Administrador</option>
                                </select></td>
                                <td><input type="text"></input></td>
                                <td><Button onClick={editar} color="primary">Guardar</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </>
        )
    }
}
export default Usuarios;