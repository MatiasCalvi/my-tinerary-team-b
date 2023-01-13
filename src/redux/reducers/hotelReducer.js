import { createReducer } from "@reduxjs/toolkit";
import hotelActions from "../actions/hotelActions";

const { getHotels, getHotelsFilter, newHotel , getHotelUser,getAndEdit , getAndDestroy} = hotelActions;

const initialState = {
  hotels: [],
  valueSearch: "",
  value: "",
  filter: " ",
  hotelAdmin:[]
};

const hotelsReducers = createReducer(initialState, (builder) => {
    builder
      .addCase( getHotels.fulfilled, (state, action) => {
        
        return {
          ...state,
          hotels: action.payload,
          
        };
      })
      .addCase(getHotelsFilter.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
          filter: "aplied",
        };
      })      
      .addCase( newHotel.fulfilled,(state,action)=>{
        if(action.payload.success){
            state.hotels.push(action.payload.response)
        }
       })
       .addCase(getHotelUser.fulfilled,(state,action)=>{
            
        return {
                ...state,
                hotelAdmin: action.payload.hotels
            }
        })
    .addCase(getAndDestroy.fulfilled,(state,action)=>{
        return {
            ...state,
            hotelId : action.payload.hotelId
        }
        })
    .addCase(getAndEdit.fulfilled,(state,action)=>{
       
        if (action.payload.success) {
            return {
                    ...state,
                    hotelId : action.payload.hotelId
                    }
                }
            })

     })

      export default hotelsReducers;