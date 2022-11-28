import { createReducer } from "@reduxjs/toolkit";
import itinerariesActions from "../actions/itinerariesActions";

const {getItinerariesUser,getAndEdit,getAndDestroy}= itinerariesActions

const initialState={
    itinariesAdmin:[],
    itienraryId:"",
}

const itineraryReducer = createReducer(initialState,
    (builder)=>{
        builder

        .addCase(getItinerariesUser.fulfilled,(state,action)=>{
            console.log(action.payload)     
           return {
                    ...state,
                    itinariesAdmin: action.payload.itinerary
                }
        })
        .addCase(getAndDestroy.fulfilled,(state,action)=>{
            console.log(action.payload)
            return {
                ...state,
                itineraryId : action.payload.Itinerary
            }
        })
        .addCase(getAndEdit.fulfilled,(state,action)=>{
            console.log(action.payload.success)
            if (action.payload.success) {
                return {
                        ...state,
                        itineraryId : action.payload.itneraryId
                        }
                    } 
                })
})

export default itineraryReducer;