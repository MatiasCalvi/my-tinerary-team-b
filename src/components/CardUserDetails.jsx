import React from 'react'
import "../cardDetailsUser.css"

export default function CardUserDetails(props) {
let{name,photo}=props
  return (
    <div className="card3">
    <div className="face4 front3">
        <img src={photo} alt={name} />
        <h3>{name}</h3>
    </div>
    <div className="face4 back3">
        <h3>{name}</h3>
    </div>
            <div className="link3">
            </div>
    </div>
  )
}
