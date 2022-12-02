import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




  const getShowsUser = createAsyncThunk("getShowUser", async (userId) => {
  
    try {
      const res = await axios.get(
        `http://localhost:8000/api/shows?userId=${userId}`
      );

      console.log(userId);
      return { shows: res.data.shows };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getAndDestroy = createAsyncThunk("getAndDestroy", async ({id})=> {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/shows/${id}`
      )
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

    let url = `http://localhost:8000/api/shows/${go}`
    
    try {
      let res = await axios.patch(url,data)
      console.log(res.data) 
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
    
    const url=`http://localhost:8000/api/shows`
  
      try {
      
        let res = await axios.post(url,data)
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






const showActions = {
    getShowsUser,
    getAndDestroy,
    getAndEdit,
    showCreator
};

export default showActions;