import { createReducer } from '@reduxjs/toolkit'
import alertActions from '../actions/alertaCity'

const { alerta } = alertActions

const initialState = {
    vista: false,
    mensaje: ''
}

const alertReducer = createReducer(initialState,
    (builder) => {
        builder
        .addCase(alerta, (state, action) => {
            
            let newState = {
                ...state,
                vista: true,
                mensaje: action.payload
            }
            
            return newState
        })
    }
)

export default alertReducer