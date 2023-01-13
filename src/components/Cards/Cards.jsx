import React from 'react'
import { Link as Navlink } from 'react-router-dom'

export default function Cards(props) {
  let {name,photo,location,continent,id,text,clas2,clas1}=props
  return (<>
   <Navlink to={`/${location}/${id}`}><div class="card">
        <div class="imgBx">
            <img src={photo} alt={name}/>
        </div>
        <div class="details">
           <h2 className={clas1}>{name}<span className={clas2}>{text} {continent}</span></h2>
        </div>
    </div></Navlink>
  </>)
}
