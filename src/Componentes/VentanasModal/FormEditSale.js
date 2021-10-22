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

const FormEditSale = ({ cerrarFormulario, ventaEditada }) => {

    const estilos = obtenerEstilos();

    const [idCliente, setIdCliente] = useState(ventaEditada.idCliente);
    const [fecha, setFecha] = useState(ventaEditada.fecha);
    const [cuenta, setCuenta] = useState(ventaEditada.cuenta);
    const [idFormaPago, setIdFormaPago] = useState(ventaEditada.idFormaPago);
    const [factura, setFactura] = useState(ventaEditada.factura);

    const guardar = (e) => {
        fetch("http://localhost:3010/ventas",
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Id: ventaEditada.id,
                    idCliente: idCliente,
                    Fecha: fecha,
                    Cuenta: cuenta,
                    IdFormaPago: idFormaPago,
                    Factura: factura
                })
            }
        ).
            then((res) => res.json()).
            then((json) => {
                window.alert(json.venta);
                cerrarFormulario();
            }).
            catch(function (error) {
                window.alert(`error agregando venta [${error}]`);
            });
    }

    return (
        <form className={estilos.root} onSubmit={guardar}>
            <h3>Venta</h3>

            <div>
                <label>Id Cliente</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Id Cliente"
                    variant="filled"
                    required
                    value={idCliente}
                    onChange={(e) => { setIdCliente(e.target.value) }} />
            </div><br />

            <div>
                <label>Fechaa</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese la fecha"
                    variant="filled"
                    required
                    value={fecha}
                    onChange={(e) => { setFecha(e.target.value) }} />
            </div><br />

            <div>
                <label>Cuenta</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese cuenta"
                    variant="filled"
                    required
                    value={cuenta}
                    onChange={(e) => { setCuenta(e.target.value) }} />
            </div><br />

            <div>
                <label>Id Forma de pago</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Id forma de pago"
                    variant="filled"
                    required
                    value={idFormaPago}
                    onChange={(e) => { setIdFormaPago(e.target.value) }} />
            </div><br />

            <div>
                <label>Número de factura</label>
                <input type="text"
                    className="form-control"
                    placeholder="Ingrese Número de factura"
                    variant="filled"
                    required
                    value={factura}
                    onChange={(e) => { setFactura(e.target.value) }} />
            </div><br />

            <div className="botones">
                <button type="submit" class="btn btn-outline-primary btn-md">Agregar</button>{"   "}
                <button type="submit" class="btn btn-outline-primary btn-md" onClick={cerrarFormulario}>Cancelar</button>
            </div>
        </form>
    )
}

export default FormEditSale;