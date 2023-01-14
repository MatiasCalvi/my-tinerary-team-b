import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getCities = createAsyncThunk("getCities", async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/cities`
      );
  
      
      return { cities: res.data.allcities };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });
const getCitiesFilter = createAsyncThunk("getCitiesFilter", async ({ search ,check }) => {
  /* let url=`${BASE_URL}/${value}` */
  try {
    
    const res = await axios.get(
      `${BASE_URL}/cities?name=${search}${check.join('')}`
    );

    
    return {
      value2:check,
      value1: search,
      cities: res.data.allcities 
    };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const newCity = createAsyncThunk("newCity", async ({data,token}) => {
  let url=`${BASE_URL}/cities`
  let headers = {headers: {'Authorization': `Bearer ${token}`}}  
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

  const getCitiesUser = createAsyncThunk("getCitiesUser", async (userId) => {
  
    try {
      const res = await axios.get(
        `${BASE_URL}/cities?userId=${userId}`
      );

     
      return { cities: res.data.allcities };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getAndDestroy = createAsyncThunk("getAndDestroy", async ({cityId})=> {
    try {
      const res = await axios.delete(
        `${BASE_URL}/cities/${cityId}`
      )
      return { cities: res.data.city }
    } catch (error) {
      console.log(error)
      return {
        payload: "Error"
      }
    }
  })

  const getAndEdit = createAsyncThunk("getAndEdit", async ({data, go})=> {

    let url = `${BASE_URL}/cities/${go}`
    
    try {
      let res = await axios.put(url,data)
      
      
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




const toDoActions = {
  getCitiesFilter,
  getCities,
  newCity,
  getCitiesUser,
  getAndDestroy,
  getAndEdit
};

export default toDoActions;
