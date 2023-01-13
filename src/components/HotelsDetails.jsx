import {useEffect,useState,React } from 'react'
import {useParams} from "react-router-dom";
import Hotels from '../pages/Hotels';

export default function HotelsDetails() {
  let [hotels,sethotels]=useState({})
  let [hotelsFull,sethotelsFull]=useState([])
  /* let [showsHotels,setShowHotels]=useState([]) */
  let [number,setNumber]=useState(1)
  let {id}=useParams()

  useEffect(()=>{
    fetch('./data/dataHousing.json')
    .then(hotels=>hotels.json())
    .then(hotels=>sethotelsFull(hotels))
    .catch(error=>console.log(error))
  },[])
  
  sethotels(...hotelsFull.filter(hotel=>hotel.id==id))
  console.log(hotels)
  
  return (<>
               <div className=''>
                  <h2>{hotels?.name}</h2>
                  <p>{hotels?.description}</p>
              </div>   
              {/* {<div className=''>
                <div >
                  <h2>{showsHotels[1]?.showName}</h2>
                  <img src={showsHotels[1]?.photoShow} alt={showsHotels[1]?.showName} />
                  <p>{showsHotels[1]?.descriptionShow}</p>
                  <div>
                    <p>{showsHotels[1]?.date}</p>
                    <p>{showsHotels[1]?.price}</p>
                  </div>
                  <h2>{showsHotels[1]?.showName}</h2>
                  <img src={showsHotels[1]?.photoShow} alt={showsHotels[1]?.showName} />
                  <p>{showsHotels[1]?.descriptionShow}</p>
                  <div>
                    <p>{showsHotels[1]?.date}</p>
                    <p>{showsHotels[1]?.price}</p>
                  </div>
                </div>}
              </div> */}  
              </> )
}
