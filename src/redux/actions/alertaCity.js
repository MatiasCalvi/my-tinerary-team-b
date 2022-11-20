import { createAction } from '@reduxjs/toolkit'

const alerta = createAction('alerta', (data) => {
   
    return {
        payload: data
    }

})

const alertActions= {
    alerta
}

export default alertActions