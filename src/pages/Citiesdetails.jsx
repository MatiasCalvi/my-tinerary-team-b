import React from 'react'
import "../citiesDetails.css"
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios';
import {BASE_URL} from '../api/url';
import CardDetails from '../components/CardDetails';
import CardUserDetails from '../components/CardUserDetails';
import Reaction from '../components/Reaction/Reaction';
import Reaction2 from '../components/Reaction/Reaction2';
import reactionsActions from '../redux/actions/reactionsActions';
import { useDispatch,useSelector } from 'react-redux';


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

    /* -------------------------------------------------------------------------------------- */

    let dispatch=useDispatch()

    let {getReactionItinerary,getReactionItinerary2}=reactionsActions

    const {reactionsItinerary,reactionsItineray2} = useSelector((state) => state.newReaction);


    let idItinerary=show[0]?._id;
    let idItinerary2=show[1]?._id;

    async function get(){
        await dispatch(getReactionItinerary(idItinerary))
    }
    async function get2(){
        await dispatch(getReactionItinerary2(idItinerary2))
    }

    useEffect(()=>{
        get()
    },[idItinerary])

    useEffect(()=>{
        get2()
    },[idItinerary2])

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

    {  show.length!==0
            ? <CardDetails  name={show[0].name} photo={show[0].photo[0]} description={show[0].description} price={show[0].price} duration={show[0].duration}/>
            :   console.log(true)}

   {show.length!==0 ? < Reaction array={reactionsItinerary} />
        : console.log("hola")}
                
    { show.length!==0
            ? <CardDetails  name={show[1].name} photo={show[1].photo[0]} description={show[1].description} price={show[1].price} duration={show[1].duration}/>
            :   console.log(true)}

    {show.length!==0 ? < Reaction2 array={reactionsItineray2}/>
            : console.log("hola")}
     
            
    </div> 
    </>)
}
