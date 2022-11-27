import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions"

const {enter,enterAgain} = userActions
const initialState ={
    name:"",
    photo:"",
    logged:false,
    token:""
}


const userReducer = createReducer (initialState,
    (builder)=>{ 
        builder   
        .addCase(enter.fulfilled, (state, action) => {
            //console.log(action.payload.response)
            const { success,response } = action.payload
            console.log(action.payload);
            if (success) {
                let { user,token } = response //este token es el codigo que viene del backend
                localStorage.setItem('token',JSON.stringify({token: {user: token}})) //este objeto token va a guardar
                //la propiedad con el nombre del tipo de token y el token que guarda
                let newState = {
                    ...state,
                    name: user.name,
                    photo: user.photo,
                    logged: true,
                    token: token
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    message: response
                }
                return newState
            }
        })
  
    .addCase(enterAgain.fulfilled, (state, action) => {
        //console.log(action.payload.response)
        const { success,response } = action.payload
        console.log(action.payload);
        if (success) {
            let { user,token } = response 

            let newState = {
                ...state,
                name: user.name,
                photo: user.photo,
                logged: true,
                token: token
            }
            return newState
        } else {
            let newState = {
                ...state,
                message: response
            }
            return newState
        }
    }) })
    



export default userReducer