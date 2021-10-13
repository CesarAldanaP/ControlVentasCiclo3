import '../../App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

const FormEditProduct = ({ cerrarFormulario, productoEditado }) => {

    const estilos = obtenerEstilos();

    const [nombre, setNombre] = useState(productoEditado.nombre);
    const [referencia, setReferencia] = useState(productoEditado.referencia);
    const [valorUnitario, setValorUnitario] = useState(productoEditado.valorUnitario);
    const [idMarca, setIdMarca] = useState(productoEditado.idMarca);

    const guardar = (e) => {
        fetch("http://localhost:3000/productos",
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Id: productoEditado.id,
                    Nombre: nombre,
                    Referencia: referencia,
                    ValorUnitario: valorUnitario,
                    IdMarca: idMarca
                })
            }
        ).
            then((res) => res.json()).
            then((json) => {
                window.alert(json.moneda);
                cerrarFormulario();
            }).
            catch(function (error) {
                window.alert(`error agregando producto [${error}]`);
            });
    }

    return (
        <form className={estilos.root} onSubmit={guardar}>
            <h3>Producto</h3>

            <div>
                <label>Nombre</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Nombre"
                    variant="filled"
                    required
                    value={nombre}
                    onChange={(e) => { setNombre(e.target.value) }}/>
            </div><br />

            <div>
                <label>Referencia</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Referencia"
                    variant="filled"
                    required
                    value={referencia}
                    onChange={(e) => { setReferencia(e.target.value) }}/>
            </div><br />

            <div>
                <label>Id Marca</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Id Marca"
                    variant="filled"
                    required
                    value={idMarca}
                    onChange={(e) => { setIdMarca(e.target.value) }}/>
            </div><br />

            <div>
                <label>Valor Unitario</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Valor Unitario"
                    variant="filled"
                    required
                    value={valorUnitario}
                    onChange={(e) => { setValorUnitario(e.target.value) }}/>
            </div><br />

            <div className="botones">
                <button type="submit" class="btn btn-outline-primary btn-md">Agregar</button>{"   "}
                <button type="submit" class="btn btn-outline-primary btn-md" onClick={cerrarFormulario}>Cancelar</button>
            </div>
        </form>
    )
}

export default FormEditProduct;