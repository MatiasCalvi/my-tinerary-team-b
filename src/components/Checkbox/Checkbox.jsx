import React from 'react'
import "./checkbox.css"

export default function Checkbox(props) {
    let {id,event,value,name}=props
  return (<>
      <label className='letra-checkbox'><input type="checkbox" class="my-checkbox" onChange={event} value={value}  id={id} />{name}</label>
    </>
  
  )
}
