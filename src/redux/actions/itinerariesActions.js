import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

    const getItinerariesAll = createAsyncThunk("getItinerariesAll", async () => {
      
      try {
        const res = await axios.get(
          `${BASE_URL}/itineraries`
        );
    
        console.log(res.data.itinerary);
        return { itinerary: res.data.itinerary };
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    });

  const getItinerariesUser = createAsyncThunk("getCitiesUser", async (userId) => {
  
    try {
      const res = await axios.get(
        `${BASE_URL}/itineraries?userId=${userId}`
      );

      console.log(res.data.itinerary);
      return { itinerary: res.data.itinerary };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getAndDestroy = createAsyncThunk("getAndDestroy", async ({ItineryId,token})=> {
    
    let headers = {headers: {'Authorization': `Bearer ${token}`}}

    try {
      const res = await axios.delete(`${BASE_URL}/itineraries/${ItineryId}`,headers)
      if (res.data.success){
        return {
          success: true,
          response: res.data.success
        }
      } else {
        return {
          success: false,
          response: res.data.message
        }
      }
    }catch (error) {
      console.log(error)
      return {
        payload: "Error"
      }
    }
  })

  const getAndEdit = createAsyncThunk("getAndEdit", async ({data, go})=> {

    let url = `${BASE_URL}/itineraries/${go}`

    let headers = {headers: {'Authorization': `Bearer ${data.token}`}}

    try {
      let res = await axios.put(url,data.itinerary,headers)
      console.log(res)
      if (res.data.success){
        return {
          success: true,
          response: data.itinerary,
          responseid: res.data.success
        }
      } else {
        return {
          success: false,
          response: res.data.message
        }
      } 
    } catch(error) {
      return {
        success: false,
        response: 'un error'
      }
    }
  })
  const itineraryCreation = createAsyncThunk("itineraryCreation", async ({data,token}) => {
    
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    const url=`${BASE_URL}/itineraries`
  
      try {
      
        let res = await axios.post(url,data,headers)
        console.log(res)
        if(res.data.success){
            
            return {success:true, response:data}
  
        }
        else{
            
            return {success:false, response: res.data.message}
  
        } 
      } catch (error) {

            return {success:false, response:error.response.data.message}  
  
      }
});



const itinerariesActions = {
  getItinerariesUser,
  getAndDestroy,
  getAndEdit,
  itineraryCreation,
  getItinerariesAll
};

export default itinerariesActions;
