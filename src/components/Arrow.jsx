import React from 'react'

export default function Arrow(props) {
  let {icono,evento}=props
  return (
    <div className="arrows" onClick={evento}>{icono}</div>
  )
}
