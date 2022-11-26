import React from "react"
import '../NavBar.css';
import { Link as NavLink} from 'react-router-dom'

export default function NavBar (props) {
    let{display}=props
    console.log(display+"hola")
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
                            <li><p>Users</p>
                                <ul className="submenu">
                                    <li>
                                    <NavLink to="/signup">
                                    <button className="bt-nav-c">Sign Up</button>
                                    </NavLink>
                                    </li>
                                    <li>
                                {/* {(display)
                                    ? <NavLink to="/signin"><button className="bt-nav-c">Sign In</button></NavLink>
                                    : <NavLink to="/signin"><button className="bt-nav-c dNone">Sign Out</button></NavLink>
                                } */}<NavLink to="/signin"><button className="bt-nav-c">Sign In</button></NavLink>
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