import {
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import * as React from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import userActions from "../../redux/actions/userActions";

import { NavLink, useNavigate } from "react-router-dom";
import "./signin.css";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

export default function SignIn() {

  const dispatch = useDispatch();
  const { enter } = userActions;

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [loginUsuario, setLoginUsuario] = React.useState({
    password: "",
  });
  const form = React.useRef();
  const navigate = useNavigate();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputText = (e) => {
    setLoginUsuario({ ...loginUsuario, [e.target.id]: e.target.value });
  };

  const ingresar = async () => {
    const respuesta = await dispatch(enter(loginUsuario));
  
    if (respuesta.payload.success) {
      toast.success(
        `Welcome ${respuesta.payload.response.user.name} `,
        {
          position: "bottom-left",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      form.current.reset();
      setTimeout(function () {
        navigate("/");
      }, 1000);
    } else {
     
        toast.error(`${respuesta.payload.response}`, {
          position: "bottom-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      
    }
  };
  return (<>
    <div className="Ingreso">
      <img
        className="shoppyLogoIngreso"
        src="https://cdn.discordapp.com/attachments/830354293822324736/1051744433550397510/Sin_titulo-2.png"
        alt="logo_shoppy"
      />
      <div className="edFotoIngreso"></div>
      <div className="edFormIngreso">
        <h2>
          SIGN IN<span className="blanco">.</span>
        </h2>
        <div>
          <form ref={form}>
            <TextField
              className="inputColor"
              id="email"
              label="Email"
              type="email"
              onChange={handleInputText}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              className="inputColor"
              id="password"
              type={showPassword ? "text" : "password"}
              onChange={handleInputText}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </form>
          <div className="botonesForm">
            <NavLink className="BotonRegistrarme" to="/signup">
              <p>REGISTER ME</p>
            </NavLink>
            <button onClick={ingresar}>GET INTO</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  </>)
}
