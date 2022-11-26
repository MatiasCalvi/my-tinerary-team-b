import React, { useEffect } from "react"
import '../NavBar.css';
import { Link as NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import userActions from "../redux/actions/userActions";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'

export default function NavBar (props) {

    let {listen}=props
    let dispatch=useDispatch()
    let {exit}=userActions
    let {logged,token,photo,name}=useSelector(store=>store.usuario)
    let navigate = useNavigate()

    let listen2=()=>{
        listen(logged)
    }

   console.log(photo)

    async function sesionOut(){
        
        let res= await dispatch(exit(token))
        if (res.payload.success) {
            console.log(res);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "your session has been closed successfully",
                showConfirmButton: false,
                timer: 2000
              })
              navigate(`/`)

        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'an error has occurred',
                footer: 'Try Again'
              })
        }
    }

    useEffect(()=>{
       listen2() 
       console.log(logged)
    },[logged])
    
    
    return (<>
        <div>
            <div className="NavBar">

                <div className="dropdown1">               
                    <nav className="navegation">
                    <ul className="menu">
                        <li><p>Pages</p>
                            <ul className="submenu">
                                <li>
                                <NavLink to="/Cities">
                                <button className="bt-nav-c">Cities</button>
                                </NavLink>
                                </li>
                                <li>
                                <NavLink to="/Hotels">
                                <button className="bt-nav-c">Hotels</button>
                                </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    </nav> 
                </div>

                <div className="title">
                    <h1>My Tinerary</h1>
                </div>
                
                <div className="dropdown2">
                    <nav className="navegation">
                        <ul className="menu">
                            <li>
                                <div className="container-img-iconUser">

                                    { photo ?   <img src={photo} className="imgIconUser" alt={name}/> 
                                    :   <img src="https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="imgIconUser" alt="icon"/> }
                                    
                                    { name ?   <p className="title-iconUser">{name}</p> 
                                    :   <p className="title-iconUser">"User"</p> } 

                                </div>
                                <ul className="submenu">
                                    <li>
                                    
                                            <NavLink to="/signup">
                                                <button className="bt-nav-c">Sign Up</button>
                                            </NavLink>   
                                   
                                    </li>
                                    <li>
                                    { logged?       
                                    
                                            <NavLink to="/">
                                                <button className="bt-nav-c" onClick={sesionOut}>Sign Out</button>
                                            </NavLink>   
                                    
                                            : <NavLink to="/signin"><button className="bt-nav-c">Sign In</button></NavLink>     }
                                    
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        
    </>)
}