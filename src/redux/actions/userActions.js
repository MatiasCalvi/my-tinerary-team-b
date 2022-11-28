import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

    const enter = createAsyncThunk('enter', async (datos) => { 
        let url = `http://localhost:8000/api/auth/signin`
        try {
            let user = await axios.post(url,datos)
           
         console.log(user)
         if(user.data.response.user.id){
    
             return {
                 success: true,
                 response: user.data.response
             }
         }else{
            
             return {
                 success: false,
                 response: user.response.data.message
             }
         }
        } catch (error) {
           
            return{
    
                success: false,
                response: 'an error ocurred'
            }
        }
    })
    const enterAgain = createAsyncThunk('enterAgain', async (token) => {
        let url = `http://localhost:8000/api/auth/token`
        let headers = {headers: {'Authorization': `Bearer ${token}`}}
        try {
            let user = await axios.post(url,null,headers)
            console.log(user.data.response)
            return {
                success: true,
                response: {
                    user: user.data.response.user,
                    token
                }
            }
        } catch (error) {
            console.log(error.response)
            return {
                success: false,
                response: error.response.data.message
            }
        }
    })
    const editUser = createAsyncThunk("editHotel", async  ({id,data})=>{
      let url = `http://localhost:8000/api/auth/me/${id}`
      try {
        let res = await axios.patch(url,data)
        if(res.data.id)  {
        return {
          responseId: res.data.id,
          success: true,
           response:data
        }
      }else{
        return {
          success: false, 
          response:res.data.message
        }
      }
    }catch(error){
      console.log(error);
      return {
        success: false, response:"error"
      }
    }
      })
  const getOneUser = createAsyncThunk("getOneUser", async (id) => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/auth/me/${id}`
          );
  
  
          return { id:id, user: res.data.user};
        } catch (error) {
          console.log(error);
          return {
            payload: "Error",
          };
        }
  
  
      })
    const exit= createAsyncThunk('exit',async(token)=>{
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
    })
    
    const userActions={
        enter,
        enterAgain,
        exit,
        getOneUser,
        editUser
    }
    
    export default userActions