import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const userCreation = createAsyncThunk("userCreation", async (data) => {
    
    const url=`${BASE_URL}/auth/signup`
  
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

const usersActions = {
    userCreation,
  };
  
  export default usersActions;