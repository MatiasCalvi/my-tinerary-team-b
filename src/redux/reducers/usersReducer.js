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
        
})

export default usersReducer;