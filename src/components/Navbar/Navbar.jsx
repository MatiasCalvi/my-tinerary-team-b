import React, { useEffect } from 'react'
import './navbar.css' 
import { Link as NavLink,useLocation, useNavigate} from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { toast, ToastContainer } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import userActions from "../../redux/actions/userActions";


export default function NavbarOne() {
  
  let dispatch=useDispatch()
  let {logged,token,photo,name,role}=useSelector(store=>store.usuario)
  let {exit}=userActions
  const location = useLocation();
  const navigate = useNavigate();
  const [url, setUrl] = React.useState(null);
  React.useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  async function sesionOut(){
        
    let res= await dispatch(exit(token))
    if (res.payload.success) {

      toast.success(`You successfully logged out, come back soon!`, {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  
      setTimeout(function () {
        navigate("/");
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
  
  useEffect(()=>{

  },[])

  return (<>
    
        <Navbar bg="dark" expand={'lg'}>
          <Container fluid>
            <Navbar.Brand href="/"><img class="logo" src="./img/logo.png" alt="Logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'lg'}`}>
                  Pages
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" className='cW mR'>Home</Nav.Link>
                  <Nav.Link href="/cities" className='cW mR'>Cities</Nav.Link>
                  <Nav.Link href="/hotels" className='cW mR'>Hotels</Nav.Link>
                  {!logged
                      ?
                        <NavDropdown className='mR cW' 
                          title="Account"
                          id={`offcanvasNavbarDropdown-expand-${'lg'}`}
                        >
                          <NavDropdown.Item href="/signin">Sign in</NavDropdown.Item>
                          <NavDropdown.Item href="/signup">
                              Sign up
                          </NavDropdown.Item>
                        </NavDropdown>
                      : 
                        <NavDropdown className='mR cW' 
                          title="Account"
                          id={`offcanvasNavbarDropdown-expand-${'lg'}`}
                        >
                          <NavDropdown.Item onClick={sesionOut}>Sign out</NavDropdown.Item>
                        </NavDropdown>
                  }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='container-icon mR'>
              {logged
                  ? <NavLink to="/profile" className='cW mR'><img src={photo} alt="" /></NavLink>
                  : <NavLink to="/signin" ><img src={"https://cdn-icons-png.flaticon.com/512/9311/9311122.png"} alt="" /></NavLink>
              }
            </div>
          </Container>
          <ToastContainer />
        </Navbar>
  </>)
}
