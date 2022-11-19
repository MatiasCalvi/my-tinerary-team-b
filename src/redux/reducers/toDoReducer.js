import { createReducer } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import toDoActions from "../actions/toDoActions";

const {getCitiesFilter,getCities}= toDoActions

const initialState={
    value: "",
    value2: [],
    cities: [],
    categories:[]
}

const toDoReducer = createReducer(initialState,
    (builder)=>{
        builder
        .addCase(getCitiesFilter.fulfilled,(state,action)=>{
            console.log(action.payload)
            
                return {
                    ...state,
                    ...action.payload
                }
        })
        .addCase(getCities.fulfilled,(state,action)=>{
            let categories=Array.from(new Set(action.payload.cities.map(city=>city.continent)))
            console.log(action.payload)
                return {
                    ...state,
                    value:action.payload.value,
                    categories,
                    cities: action.payload.cities
                }
        })
})

export default toDoReducer;