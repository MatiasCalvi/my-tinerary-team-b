import React from 'react'
import "./searchbar.css"

export default function Searchbar(props) {
  let {event}=props
  return (
   /*  <div className='container-search'> */
        <div class="search-box">
            <button class="btn-search"><img class="fas fa-search img-search" src='./img/icons8-búsqueda-50.png'></img></button>
            <input type="text" class="input-search" onChange={event} placeholder="Type to Search..."/>
        </div> 
    /* </div>  */         
  )
}
