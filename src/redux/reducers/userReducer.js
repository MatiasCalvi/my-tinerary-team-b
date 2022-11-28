import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { enter, enterAgain, exit } = userActions;
const initialState = {
  name: "",
  photo: "",
  logged: false,
  token: "",
  role: "",
  id: "",
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(enter.fulfilled, (state, action) => {
      //console.log(action.payload.response)
      const { success, response } = action.payload;
      console.log(action.payload);
      if (success) {
        let { user, token } = response; //este token es el codigo que viene del backend
        localStorage.setItem(
          "token",
          JSON.stringify({ token: { user: token } })
        ); //este objeto token va a guardar
        //la propiedad con el nombre del tipo de token y el token que guarda
        let newState = {
          ...state,
          name: user.name,
          photo: user.photo,
          logged: true,
          token: token,
          role: user.role,
        };
        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };
        return newState;
      }
    })

    .addCase(enterAgain.fulfilled, (state, action) => {
      //console.log(action.payload.response)
      const { success, response } = action.payload;
      console.log(action.payload);
      if (success) {
        let { user, token } = response;

        let newState = {
          ...state,
          id: user.id,
          name: user.name,
          photo: user.photo,
          role: user.role,
          logged: true,
          token: token,
        };
        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };
        return newState;
      }

    })
    .addCase(exit.fulfilled, (state, action) => {
      const { success, response } = action.payload;
      if (success) {
        localStorage.removeItem("token");
        let newState = {
          ...state,
          name: "",
          photo: "",
          role: "",
          logged: false,
          token: "",
        };
        return newState;
      } else {
        let newState = {
          ...state,
          message: response,
        };
        return newState;
      }
    });
});


export default userReducer;
