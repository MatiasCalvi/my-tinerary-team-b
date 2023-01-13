import { createReducer } from "@reduxjs/toolkit";
import itinerariesActions from "../actions/itinerariesActions";

const {getItinerariesUser,getAndEdit,getAndDestroy,itineraryCreation}= itinerariesActions

const initialState={
    itinariesAdmin:[],
    itienraryId:"",
}

const itineraryReducer = createReducer(initialState,
    (builder)=>{
        builder

        .addCase(getItinerariesUser.fulfilled,(state,action)=>{
                
           return {
                    ...state,
                    itinariesAdmin: action.payload.itinerary
                }
        })
        .addCase(getAndDestroy.fulfilled,(state,action)=>{
           
            return {
                ...state,
                itineraryId : action.payload.data
            }
        })
        .addCase(getAndEdit.fulfilled,(state,action)=>{
            
            if (action.payload.success) {
                return {
                        ...state,
                        itineraryId : action.payload.itneraryId
                        }
                } 
        })
        .addCase(itineraryCreation.fulfilled,(state,action)=>{
            
            if(action.payload.success){
                   state.itinariesAdmin.push(action.payload.response)
           } 
        })
})

export default itineraryReducer;