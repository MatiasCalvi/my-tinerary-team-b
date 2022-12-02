import { createReducer } from "@reduxjs/toolkit";
import itinerariesActions from "../actions/itinerariesActions";

const {getItinerariesAll,getItinerariesUser,getAndEdit,getAndDestroy,itineraryCreation}= itinerariesActions

const initialState={
    itinariesAdmin:[],
    itienraryId:"",
}

const itineraryReducer = createReducer(initialState,
    (builder)=>{
        builder

        .addCase(getItinerariesAll.fulfilled,(state,action)=>{
            console.log(action.payload)
            return {
                ...state,
                itinariesAdmin: action.payload.itinerary
            }  
        })
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
                itineraryId : action.payload.data
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
        .addCase(itineraryCreation.fulfilled,(state,action)=>{
                 if(action.payload.success){
                        state.itinariesAdmin.push(action.payload.response)
                } 
        })

})

export default itineraryReducer;