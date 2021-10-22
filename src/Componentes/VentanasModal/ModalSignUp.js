import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import Signup from '../Sign-up/Signup.component'

const ModalSignUp = ({open, cerrar}) => {
    return (
        <Dialog open={open} onClose={cerrar}>
            <Signup cerrarFormulario={cerrar} />
        </Dialog>
    )
}

export default ModalSignUp
