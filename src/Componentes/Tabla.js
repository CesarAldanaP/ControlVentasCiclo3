import { DataGrid } from '@material-ui/data-grid';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, Button, Container } from "reactstrap"
import ModalEditProduct from './VentanasModal/ModalEditProduct';
import Confirmacion from './VentanasModal/Confirmacion';

const columnas = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "nombre", headerName: "Nombre", width: 600 },
    { field: "referencia", headerName: "Referencia", width: 200 },
    { field: "valorUnitario", headerName: "Valor Unitario", width: 200 },
    { field: "idMarca", headerName: "ID Marca", width: 200 },
]

var Producto = function (id, nombre, referencia, valorUnitario, idMarca) {
    this.id = id;
    this.nombre = nombre;
    this.referencia = referencia;
    this.valorUnitario = valorUnitario;
    this.idMarca = idMarca;
}

const Tabla = () => {

    //variable que almacenará la lista de productos
    const [productos, setProductos] = useState([]);

    const [estadoListado, setEstadoListado] = useState(true);

    const [estadoMEditProduct, setEstadoMEditProduct] = useState(false);

    const [estadoConfirmacion, setEstadoConfirmacion] = useState(false);

    const [productEditado, setProductEditado] = useState();

    const obtenerProductos = () => {
        //Consultar la lista de productos desde la API
        fetch("http://localhost:3000/productos", { method: "get" })
            .then((res) => res.json())
            .then((json) => {
                var productosT = [];
                json.map((item) => {
                    productosT.push(new Producto(item.Id,
                        item.Nombre,
                        item.Referencia,
                        item.ValorUnitario,
                        item.IdMarca
                    ));
                });
                setProductos(productosT);
                setEstadoListado(false);
            });
    }

    if (estadoListado) {
        obtenerProductos();
    }

    const cerrarMEditProduct = () => {
        setEstadoMEditProduct(false);
    }

    const agregar = () => {
        const productN = new Producto(-1, "", "", "", "");
        setProductEditado(productN);
        setEstadoMEditProduct(true);
    }

    const editar = () => {
        if (productoSeleccionado) {
            const productN = productoSeleccionado;
            setProductEditado(productN);
            setEstadoMEditProduct(true);
        }
        else {
            window.alert("Seleccione un producto a editar")
        }
    }

    const eliminar = () => {
        if (productoSeleccionado) {
            const productN = productoSeleccionado;
            setProductEditado(productN);
            setEstadoConfirmacion(true);
        }
        else {
            window.alert("Seleccione producto a eliminar");
        }
    }

    const confirmarEliminacion = () => {

        fetch(`http://localhost:3000/prductos/${productEditado.id}`,
            {
                method: 'delete',
            }
        ).
            then((res) => {
                if (res.status != 200) {
                    throw Error(res.statusText);
                }
                return res.json();
            }).
            then((json) => {
                window.alert(json.message);
                setEstadoListado(true);
            }).

            catch(function (error) {
                window.alert(`error eliminando producto [${error}]`);
            });
    }

    const cerrarConfirmacion = () => {
        setEstadoConfirmacion(false);
    }

    var productoSeleccionado;

    return (
        <>
            <Container>
                <center>
                    <br /><br /><br /><a>Productos</a><br /><br />
                </center>
                <Button color="success" onClick={agregar}>
                    Agregar Producto
                </Button>{"    "}
                <Button color="primary" onClick={editar}>
                    Editar Producto
                </Button>{"    "}
                <Button color="danger" onClick={eliminar}>
                    Eliminar Producto
                </Button>{"    "}
                <Button color="primary">
                    Buscar
                </Button>{"    "}
                <input type="text"></input>
            </Container><br />
            <div style={{ padding: "10px 10px", height: 450, width: '100%'}}>
                <DataGrid
                    rows={productos}
                    columns={columnas}
                    pageSize={6}
                    rowsPerPageOptions={[7]}

                    onSelectionModelChange={(idProductos) => {
                        const productosSeleccionados = productos.filter(
                            function (fila) {
                                return fila.id == idProductos[0];
                            }
                        );
                        productoSeleccionado = productosSeleccionados[0];
                    }
                    }
                />
                <ModalEditProduct open={estadoMEditProduct} cerrar={cerrarMEditProduct} producto={productEditado} />
                <Confirmacion open={estadoConfirmacion}
                    titulo={"Eliminando un producto"}
                    mensaje={"Está seguro?"}
                    cerrar={cerrarConfirmacion}
                    aceptar={confirmarEliminacion}
                />
            </div>
            </>
            );
            }

export default Tabla;