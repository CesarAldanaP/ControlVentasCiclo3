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

const userColumns = [
    { id: "id", label: "Id" },
    { id: "Nombre", label: "Nombre" },
    { id: "Apellido", label: "Apellido" },
    { id: "Rol", label: "Rol" },
    { id: "Estado", label: "Estado" },
    { id: "actions", label: "Acciones" },
];

const dataUsers = [
    {
        id: 101,
        Nombre: " Cesar ",
        Apellido: " Aldana ",
        Rol: "Vendedor",
        Estado: " Activo ",
    },
    {
        id: 102,
        Nombre: " Walter ",
        Apellido: " Allen ",
        Rol: "Vendedor",
        Estado: " Activo ",
    },
    {
        id: 103,
        Nombre: " Aidi ",
        Apellido: " NNNN ",
        Rol: "Vendedor",
        Estado: " Activo ",
    },
    {
        id: 104,
        Nombre: " Laura ",
        Apellido: " NNNN ",
        Rol: "Vendedor",
        Estado: " Activo ",
    },
    {
        id: 105,
        Nombre: " Catherin ",
        Apellido: " Londoño ",
        Rol: "Vendedor",
        Estado: " Activo ",
    },
    {
        id: 106,
        Nombre: " Otro ",
        Apellido: " NNN ",
        Rol: "Vendedor",
        Estado: " Activo ",
    },
];




const Usuarios = () => {

const [data, setData] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  useEffect(() => {
    setData(dataUsers);
  }, [setData]);

  const {
    TblContainer,
    TablePaginationCustom,
    TblHead,
    dataAfterPagingAndSorting,
  } = useTable(data, userColumns, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (item) => {
        if (target.value === "") return item;
        else
          return item.filter((x) => x.Nombre.toLowerCase().includes(target.value));
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
                Usuarios
              </Typography>
            </Grid>
            <Divider variant="middle" />
            <br />
            <Toolbar>
              <TextField
                variant="outlined"
                label="Buscar dato por Nombre"
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
                onClick={() => {
                    //Aca configura para que se abra el modal de agregar
                  console.log("agregar ");
                }}
              >
                Agregar
              </Button>
            </Toolbar>
            <TblContainer>
              <TblHead/>
                  <TableBody>

                {dataAfterPagingAndSorting().map((data) => (
                    <TableRow key={data.id}>
                      <TableCell>{data.id}</TableCell>
                      <TableCell>{data.Nombre}</TableCell>
                      <TableCell>{data.Apellido}</TableCell>
                      <TableCell>{data.Rol}</TableCell>
                      <TableCell>{data.Estado}</TableCell>
                      
                      <TableCell>
                      <Button
                        color="primary"
                        onClick={() => {
                            //Aca configura para que se abra el modal de Editar
                          console.log('abrir modal de editar el producto')
                        }}
                      >
                        <EditIcon />
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => {
                            console.log('Eliminar')
                        }}
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
    </Fragment>
    )
}

export default Usuarios