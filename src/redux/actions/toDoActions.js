import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const getCitiesFilter = createAsyncThunk("getCitiesFilter", async ({ cities, search ,check }) => {
  /* let url=`${BASE_URL}/${value}` */
  try {
    console.log(check);
    const res = await axios.get(
      `http://localhost:8000/api/${cities}?name=${search}${check.join('')}`
    );

    console.log(res.data.allcities);
    return {value2:check, value: search, cities: res.data.allcities };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const getCities = createAsyncThunk("getCities", async (value) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/${value}`
      );
  
      console.log(res.data.allcities);
      return { value, cities: res.data.allcities };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

  const getCitiesUser = createAsyncThunk("getCitiesUser", async ({userId}) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/cities?userId=${userId}`
      );
  
      console.log(res.data.allcities);
      return { cities: res.data.allcities };
    } catch (error) {
      console.log(error);
      return {
        payload: "Error",
      };
    }
  });

const newCity = createAsyncThunk("newCity", async (data) => {
  let url=`${BASE_URL}/cities`  
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

const EditCity = createAsyncThunk("EditCity", async ({id,data}) => {
  let url=`${BASE_URL}/cities/:${id}`  
  try {
      
      let res = await axios.post(url,data);
      if(res.data.id){
          
          return {success:true, response:data, id: res.data.id}

      }
    }
  catch(error){
    console.log(error)
  }
      /* else{
          
          return {success:false, response: res.data.message}

      }
    } catch (error) {
    
      return {success:false, response:"ocurrio un error"}  

    } */
});

const toDoActions = {
  getCitiesFilter,
  getCities,
  newCity,
  getCitiesUser,
  EditCity
};

export default toDoActions;
