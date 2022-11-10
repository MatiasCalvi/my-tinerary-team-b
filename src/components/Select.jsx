import React from 'react'

export default function Select(props) {
    
    let {functionFilter}=props
    function catchEvent2(event){
        functionFilter(event.target.value,"select")
    }

  return (
    <select name="hotelsSelect" onChange={catchEvent2}>
            <option>Capacidad...</option>
            <option value="2">Mas de 3000</option>
            <option value="1">Menos de 3000</option>
    </select>
  )
}
