import React from 'react'
import './footer.css'
import { Link as NavLink} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook,faSquareTwitter,faSquareInstagram } from '@fortawesome/free-brands-svg-icons'


export default function Footer(props) {
    let {logged,role}=props 
    
    
    const element = <FontAwesomeIcon icon={faSquareFacebook} className='mx-2 icon' />
    const element2 = <FontAwesomeIcon icon={faSquareTwitter} className='mx-2 icon' />
    const element3 = <FontAwesomeIcon icon={faSquareInstagram} className='mx-2 icon' />

  return (

    <footer>
        <div className='c-container__footer'>
            <div className='c-box__footer'>
                <div className='logo'>
                    <img src="./img/logo.png" alt="logo" />
                </div>
                <div className='c_terms'>
                    <p>We are a company dedicated to providing you with the best care so that you can have an incredible adventure for your travels. We are at your disposal 24 hours a day, enjoy your adventure!</p>
                </div>
             </div>
            <div className='c-box__footer'>
                <h2 className='encabezadosFooter'>Pages</h2>

                
                                <NavLink to="/">
                                    <a className="bt-nav-c">Home</a>
                                </NavLink>
                                
                                

            
                               
                    {logged ? <NavLink to="/myitineraries"><a className="bt-nav-c">My Itineraries</a></NavLink> 
                            : null}
                    
                    

                    {logged ? <NavLink to="/myshows"><a className="bt-nav-c">My Shows</a></NavLink> 
                                                : null}
                    

                    {logged ? <NavLink to="/profile"><a className="bt-nav-c">Profile</a></NavLink> 
                                                : null}

            </div>
            <div className='c-box__footer'>
                <h2 className='encabezadosFooter'>Social Medias</h2>
                <p href='#'>{element} Facebook</p>
                <p href='#'>{element2} Twitter</p>
                <p href='#'>{element3} Instagram</p>
            </div>
        </div>
        <div className="c-box__copyright">
            <hr/>
            <p>All rights reserved © 2022 <b>TeamB Nehuen Aumedes, Calvi Matias</b></p>
        </div>
    </footer>
  )
}
