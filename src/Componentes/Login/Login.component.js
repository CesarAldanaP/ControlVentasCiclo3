import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginBtn from "../Oauth/LoginBtn";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ModalLogin from "../VentanasModal/ModalLogin";
import { loginEmailPassword } from "../../services/loginService";

import "../css/Banner.css";

const Login = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const history = useHistory();
  const abrirModal = () => {
    setRegisterModal(true);
  };

  //rutina que cierra la ventana modal
  const cerrarModal = () => {
    setRegisterModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const user = {
      email: data.get("email"),
      password: data.get("password"),
    };
    loginEmailPassword(user);
    history.push("/");
  };
  return (
    <Container component="main" maxWidth="xs" sx={{ m: 3 }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo electronico"
            name="email"
            autoComplete="email"
            autoFocus
            size="small"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            size="small"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recuerdame"
          />
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            item
            xs={12}
          >
            <Grid item xs={10} sx={{ mr: 0 }}>
              <Button type="submit" variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Iniciar sesion
              </Button>
              <LoginBtn />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Link onClick={abrirModal} variant="body2">
                {"No tienes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <ModalLogin open={registerModal} cerrar={cerrarModal} register={true} />
    </Container>
  );
};

export default Login;
