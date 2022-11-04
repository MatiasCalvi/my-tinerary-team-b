import React from 'react'

export default function TitleWithImg(props) {
  let {name,photo}=props
  return (<>
 
    <p>{name}</p>
    <img className='c-imgCarousel' src={photo} alt={name} />
    </>

  )
}
