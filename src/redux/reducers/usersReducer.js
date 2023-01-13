import { createReducer } from "@reduxjs/toolkit";
import usersActions from '../actions/usersActions'

const {userCreation}= usersActions

const initialState={
    users:[],
}

const usersReducer = createReducer(initialState,
    (builder)=>{
        builder
        .addCase(userCreation.fulfilled,(state,action)=>{
                if(action.payload.success){
                    state.users.push(action.payload.response)
            } 
            console.log(action)
        })
        /* .addCase(exit.fulfilled,(state,action)=>{
            const {success,response}=action.payload
            if(success){
                localStorage.removeItem('token')
                let newState={
                    ...state,
                    name: '',
                    photo: '',
                    role: '',
                    logged: false,
                    token: ''
                }
                return newState
            }
            else {
                let newState = {
                    ...state,
                    message: response
                }
                return newState
            }
        }) */
        
})

export default usersReducer;