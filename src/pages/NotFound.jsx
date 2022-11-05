import React from 'react'
import '../App.css'

export default function NotFound() {
  return (
    <div className='c-bodyNotFound404'>
        <figure className='c-containterImgNotFound404'>
            <img src="./img/NotFound.png" alt="NotFound" />
        </figure>
        <div className='c-bodyNotFound404Article'>
          <h1>404</h1>
          <h2>Hey Traveler! Looks like you're heading to a wrong direction!</h2>
        </div>
    </div>
  )
}
