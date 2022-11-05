import React from 'react'

function Input({type,placeholder},ref) {
  return (
    <input type={type} ref={ref} placeholder={placeholder} />
  )
}
let retornValue=React.forwardRef(Input)

export default retornValue
