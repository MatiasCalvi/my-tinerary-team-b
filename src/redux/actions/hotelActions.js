import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";


const getHotels = createAsyncThunk("getHotels", async () => {
    let url=`${BASE_URL}/hotels` 
    try {
      const res = await axios.get(url);
      
      return res.data.allhotels;
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });
  const getHotelsFilter = createAsyncThunk("getHotelsFilter",async ({hotels, searched, order }) => {
      let url = `${BASE_URL}/${hotels}?order=${order}&name=${searched}`;
      try {
        const res = await axios.get(url);
       
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

  const newHotel = createAsyncThunk("newCity", async ({data,token}) => {
    let headers = {headers: {'Authorization': `Bearer ${token}`}} 
    let url=`${BASE_URL}/hotels`  
    try {
  
        let res = await axios.post(url,data,headers);
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
  const getHotelUser = createAsyncThunk("getHotelUser", async (id) => {
    console.log(id)
    try {
      const res = await axios.get(
        `${BASE_URL}/hotels?userId=${id}`
      );

      
      return { hotels: res.data.allhotels };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getAndDestroy = createAsyncThunk("getAndDestroy", async (hotelId)=> {
    try {
      const res = await axios.delete(
        `${BASE_URL}/hotels/${hotelId}`
      )
      return { hotels: res.data.hotel }
    } catch (error) {
      console.log(error)
      return {
        payload: "Error"
      }
    }
  })

  const getAndEdit = createAsyncThunk("getAndEdit", async ({data, go})=> {

    let url = `${BASE_URL}/hotels/${go}`
    
    try {
      let res = await axios.patch(url,data)
      
      
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