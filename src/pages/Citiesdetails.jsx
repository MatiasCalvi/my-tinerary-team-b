import React from 'react'
import "../citiesDetails.css"
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios';
import {BASE_URL} from '../api/url';
import CardDetails from '../components/CardDetails';
import CardUserDetails from '../components/CardUserDetails';

export default function Citiesdetails() {
    let a=useParams()
    let [filter,setFilter]=useState([])
    let [shows,setShows]=useState([])
    let user=[]
    a=(a.id).slice(1)
    
    useEffect(()=>{
        axios.get(`${BASE_URL}/cities`)
        .then(response=>setFilter(response.data.allcities.find((x) => x._id === a)))
    },[])

    let {name,continent,photo,population,userId}=filter

    useEffect (()=>{
        axios.get(`${BASE_URL}/itineraries`)
        .then(response=>setShows(response.data.itinerary))
    },[])
    
    let show=shows.filter(e=>e.cityId==a)
    user.push(userId)
    console.log(photo)
    return (<>
    <div className='c-containerDetailsOld'>
        <div className="card1">
            <div className="face1 front1">
                <img src={`${photo} alt="${name}" `}/>
                 <h3>{`${name}`}</h3>
            </div>
            <div className="face1 back1">
                <h3>{`${name}`}</h3>
                <h4>Continent:{`${continent}`}</h4>
                <h4>Population:{`${population}`} people</h4>
                <div className="link1">
                </div>
            </div>
        </div>
    </div>
    <div className='c-containerDetailsYoungInter'>
        {(show.length!=0)?
            <CardUserDetails name={user[0]?.name} photo={user[0]?.photo} /> : console.log(true)
        }
    </div>  
    <div className='c-containerDetailsYoung'>
        {
            (show.length!=0)?show.map(e=><CardDetails key={e?._id} name={e?.name} photo={e?.photo[0]} description={e?.description} price={e?.price} duration={e?.duration} />):console.log(true)
        }
   </div>
    </>)
}
