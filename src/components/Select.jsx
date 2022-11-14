import React from 'react'

export default function Select(props) {
    
    let {value}=props


  return (
    <select name="hotelsSelect" onChange={value}>
            <option value="3">Orden...</option>
            <option value="2">Desc</option>
            <option value="1">Asc</option>
    </select>
  )
}
