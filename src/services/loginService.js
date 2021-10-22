
//Inicio de sesion con google
export const loginAxios = (user)=>{
    window.localStorage.setItem("isLogged", true)
    if(user==="cesaralpi.oz@gmail.com"){
        window.localStorage.setItem("permisos", ["admin"])
    }else{
        window.localStorage.setItem("permisos", ["user"])
    }
    return
}

//Inicio de sesion con correo y contraseña
export const loginEmailPassword = (user)=>{
    window.localStorage.setItem("isLogged", true)
    if(user.email==="caesar_oz@hotmail.com" && user.password==="12345"){
        window.localStorage.setItem("permisos", ["admin"])
    }else{
        window.localStorage.setItem("permisos", ["user"])
    }
    return
}
