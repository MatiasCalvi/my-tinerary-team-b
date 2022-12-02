import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";


const getHotels = createAsyncThunk("getHotels", async () => {
    try {
      const res = await axios.get(`${BASE_URL}/hotels`);
      console.log(res)
      return res.data.allhotels;
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });
  const getHotelsFilter = createAsyncThunk("getHotelsFilter",async ({hotels, searched, order }) => {
      let url = `${BASE_URL}${hotels}?order=${order}&name=${searched}`;
      try {
        const res = await axios.get(url);
        console.log(res)
        return {
          hotels: res.data.allhotels,
          valueSearch: searched,
          valueOrder: order,
        };
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    }
  );

  const newHotel = createAsyncThunk("newCity", async (data) => {
    let url=`${BASE_URL}/hotels`  
    try {
  
        let res = await axios.post(url,data);
        if(res.data.id){
  
            return {success:true, response:data, id: res.data.id}
  
        }
        else{
  
            return {success:false, response: res.data.message}
  
        }
      } catch (error) {
  
        return {success:false, response:"ocurrio un error"}  
  
      }
  }); 
  const getHotelUser = createAsyncThunk("getHotelUser", async (userId) => {
 
    try {
      const res = await axios.get(
        `${BASE_URL}/hotels?userId=${userId}`
      );

      console.log(res);
      return { hotels: res.data.allhotels };
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
        `${BASE_URL}/hotels/${id}`
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
  });

  const getAndEdit = createAsyncThunk("getAndEdit", async ({data, go})=> {

    let url = `${BASE_URL}/hotels/${go}`
    
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


  const hotelsActions = {
    getHotels,
    getHotelsFilter,
    newHotel,
    getHotelUser,
    getAndDestroy,
    getAndEdit,
   
  };
  
  export default hotelsActions;