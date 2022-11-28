import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const userCreation = createAsyncThunk("userCreation", async (data) => {
    
    const url=`${BASE_URL}/auth/signup`
  
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
/* const exit= createAsyncThunk('exit',async(token)=>{
    const url=`${BASE_URL}/auth/sign-out`
    let headers={headers:{'Authorization': `Bearer ${token}`}}
    try{
      let user= await axios.put(url,null,headers)
      console.log(user.data)
      return{
        success:  true,
        response:   user.data.message
      }
    }
    catch (error) {
      console.log(error.response)
      return {
        success:  false, 
        response:  error.response.data.message}  

    }
}) */

const usersActions = {
    userCreation,
   /*  exit */
  };
  
  export default usersActions;