import {
  Alert,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import * as React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink, useNavigate } from "react-router-dom";
import "./signup.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import usersActions from "../../redux/actions/usersActions";
import { useDispatch } from "react-redux";

export default function BoxSignUp() {
 
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const form = React.useRef();

  const { userCreation } = usersActions;
  const dispatch = useDispatch();

  const [nuevoUsuario, setnuevoUsuario] = React.useState({
    name: "",
    lastName: "",
    role: "user",
    /* photo: "https://img.icons8.com/fluency-systems-regular/48/000000/user.png", */
    photo:'',
    age: '',
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setnuevoUsuario({ ...nuevoUsuario, [e.target.id]: e.target.value });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const registro = async () => {
   
    const respuesta = await dispatch(userCreation(nuevoUsuario))
  
    if (respuesta.payload.success) {
      toast.success(
        `Your account was created correctly, verify it to enter`,
        {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      setnuevoUsuario({
        name: "",
        lastName: "",
        role: "user",
        photo:
          "",
        age: '',
        email: "",
        password: "",
      });
      form.current.reset();
      setTimeout(function () {
        navigate("/signin");
      }, 4500);
    } else{
      
      
        toast.error(respuesta.payload.response, {
          position: "bottom-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
     
      
        } 
  };
  return (
    <>
      
      <div className="Ingreso">

        <div className="edFormRegistro">
          <h2>
          SIGN UP<span className="blanco">.</span>
          </h2>
          <div>
            <form ref={form}>
              <TextField
                id="name"
                className="inputColor"
                label="Name"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                id="lastName"
                className="inputColor"
                label="Last Name"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                id="age"
                className="inputColor"
                label="Age"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                id="photo"
                className="inputColor"
                label="Photo"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                id="email"
                className="inputColor"
                label="Email"
                type="email"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="standard"
                onChange={handleChange}
              />
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="password"
                className="inputColor"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
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
              <NavLink className="BotonRegistrarme" to="/ingresar">
                <p>LOG IN WITH YOUR ACCOUNT</p>
              </NavLink>
              <button onClick={registro}>SIGN UP</button>
            </div>
          </div>
        </div>
        <div className="edFotoRegistro"></div>

        <ToastContainer />
      </div>
    </>
  );
}
