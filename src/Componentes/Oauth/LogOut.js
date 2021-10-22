import React from "react";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";

const LogOut = () => {
  const history = useHistory();
  const logOut = () => {
    localStorage.clear();
    history.push("/");
    window.location.reload(false);
  };

  return (
    <GoogleLogout
      clientId="Acá debe de ir la clave proporcionada por google"
      render={(renderProps) => (
        <Button variant="outlined" onClick={renderProps.onClick} sx={{ bgcolor: 'primary.main', color: "#fff", borderColor: "error.main", "&:hover": { bgcolor: '#fff', color: "#000" } }}>
          Cerrar Sesion
        </Button>
      )}
      buttonText="Cerrar sesion"
      onLogoutSuccess={logOut}
    />
  );
};

export default LogOut;
