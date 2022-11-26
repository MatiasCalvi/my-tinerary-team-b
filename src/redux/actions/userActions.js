import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
    
    const userActions={
        enter,
        enterAgain
    }
    
    export default userActions