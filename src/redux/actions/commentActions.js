import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";



const getComments = createAsyncThunk("getComments",async(showId)=>{
    
  
    try {
        const res = await axios.get(`${BASE_URL}/comments?showId=${showId}`)
        console.log(res);
        return res.data.comments
        
    } catch (error) {
        return {
            payload: "Error",
          }; 
   
    }
})



const addComments = createAsyncThunk("addComments", async (data,token)=>{
    let url = `${BASE_URL}/comments`
    let headers = {headers: {'Authorization':` Bearer ${token}`}}
    try {
        let res = await axios.post (url,data,headers)
        console.log(res)
        if(res.data){
            return{
                success: true,
                response:data
            }

        }else{
    return {
      success: false, 
      response:res.data.message
    }
  }
    } catch (error) {
        console.log(error);
        return {
          success: false, response:"error"
        }

    }

})
const deleteComment = createAsyncThunk("deleteAction ", async({idDelete,token})=>{
   
    let headers = {headers: {'Authorization':` Bearer ${token}`}}
  
let url = `${BASE_URL}/comments/${idDelete}`
try {
    const res = await axios.delete(url,headers)
  
    return{comments:res.data.allcomments}
} catch (error) {
    return{
        payload:"Error"
    }
}


} )
const editComment = createAsyncThunk("editComment", async ({idEdit,data,token})=>{
    console.log(idEdit)
    let headers = {headers: {'Authorization':` Bearer ${token}`}}
    let url = `${BASE_URL}/comments/${idEdit}`
    try {
        let res = await axios.put(url,data, headers)
    if(res.data.id){
        return{
            responseId: res.data.id,
            success:true,
            response:data
        }
    }

    } catch (error) {
        console.log(error);
    return {
      success: false, response:"error"
    }
    }
})

const commentAction={

    getComments,
    addComments,
    deleteComment,
    editComment
}

export default commentAction