import Dialog from '@material-ui/core/Dialog';
import FormEditProduct from './FormEditProduct';

const ModalEditProduct = ({ open, cerrar, producto }) => {

    return (
        <Dialog open={open} onClose={cerrar}>
            <FormEditProduct cerrarFormulario={cerrar} productoEditado={producto}/>
        </Dialog>
    );
}

export default ModalEditProduct;