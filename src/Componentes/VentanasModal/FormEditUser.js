import '../../App.css';
import React, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';

const obtenerEstilos = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),

        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '300px',
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
        },
    },
}));

const FormEditUser = ({ cerrarFormulario, usuarioEditado }) => {

    const estilos = obtenerEstilos();

    const [nombre, setNombre] = useState(usuarioEditado.nombre);
    const [idCiudad, setIdCiudad] = useState(usuarioEditado.idCiudad);
    const [telefono, setTelefono] = useState(usuarioEditado.telefono);
    const [direccion, setDireccion] = useState(usuarioEditado.direccion);
    const [correo, setCorreo] = useState(usuarioEditado.correo);
    const [usuario, setUsuario] = useState(usuarioEditado.usuario);
    const [clave, setClave] = useState(usuarioEditado.clave);

    const guardar = (e) => {
        fetch("http://localhost:3010/usuarios",
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Id: usuarioEditado.id,
                    Nombre: nombre,
                    IdCiudad: idCiudad,
                    Telefono: correo,
                    Direccion: direccion,
                    Correo: correo,
                    Usuario: usuario,
                    Clave: clave
                })
            }
        ).
            then((res) => res.json()).
            then((json) => {
                window.alert(json.usuario);
                cerrarFormulario();
            }).
            catch(function (error) {
                window.alert(`error agregando usuario [${error}]`);
            });
    }

    return (
        <form className={estilos.root} onSubmit={guardar}>
            <h3>Usuario</h3>

            <div>
                <label>Nombre</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Nombre"
                    variant="filled"
                    required
                    value={nombre}
                    onChange={(e) => { setNombre(e.target.value) }} />
            </div><br />

            <div>
                <label>Ciudad</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Ciudad"
                    variant="filled"
                    required
                    value={idCiudad}
                    onChange={(e) => { setIdCiudad(e.target.value) }} />
            </div><br />

            <div>
                <label>Telefono</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Teléfono"
                    variant="filled"
                    required
                    value={telefono}
                    onChange={(e) => { setTelefono(e.target.value) }} />
            </div><br />

            <div>
                <label>Dirección</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Dirección"
                    variant="filled"
                    required
                    value={direccion}
                    onChange={(e) => { setDireccion(e.target.value) }} />
            </div><br />

            <div>
                <label>Correo</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Correo"
                    variant="filled"
                    required
                    value={correo}
                    onChange={(e) => { setCorreo(e.target.value) }} />
            </div><br />

            <div>
                <label>Usuario</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Un Usuario"
                    variant="filled"
                    required
                    value={usuario}
                    onChange={(e) => { setUsuario(e.target.value) }} />
            </div><br />

            <div>
                <label>Clave</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Una Clave"
                    variant="filled"
                    required
                    value={clave}
                    onChange={(e) => { setClave(e.target.value) }} />
            </div><br />

            <div className="botones">
                <button type="submit" class="btn btn-outline-primary btn-md">Agregar</button>{"   "}
                <button type="submit" class="btn btn-outline-primary btn-md" onClick={cerrarFormulario}>Cancelar</button>
            </div>
        </form>
    )
}

export default FormEditUser;