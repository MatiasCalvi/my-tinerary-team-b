import React from "react";
import "./myProfile.css";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
/* import ModalHotel from "../../components/Modal/Modal"; */
import { useState, useEffect } from "react";
import userActions from '../../redux/actions/userActions' 
 import MyReactions from '../../components/MyReactions/MyReactions';  
import reactionsActions from '../../redux/actions/reactionsActions'; 
import alertActions from "../../redux/actions/alertaCity";
import { toast, ToastContainer } from "react-toastify";
import { Link as NavLink, useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  CardActions,
  Typography,
  Button,
  CardContent,
  Card,
  InputAdornment,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import AddIcon from "@mui/icons-material/Add";



function MyProfile(props) {
  const [name2, setName2] = useState('');
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [verifiedPass,setVerifiedPass]=useState('')
  const [passwordBefore,setPasswordBefore]=useState('')
  const [url, setUrl] = React.useState(null);
  
  const [lastName, setlastName] = useState("");
  

  const [isOpen, setIsOpen] = useState(false);
  

  const [showPassword, setShowPassword] = React.useState(false);
  const [showPassword2, setShowPassword2] = React.useState(false);
  const [showPassword3, setShowPassword3] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleClickShowPassword3 = () => setShowPassword3((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let{getOneUser,editUser,exit}= userActions
  const {alerta}=alertActions

  let { id } = props;
 
  let dispatch = useDispatch();
  const navigate = useNavigate();

  let {role,token,photo,name } = useSelector((state) => state.usuario);

   async function getUsers(){
  
  await dispatch(getOneUser({id,token}))
} 

   useEffect( ()=>{

  getUsers()
},[]) 



let editName = async (e) => {
    if (name2 === '') {
      toast.error("You must complete all fields !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {

          let data = { name: name2}

          try {

              let res = await dispatch(editUser({ id, data,token }));
          

              if (res.payload.success) {
                    toast.success(`The field was edited successfully`, {
                        position: "bottom-left",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                });
                dispatch(getOneUser({id,token}))
              } else {
                
                    toast.error(res.payload.response, {
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
              dispatch(getOneUser({id,token}))
          }
          catch(error){

              console.log(error.message)

          }
        }
    
  };

  let editMail = async () => {
  

    if (email === "") {
      toast.error("You must complete all fields !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {

          let data = { email: email}

          try {

              let res = await dispatch(editUser({ id, data,token }));
          

              if (res.payload.success) {
                    toast.success(`The field was edited successfully`, {
                        position: "bottom-left",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                });
              } else {
                
                    toast.error(res.payload.response, {
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

          }
          catch(error){

              console.log(error.message)

          }
    }
  };

  async function sesionOut(){
        
    let res= await dispatch(exit(token))
    if (res.payload.success) {

      toast.success("The field was edited successfully, you will be logged out, please login again with your new password", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      setTimeout(function () {
        navigate("/signin");
        url.reload();
      }, 2000);

    }
    else {
      toast.error(res.payload.response, {
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
  }

  let editContra = async () => {
   

    if(password.length!==0 && verifiedPass.length!==0 && passwordBefore.length!==0){

        if(password===verifiedPass){
            
                let data = { password: password, passwordCurrent: passwordBefore,token}
        
            try {
        
                let res = await dispatch(editUser({ id, data,token }));
                  
                      if (res.payload.success) {
                        sesionOut()
                      } else {
                        
                            toast.error(res.payload.response, {
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
        
                  }
                  catch(error){
        
                      console.log(error.message)
        
                  }
          }
          else{

            toast.error("Characters do not match", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

          }
    }
    else{

        toast.error("You must complete all fields !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

    }
    
  };

  /* ----------------------------------------------------------------------------------------------------------- */

  const { getUserReactions,deleteReaction } = reactionsActions

const {reactionsProfile,reactionsProfileId} = useSelector((state) => state.newReaction);


async function userReactions() {

  await dispatch(getUserReactions({id,token}))
}

    useEffect (()=> {
      userReactions()
    }, []) 
 


  async function deleteReactionFx(e) {
   
    if(e.target.name){
          Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, create it!'
      })
      .then(async(result)=>{

          if (result.isConfirmed) {

              try{
                  const res = await dispatch(deleteReaction({id:e.target.name,token}))
                  
                  if(res.payload.success){
                          Swal.fire(
                              'Deleted',
                              'Your reaction has been deleted.',
                              'success'
                          )                
                      await dispatch(getUserReactions({id,token}))
    
                  }
                  else{
                          
                      dispatch(alerta(Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: res.payload.response,
                      })))
                      
                  }
              }
              catch(error){
                  console.log(error)  
              }
              
          }
      }) 
    }                   
  }
  useEffect(()=> {
    deleteReactionFx()
  }, [])

 
  

  let clickPage = () => {
    setTimeout(function () {
      navigate("/newcity");
    }, 500);
  };
  let clickPage2 = () => {
    setTimeout(function () {
      navigate("/newhotel");
    }, 500);
  };
  let clickPage3 = () => {
    setTimeout(function () {
      navigate("/mycities");
    }, 500);
  };
  let clickPage4 = () => {
    setTimeout(function () {
      navigate("/myhotels");
    }, 500);
  };
  
  return (
    <>
      <div className="full-height">
        <div className="content-profile-page">
          <div className="profile-user-page cardProfile">
            <div className="img-user-profile">
              <img
                className="profile-bgHome"
                src="https://images.photowall.com/products/44351/island-paradise.jpg?h=699&q=85"
              />
              <img
                className="avatar"
                src={photo}
                alt="foto de perfil" 
              /> 
            </div>

            <div className="user-profile-data">
    
             <h1>{name}</h1>
              
            </div>
          </div>
        </div>
        {/* <div className='nosequeescribir-container'> */}
        {/* {reactionsProfile.length>0 
            ? reactionsProfile.map(e=><MyReactions iconName={e.name} id={e._id} name={e.itineraryId.name} icon={e.icon} deleteReaction={deleteReactionFx} photo={e.itineraryId.photo[0]} />)
            : <h2>You haven't reactions</h2>} */}
        <div className="container-generalPerfil">
          <div className="mc-containerMisDatos">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="mc-titulosAcordionConsultas">
                  Edit Profile
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="mc-containerDatosPersonales">
                  <div className="mc-inputsPerfil">
                    <TextField
                      id="nombre"
                      label="Name"
                      variant="outlined"
                      className="mc-inputsPerfilAcordion"
                      onChange={(text) => setName2(text.target.value)} 
                    />
                    <Button
                      variant="contained"
                      size="small"
                      className="mc-buttonAcordion"
                      onClick={editName} 
                    >
                      {<EditIcon className="mc-iconButtonPerfil" />}
                    </Button>
                  </div>
                  <div className="mc-inputsPerfil">
                    <TextField
                      id="email"
                      label="E-mail"
                      variant="outlined"
                      className="mc-inputsPerfilAcordion"
                      onChange={(text) => setEmail(text.target.value)}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      className="mc-buttonAcordion"
                        onClick={editMail} 
                    >
                      {<EditIcon className="mc-iconButtonPerfil" />}
                    </Button>
                  </div>
                  <div className="mc-inputsPerfilContra">
                    <div className="mc-inputsPerfilContraSub ">
                    <FormControl
                        variant="outlined"
                         onChange={(text) => setPasswordBefore(text.target.value)} 
                      >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                          id="password"
                          type={showPassword ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      <FormControl
                        variant="outlined"
                         onChange={(text) => setPassword(text.target.value)} 
                      >
                        <InputLabel htmlFor="password">New Password</InputLabel>
                        <OutlinedInput
                          id="password"
                          type={showPassword2 ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword2 ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="New Password"
                        />
                      </FormControl>
                      <FormControl
                        variant="outlined"
                        onChange={(text) =>
                            setVerifiedPass(text.target.value)
                      } 
                      >
                        <InputLabel htmlFor="confirmacionPassword">
                            Check your password{" "}
                        </InputLabel>
                        <OutlinedInput
                          id="confirmacionPassword"
                          type={showPassword3 ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword3}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword3 ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Check your password"
                        />
                      </FormControl>
                    </div>
                    <div className="mc-containerButtonContra">
                      <Button
                        variant="contained"
                        size="small"
                        className="mc-buttonAcordionContra"
                         onClick={editContra} 
                      >
                        {<EditIcon className="mc-iconButtonPerfilContra" />}
                      </Button>
                    </div>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        {/* </div> */}
        {role === "admin" ? (
          <>
            <div className="containerPerfilPages">
              <Card className="mc-cardPerfil2">
                <CardContent className="mc-containerSubCard2">
                  {<KeyboardDoubleArrowDownIcon />}
                  <Typography sx={{ mb: 1 }} className="mc-tituloPerfil">
                    Functions as Administrator
                  </Typography>
                  {<KeyboardDoubleArrowDownIcon />}
                </CardContent>
              </Card>
            </div>
            <div className="mc-SubcontainerPages">
              <Card className="mc-containerCardPages" onClick={clickPage}>
                <CardContent className="pages">
                  <Typography sx={{ mb: 1.5 }} className="">
                    Add City
                  </Typography>
                  <AddIcon></AddIcon>
                </CardContent>
              </Card>
              <Card className="mc-containerCardPages" onClick={clickPage2}>
                <CardContent className="pages">
                  <Typography sx={{ mb: 1.5 }} className="">
                    Add Hotel
                  </Typography>
                  <AddIcon></AddIcon>
                </CardContent>
              </Card>
              <Card className="mc-containerCardPages" onClick={clickPage3}>
                <CardContent className="pages">
                  <Typography sx={{ mb: 1.5 }} className="">
                    My Cities
                  </Typography>
                  <AddIcon></AddIcon>
                </CardContent>
              </Card>
              <Card className="mc-containerCardPages" onClick={clickPage4}>
                <CardContent className="pages">
                  <Typography sx={{ mb: 1.5 }} className="">
                    My Hotels
                  </Typography>
                  <AddIcon></AddIcon>
                </CardContent>
              </Card>
            </div>
          </>
        ) : null}
      </div>
      <div className="containerGeneralReactions">
        <h2 className="tituloMyReactionsPerfile">My Reactions</h2>
        <div className='nosequeescribir-container'>
        {reactionsProfile!==undefined
            ?  reactionsProfile.map(e=><MyReactions iconName={e.name} id={e._id} name={e.itineraryId.name} icon={e.icon} deleteReaction={deleteReactionFx} photo={e.itineraryId.photo[0]} />)
            :  <h2 className="titleNotResults">No reactions found</h2>
        }     
        </div>
      </div>
    </>
  );
}
export default MyProfile;
