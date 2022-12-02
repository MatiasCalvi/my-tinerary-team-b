import { createReducer } from '@reduxjs/toolkit'
import alertActions from '../actions/alertaCity'

const { alerta } = alertActions

const initialState = {
    vista: false,
    mensaje: ''
}

const alertReducer = createReducer(initialState,(builder) => {
        builder
        .addCase(alerta, (state, action) => {
            console.log(action.payload)
            let newState = {
                ...state,
                vista: true,
                mensaje: action.payload
            }
            console.log(newState)
            return newState
        })
    }
)

export default alertReducer