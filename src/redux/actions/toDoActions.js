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

const toDoActions = {
  getCitiesFilter,
  getCities
};

export default toDoActions;
