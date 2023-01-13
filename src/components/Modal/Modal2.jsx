import React from 'react'
import "./modal.css"

function Modal2({open , children, onClose}) {


  if (!open) return null

  return (
    <>
        <div className='overlay-modal'>
            <div className='modal'>
                <h2 className='modal-title'>Edit</h2>
                <button className='modal-button' onClick={onClose}>Close</button>
                {children}
            </div>
        </div>
    </>
  )
}

export default Modal2