import React, { Fragment, useState } from "react";
/* import { useHistory } from "react-router-dom"; */
import ModalLogin from '../VentanasModal/ModalLogin'
import {
  NavContainer,
  NavBtn,
  NavLink,
  LoginBtnLink,
  NavMenu,
} from "./NavBarElements";
import ModalSignUp from '../VentanasModal/ModalSignUp'
import LogOut from '../Oauth/LogOut'

const NavBar = ({ children }) => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false)

  const isLogged = window.localStorage.getItem("isLogged");
  const isAdmin = window.localStorage.getItem("permisos");

  const openLoginModal = () => {
    setIsOpenLogin(true)
  }
  const openCloseSignUpModal = () => {
    setOpenSignUpModal(!openSignUpModal)
  }

  const closeLoginModal = () => {
    setIsOpenLogin(false)
  }

  return (
    <Fragment>
      <NavContainer>
        <NavLink to="/">
          Cail Wace
        </NavLink>
        <NavMenu>
          <NavLink to="/home">Inicio</NavLink>
          {isLogged && isAdmin === "admin" ? (
            <Fragment>
              <NavLink to="/Usuarios">Usuarios</NavLink>
              <NavLink to="/Ventas">Ventas</NavLink>
              <NavLink to="/Productos">Productos</NavLink>
            </Fragment>
          ) : (<Fragment>
            <NavLink to="/Usuarios">Usuarios</NavLink>
            <NavLink to="/Ventas">Ventas</NavLink>
            <NavLink to="/Productos">Productos</NavLink>
          </Fragment>)}
        </NavMenu>
        <NavBtn>
        {!isLogged ? (
          <Fragment>
            <LoginBtnLink
            variant="outlined"
            color="error"
            onClick={openLoginModal}
            sx={{ textTransform: "none" }}
          >
            Login
          </LoginBtnLink>
          <LoginBtnLink
            variant="outlined"
            color="error"
            onClick={openCloseSignUpModal}
            sx={{ textTransform: "none" }}
          >
            SignUp
          </LoginBtnLink>
          </Fragment>

        ) : (<LogOut/>)}
          
        </NavBtn>
      </NavContainer>
      {children}
      <ModalLogin open={isOpenLogin} cerrar={closeLoginModal} />
      <ModalSignUp open={openSignUpModal} cerrar={openCloseSignUpModal} />
    </Fragment>
  );
};

export default NavBar;
