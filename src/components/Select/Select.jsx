import React from 'react'
import "./select.css"

export default function Select(props) {
  let {event}=props
  return (
    <div class="select">
        <select name="hotelsSelect" onChange={event}>
            <option value="1">Order...</option>
            <option value="2">Ascending</option>
            <option value="3">Descending</option>
        </select>
    </div>
  )
}
