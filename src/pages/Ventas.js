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
import ModalEditSale from "../Componentes/VentanasModal/ModalEditSale"


const salesColumns = [
  { id: "id", label: "Id" },
  { id: "idCliente", label: "Cliente" },
  { id: "fecha", label: "Fecha" },
  { id: "cuenta", label: "Cuenta" },
  { id: "idFormaPago", label: "Forma de pago" },
  { id: "factura", label: "Factura" },
];

var Venta = function (id, idCliente, fecha, cuenta, idFormaPago, factura) {
  this.id = id;
  this.idCliente = idCliente;
  this.fecha = fecha;
  this.cuenta = cuenta;
  this.idFormaPago = idFormaPago;
  this.factura = factura;
}

const Ventas = () => {

  //variable que almacenará la lista de ventas
  const [ventas, setVentas] = useState([]);

  const [estadoListado, setEstadoListado] = useState(true);

  const [estadoMEditVenta, setEstadoMEditVenta] = useState(false);

  const [estadoConfirmacion, setEstadoConfirmacion] = useState(false);

  const [ventaEditada, setVentaEditada] = useState();

  const obtenerVentas = () => {
    //Consultar la lista de ventas desde la API
    fetch("http://localhost:3010/ventas", { method: "get" })
      .then((res) => res.json())
      .then((json) => {
        var ventasT = [];
        json.map((item) => {
          ventasT.push(new Venta(item.Id,
            item.IdCliente,
            item.Fecha,
            item.Cuenta,
            item.IdFormaPago,
            item.Factura
          ));
        });
        setVentas(ventasT);
        setEstadoListado(false);
      });
  }

  if (estadoListado) {
    obtenerVentas();
  }

  const cerrarMEditVenta = () => {
    setEstadoMEditVenta(false);
  }

  const agregar = () => {
    const ventaN = new Venta(-1, "", "", "", "");
    setVentaEditada(ventaN);
    setEstadoMEditVenta(true);
  }

  const editar = () => {
    if (ventaSeleccionada) {
      const ventaN = ventaSeleccionada;
      setVentaEditada(ventaN);
      setEstadoMEditVenta(true);
    }
    else {
      window.alert("Seleccione una venta a editar")
    }
  }

  const eliminar = () => {
    if (ventaSeleccionada) {
      const ventaN = ventaSeleccionada;
      setVentaEditada(ventaN);
      setEstadoConfirmacion(true);
    }
    else {
      window.alert("Seleccione venta a eliminar");
    }
  }

  const confirmarEliminacion = () => {

    fetch(`http://localhost:3010/ventas/${ventaEditada.id}`,
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
        window.alert(`error eliminando venta [${error}]`);
      });
  }

  const cerrarConfirmacion = () => {
    setEstadoConfirmacion(false);
  }

  var ventaSeleccionada;

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
  } = useTable(ventas, salesColumns, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (item) => {
        if (target.value === "") return item;
        else
          return item.filter((x) => x.idCliente.toLowerCase().includes(target.value));
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
                Ventas
              </Typography>
            </Grid>
            <Divider variant="middle" />
            <br />
            <Toolbar>
              <TextField
                variant="outlined"
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
                sx={{ position: "absolute", right: "10px", p: 2 }}
                onClick={agregar}
              >
                Agregar
              </Button>
            </Toolbar>
            <TblContainer>
              <TblHead />
              <TableBody>

                {dataAfterPagingAndSorting().map((ventas) => (
                  <TableRow key={ventas.id}>
                    <TableCell>{ventas.id}</TableCell>
                    <TableCell>{ventas.idCliente}</TableCell>
                    <TableCell>{ventas.fecha}</TableCell>
                    <TableCell>{ventas.cuenta}</TableCell>
                    <TableCell>{ventas.idFormaPago}</TableCell>
                    <TableCell>{ventas.factura}</TableCell>
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
      <ModalEditSale open={estadoMEditVenta} cerrar={cerrarMEditVenta} venta={ventaEditada} />
      <Confirmacion open={estadoConfirmacion}
        titulo={"Eliminando una venta"}
        mensaje={"Está seguro?"}
        cerrar={cerrarConfirmacion}
        aceptar={confirmarEliminacion}
      />
    </Fragment>
  );
};

export default Ventas;
