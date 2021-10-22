import { styled } from "@mui/material/styles";
import { NavLink as Link } from "react-router-dom";
import { Button } from "@mui/material";

export const NavContainer = styled("nav")(({ theme }) => ({
  background: theme.palette.primary.main,
  height: "50px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0.5rem calc((100vw - 1000px) / 2)",
  zIndex: "10",
}));

export const NavLink = styled(Link)(({ theme }) => ({
  borderRadius: "30px",
  color: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0 1rem",
  heigth: "100%",
  cursor: "pointer",

  "& .active": {
    color: theme.palette.info.light,
  },
  "&:hover": {
    color: theme.palette.common.black,
  },
}));


export const NavMenu = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: "-24px",
  width: "60%",
  justifyContent: "flex-end",

}));

export const NavBtn = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "20%",
  marginRight: "24px",

}));

export const LoginBtnLink = styled(Button)(({ theme }) => ({
  
  borderRadius: "15px", 
  padding: "10px 22px",
  color: theme.palette.common.white,
  borderColor: theme.palette.common.white,
  outline: "none",
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  textDecoration: "none",

  "&:hover": {
    transition: "all 0.2s ease-in-out",
    background: theme.palette.common.white,
    color: "#010606",
  },
}));
