import React from 'react'
import "../citiesDetails.css"
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios';
import {BASE_URL} from '../api/url';
import HotelCardDetails from '../components/HotelCardDetails';
import CardUserDetails from '../components/CardUserDetails';


export default function Hoteldetails() {
    let a=useParams()
    let [filter,setFilter]=useState([])
    let [shows,setShows]=useState([])
    let user=[]
    a=(a.id).slice(1)
    
    useEffect(()=>{
        axios.get(`${BASE_URL}/hotels`)
        .then(response=>setFilter(response.data.allhotels.find((x) => x._id === a)))
    },[])

    let {name, photo, capacity, userId}=filter

    useEffect (()=>{
        axios.get(`${BASE_URL}/shows`)
        .then(response=>setShows(response.data.shows))
    },[])
    
    let show=shows.filter(e=>e.hotelId==a)
    console.log(show)
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
                <h4>capacity:{`${capacity}`}</h4>
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
            (show.length!=0)?show.map(e=><HotelCardDetails showId={e?._id} key={e?._id} name={e?.name} photo={e?.photo} description={e?.description} price={e?.price} date={e?.date.slice(0, 10) } />):console.log(true)
        }
   </div>

    </>)
}

