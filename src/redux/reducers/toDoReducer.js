import { createReducer } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import toDoActions from "../actions/toDoActions";

const {getCitiesFilter,getCities}= toDoActions

const initialState={
    value: "",
    value2: [],
    cities: [],
    array: []
}

const toDoReducer = createReducer(initialState,
    (builder)=>{
        builder
        .addCase(getCitiesFilter.fulfilled,(state,action)=>{
            console.log(action.payload)
                return action.payload;
        })
        .addCase(getCities.fulfilled,(state,action)=>{
            console.log(action.payload)
                return action.payload;
        })
})

export default toDoReducer;