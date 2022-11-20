import { createReducer } from "@reduxjs/toolkit";
import toDoActions from "../actions/toDoActions";

const {getCitiesFilter,getCities,newCity,getCitiesUser,EditCity}= toDoActions

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
        .addCase(newCity.fulfilled,(state,action)=>{
            if(action.payload.success){
                state.cities.push(action.payload.response)
            }
        })
        .addCase(getCitiesUser.fulfilled,(state,action)=>{
                return {
                    ...state,
                    cities: action.payload.cities
                }
        })
        .addCase(EditCity.fulfilled,(state,action)=>{
            return {
                ...state,
                cities: action.payload.cities
            }
    })
        
})

export default toDoReducer;