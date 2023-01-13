import { createReducer } from "@reduxjs/toolkit";
import showActions from "../actions/showActions";

const {getShowsUser,getAndEdit,getAndDestroy}= showActions

const initialState={
    showUsers:[],
    id:"",
}

const showsReducer = createReducer(initialState,
    (builder)=>{
        builder

        .addCase(getShowsUser.fulfilled,(state,action)=>{
                
           return {
                    ...state,
                    showUsers: action.payload.shows
                }
        })
        .addCase(getAndDestroy.fulfilled,(state,action)=>{
            
            return {
                ...state,
                id : action.payload.id
            }
        })
        .addCase(getAndEdit.fulfilled,(state,action)=>{
            
            if (action.payload.success) {
                return {
                        ...state,
                        id : action.payload.id
                        }
                    } 
                })
})

export default showsReducer;