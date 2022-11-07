import {useEffect,useState,React } from 'react'
import {useParams} from "react-router-dom";

export default function HotelsDetails() {
  let [hotels,sethotels]=useState([])
  let [showsHotels,setShowHotels]=useState([])


  useEffect(()=>{
    fetch('./data/dataHousing.json')
    .then(hotels=>hotels.json())
    .then(hotels=>sethotels(hotels.map(element=>({hotel:element.name,idHotel:element.id,photoHotel:element.photo,capacity:element.capacity,description:element.description}))))
    .catch(error=>console.log(error))
  },[])
  
  useEffect(()=>{
    fetch('./data/dataShows.json')
  .then(shows=>shows.json())
  .then(shows=>{
    setShowHotels(shows.map(element=>({showName:element.name,photoShow:element.photo,idShow:element.id,date:element.date,price:element.price,descriptionShow:element.description})))
  })
  .catch(error=>console.log(error))
  },[])

  return (<>
              <div className=''>
                  <h2>{hotels[1]?.hotel}</h2>
                  <img src={hotels[1]?.photoHotel[1]} alt={hotels[1]?.hotel} />
                  <p>{hotels[1]?.description}</p>
              </div>
              <div className=''>
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
                </div>
              </div>  
              </> )
}
