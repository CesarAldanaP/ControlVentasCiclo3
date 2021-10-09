import Dialog from '@material-ui/core/Dialog';
import LoginG from '../LoginG';

const ModalLogin = ({ open, cerrar }) => {

    return (
        <Dialog open={open} onClose={cerrar}>
            <LoginG cerrarFormulario={cerrar} />
        </Dialog>

    );

}

export default ModalLogin;