import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const newReactionCreation = createAsyncThunk("newReactionCreation", async ({data,token}) => {
    
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    const url=`${BASE_URL}/reactions`
  
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
const getReactionItinerary = createAsyncThunk("getReactionItinerary", async (itinerary) => {
  if(itinerary!==undefined){
        try {
          const res = await axios.get(
            `${BASE_URL}/reactions?itineraryId=${itinerary}`
          );
          
          console.log(res)
          return { reactions: res.data.reactions }
          
        } catch (error) {
          console.log(error);
          return {
            payload: "Error",
          };
        }
    }
});
const getReactionItinerary2 = createAsyncThunk("getReactionItinerary2", async (itinerary2) => {
  if(itinerary2!==undefined){
        try {
        const res = await axios.get(
          `${BASE_URL}/reactions?itineraryId=${itinerary2}`
        );
        
        console.log(res)
        return { reactions2: res.data.reactions }
        
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
  }
  
});
const feedbackReaction = createAsyncThunk('feedbackReaction', async ({token, name, itineraryId})=> {
  let headers = { headers: { 'Authorization': `Bearer ${token}` } }
  try {
      const res = await axios.put(`${BASE_URL}/reactions?name=${name}&itineraryId=${itineraryId}`, null, headers)
      return res.data
  } catch(error) {
      return {
          payload: error.response.data
      }
  }
})

const reactionsActions = {
      newReactionCreation,
      getReactionItinerary,
      getReactionItinerary2,
      feedbackReaction
  };
  
  export default reactionsActions;