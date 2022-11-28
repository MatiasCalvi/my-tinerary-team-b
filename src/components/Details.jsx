import React from 'react'

export default function Details(props) {
    let{hotelName,photoHotel,hotelsDescription}=props
  return (<>
    <div className='c-contenedor-hotelsbranch'>
            <div className='c-container-hotels2'>
                  <h2>{hotelName}</h2>
                  <img src={photoHotel[1]} alt={hotelName} />
                  <p>{hotelsDescription}</p>
            </div>
           
    </div>
  </>)
}
 {/* <div className='c-container-shows'>
                <div className='c-subcontainers-shows'>
                  <h2>{showName}</h2>
                  <img src={showPhoto} alt={showName} />
                  <p>{showDescription}</p>
                  <p>{showDate}</p>
                  <p>Price: ${showPrice}</p>
                </div>
                <div className='c-subcontainers-shows'>
                  <h2>{showName}</h2>
                  <img src={showPhoto} alt={showName} />
                  <p>{showDescription}</p>
                  <p>{showDate}</p>
                  <p>Price: ${showPrice}</p>
                </div>
            </div> */}