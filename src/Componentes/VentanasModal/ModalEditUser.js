import Dialog from '@material-ui/core/Dialog';
import FormEditUser from './FormEditUser';

const ModalEditUser = ({ open, cerrar, usuario }) => {

    return (
        <Dialog open={open} onClose={cerrar}>
            <FormEditUser cerrarFormulario={cerrar} usuarioEditado={usuario} />
        </Dialog>
    );
}

export default ModalEditUser;