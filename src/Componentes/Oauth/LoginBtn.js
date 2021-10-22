import React from "react";
import GmailIcon from "./Gmail.png";
import { GoogleLogin } from "react-google-login";
import { loginAxios } from "../../services/loginService";
import { useHistory } from "react-router-dom";
import {Button} from '@mui/material'

const LoginBtn = () => {
  const history = useHistory();

  const responseGoogle = (response) => {
    console.log(response);
    window.localStorage.setItem("token", response.tokenObj.id_token)
    let user = response.profileObj.email;
    loginAxios(user);
    history.push("/")
    window.location.reload(false)
  };
  return (
    <GoogleLogin
      clientId="Acá debe de ir la clave proporcionada por google"
      render={(renderProps) => (
        <Button
          variant="outlined"
          onClick={renderProps.onClick}
          sx={{ml: 2, mt: "24px", mb: "16px"}}
          
        >
          <img
            src={GmailIcon}
            sx={{ml: 2}}
            alt="icono de gmail"
            height="20px"
            width="32px"
          />
          Gmail
        </Button>
      )}
      buttonText="Gmail"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default LoginBtn;
