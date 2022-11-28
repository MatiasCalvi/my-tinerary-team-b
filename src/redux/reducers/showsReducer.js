import { createReducer } from "@reduxjs/toolkit";
import showActions from "../actions/showActions";

const {getShowsUser,getAndEdit,getAndDestroy}= showActions

const initialState={
    showUsers:[],
    showId:"",
}

const showReducer = createReducer(initialState,
    (builder)=>{
        builder

        .addCase(getShowsUser.fulfilled,(state,action)=>{
            console.log(action.payload)     
           return {
                    ...state,
                    showUsers: action.payload.shows
                }
        })
        .addCase(getAndDestroy.fulfilled,(state,action)=>{
            console.log(action.payload)
            return {
                ...state,
                showId : action.payload.shows
            }
        })
        .addCase(getAndEdit.fulfilled,(state,action)=>{
            console.log(action.payload.success)
            if (action.payload.success) {
                return {
                        ...state,
                        showId : action.payload.showId
                        }
                    } 
                })
})

export default showReducer;