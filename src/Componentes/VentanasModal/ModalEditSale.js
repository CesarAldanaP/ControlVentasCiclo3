import Dialog from '@material-ui/core/Dialog';
import FormEditSale from './FormEditSale';

const ModalEditSale = ({ open, cerrar, venta }) => {

    return (
        <Dialog open={open} onClose={cerrar}>
            <FormEditSale cerrarFormulario={cerrar} ventaEditada={venta}/>
        </Dialog>
    );
}

export default ModalEditSale;