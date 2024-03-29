import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../api/url";

const enter = createAsyncThunk("enter", async (datos) => {
  let url = `${BASE_URL}/auth/signin`;
  try {
    let user = await axios.post(url, datos);

    if (user.data.response.user.id) {
      return {
        success: true,
        response: user.data.response,
      };
    } else {
      return {
        success: false,
        response: user.response.data.message,
      };
    }
  } catch (error) {
    return {
      success: false,
      response: "an error ocurred",
    };
  }
});
const enterAgain = createAsyncThunk("enterAgain", async (token) => {
  let url = `${BASE_URL}/auth/token`;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    let user = await axios.post(url, null, headers);

    return {
      success: true,
      response: {
        user: user.data.response.user,
        token,
      },
    };
  } catch (error) {
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});
const exit = createAsyncThunk("exit", async (token) => {
  const url = `${BASE_URL}/auth/sign-out`;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    let user = await axios.put(url, null, headers);

    return {
      success: true,
      response: user.data.message,
    };
  } catch (error) {
    return {
      success: false,
      response: error.response.data.message,
    };
  }
});
const editUser = createAsyncThunk("editUser", async ({ id, data, token }) => {
  let url = `${BASE_URL}/auth/me/${id}`;
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  let data2 = {};
  if (data.password) {
    data2.password = data.password;
    data2.passwordCurrent = data.passwordCurrent;
    try {
      let res = await axios.patch(url, data2, headers);
      if (res.data.id) {
        return {
          responseId: res.data.id,
          success: true,
          response: data,
        };
      } else {
        return {
          success: false,
          response: res.data.message,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        response: "error",
      };
    }
  } else {
    try {
      let res = await axios.patch(url, data, headers);
      if (res.data.id) {
        return {
          responseId: res.data.id,
          success: true,
          response: data,
        };
      } else {
        return {
          success: false,
          response: res.data.message,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        response: "error",
      };
    }
  }
});
const getOneUser = createAsyncThunk("getOneUser", async ({id,token}) => {
  
  let url=`${BASE_URL}/auth/me/${id}`
  let headers = { headers: { Authorization: `Bearer ${token}` } };
  try {
    const res = await axios.get(url,headers);

    return { id: id, user: res.data.user };
  } catch (error) {
    console.log(error);
    return {
      payload: "Error",
    };
  }
});

const userActions = {
  enter,
  enterAgain,
  exit,
  editUser,
  getOneUser,
};

export default userActions;
