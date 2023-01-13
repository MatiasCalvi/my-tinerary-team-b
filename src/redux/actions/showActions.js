import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";




  const getShowsUser = createAsyncThunk("getShowUser", async (userId) => {
    
    try {
      const res = await axios.get(
        `${BASE_URL}/shows?userId=${userId}`
      );

      
      return { shows: res.data.shows };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getAndDestroy = createAsyncThunk("getAndDestroy", async ({id, token})=> {
    console.log(id)
    console.log(token)
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    const url=`${BASE_URL}/shows/${id}`

    try {
      const res = await axios.delete(url,headers)
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

  const getAndEdit = createAsyncThunk("getAndEdit", async ({data, go,token})=> {

    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    let url = `${BASE_URL}/shows/${go}`
    
    try {
      let res = await axios.patch(url,data,headers)
      
      if (res.data.success){
        return {
          success: true,
          response: data,
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
  
  const showCreator = createAsyncThunk("showCreator", async (data) => {
    
    const url=`${BASE_URL}/shows`
  
      try {
      
        let res = await axios.post(url,data)
        
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






const showActions = {
    getShowsUser,
    getAndDestroy,
    getAndEdit,
    showCreator
};

export default showActions;