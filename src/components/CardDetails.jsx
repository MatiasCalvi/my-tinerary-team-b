import React from 'react'

export default function CardDetails(props) {
  let{name,photo,description,price,duration,userId}=props
  return (
    <div className="card2">
    <div className="face2 front2">
        <img src={photo} alt={name} />
        <h3>{name}</h3>
    </div>
    <div className="face2 back2">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <div className="face3">
        <h5>price: ${price}</h5>
        <h5>duration: {duration}hs</h5>
        </div>
            <div className="link2">
            </div>
    </div>
    </div>
  )
}
