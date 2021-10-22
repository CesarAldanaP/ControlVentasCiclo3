import Dialog from "@material-ui/core/Dialog";
import Login from "../Login/Login.component";
/* import Signup from "../Sign-up/Signup.component"; */

const ModalLogin = ({ open, cerrar }) => {
  return (
    <Dialog open={open} onClose={cerrar}>

      <Login cerrarFormulario={cerrar} />

    </Dialog>
  );
};

export default ModalLogin;
