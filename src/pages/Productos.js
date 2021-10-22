import React, { Fragment, useState, useEffect } from "react";
import {
  Grid,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import Search from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useTable from "../Componentes/Table/useTable";
import Confirmacion from "../Componentes/VentanasModal/Confirmacion"
import ModalEditProduct from "../Componentes/VentanasModal/ModalEditProduct"


const salesColumns = [
  { id: "id", label: "Id" },
  { id: "nombre", label: "Nombre" },
  { id: "referencia", label: "Referencia" },
  { id: "valorUnitario", label: "Valor Unit" },
  { id: "idMarca", label: "Id Marca" },
];

var Producto = function (id, nombre, referencia, valorUnitario, idMarca) {
  this.id = id;
  this.nombre = nombre;
  this.referencia = referencia;
  this.valorUnitario = valorUnitario;
  this.idMarca = idMarca;
}

const Productos = () => {

  //variable que almacenará la lista de productos
  const [productos, setProductos] = useState([]);

  const [estadoListado, setEstadoListado] = useState(true);

  const [estadoMEditProducto, setEstadoMEditProducto] = useState(false);

  const [estadoConfirmacion, setEstadoConfirmacion] = useState(false);

  const [productoEditado, setProductoEditado] = useState();

  const obtenerProductos = () => {
    //Consultar la lista de productos desde la API
    fetch("http://localhost:3010/productos", { method: "get" })
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

  const cerrarMEditProducto = () => {
    setEstadoMEditProducto(false);
  }

  const agregar = () => {
    const productoN = new Producto(-1, "", "", "", "");
    setProductoEditado(productoN);
    setEstadoMEditProducto(true);
  }

  const editar = () => {
    if (productoSeleccionado) {
      const productoN = productoSeleccionado;
      setProductoEditado(productoN);
      setEstadoMEditProducto(true);
    }
    else {
      window.alert("Seleccione un producto a editar")
    }
  }

  const eliminar = () => {
    if (productoSeleccionado) {
      const productoN = productoSeleccionado;
      setProductoEditado(productoN);
      setEstadoConfirmacion(true);
    }
    else {
      window.alert("Seleccione producto a eliminar");
    }
  }

  const confirmarEliminacion = () => {

    fetch(`http://localhost:3010/productos/${productoEditado.id}`,
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

  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const {
    TblContainer,
    TablePaginationCustom,
    TblHead,
    dataAfterPagingAndSorting,
  } = useTable(productos, salesColumns, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (item) => {
        if (target.value === "") return item;
        else
          return item.filter((x) => x.nombre.toLowerCase().includes(target.value));
      },
    });
  };

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ m: 5, p: 3 }}>
            <Grid container item xs={11}>
              <Typography variant="h6" component="h5">
                Productos
              </Typography>
            </Grid>
            <Divider variant="middle" />
            <br />
            <Toolbar>
              <TextField

                label="Buscar dato por cliente"
                sx={{ width: "80%" }}
                onChange={handleSearch}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <Search />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                sx={{ position: "absolute", right: "20px", p: 2 }}
                onClick={agregar}
              >
                Agregar
              </Button>
            </Toolbar>
            <TblContainer>
              <TblHead />
              <TableBody>
                {dataAfterPagingAndSorting().map((productos) => (
                  <TableRow key={productos.id}>
                    <TableCell>{productos.id}</TableCell>
                    <TableCell>{productos.nombre}</TableCell>
                    <TableCell>{productos.referencia}</TableCell>
                    <TableCell>{productos.valorUnitario}</TableCell>
                    <TableCell>{productos.idMarca}</TableCell>
                    <TableCell>
                      <Button
                        color="primary"
                        onClick={editar}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        color="primary"
                        onClick={eliminar}
                      >
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}

              </TableBody>
            </TblContainer>
            <TablePaginationCustom />
          </Paper>
        </Grid>
      </Grid>
      <ModalEditProduct open={estadoMEditProducto} cerrar={cerrarMEditProducto} producto={productoEditado} />
      <Confirmacion open={estadoConfirmacion}
        titulo={"Eliminando un producto"}
        mensaje={"Está seguro?"}
        cerrar={cerrarConfirmacion}
        aceptar={confirmarEliminacion}
      />
    </Fragment>
  )
}
export default Productos