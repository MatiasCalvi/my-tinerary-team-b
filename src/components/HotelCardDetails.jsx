import React from 'react'
import Comments from './Comment/Comment'

export default function HotelCardDetails (props) {

  let{name,photo,description,price,date,showId}=props

  console.log(showId)


  return (
    <div className="card2">
    <div className="face2 front2">
        <img src={photo} alt={name} />
        <h3>{name}</h3>
    </div>
    <div className="face2 back2">
        <div>
        <h3>{name}</h3>
        <h5>{description}</h5>
        <div className="face3">
        <h5>price: ${price}</h5>
        <h5>date: {date}</h5>
        </div>
        </div>
        <div className='scroleable'>
        <Comments showId={showId} />
        </div>

    </div>
    </div>
    
  )
}