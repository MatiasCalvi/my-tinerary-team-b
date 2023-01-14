import {useEffect,useState,React} from 'react'
import { useParams } from 'react-router-dom'
import "./detailsCities.css"
import "./headerDetails.css"
import axios from 'axios';
import {BASE_URL} from '../../api/url';
import SectionDetailsUno from '../../components/SectionDetails/SectionDetailsUno';
import SectionDetailsDos from '../../components/SectionDetails/SectionDetailsDos';
import SectionDetailsTres from '../../components/SectionDetails/SectionDetailsTres';
import Reaction from '../../components/Reaction/Reaction'
import Reaction2 from '../../components/Reaction/Reaction2'

import reactionsActions from '../../redux/actions/reactionsActions';
import { useDispatch,useSelector } from 'react-redux';

export default function CitiesDetails() {
  let [filter,setFilter]=useState([])
  let [shows,setShows]=useState([])
  let user=[]
  let a=useParams()
  let dispatch=useDispatch()
  

  useEffect(()=>{
    axios.get(`${BASE_URL}/cities`)
    .then(response=>setFilter(response.data.allcities.find((x) => x._id === a.id)))
},[])

let {name,continent,photo,population,userId}=filter

useEffect (()=>{
    axios.get(`${BASE_URL}/itineraries`)
    .then(response=>setShows(response.data.itinerary))
},[])

user.push(userId)

let show=shows.filter(e=>e.cityId==a.id)

/* -------------------------------------------------------------------------------------- */


    let {getReactionItinerary,getReactionItinerary2}=reactionsActions

    const {reactionsItinerary,reactionsItineray2} = useSelector((state) => state.newReaction);
   
    
    let{token,logged}=useSelector(state=>state.usuario)
    

    let idItinerary=show[0]?._id;
    let idItinerary2=show[1]?._id;

    
    async function get(){
        await dispatch(getReactionItinerary({idItinerary,token}))
    }
    async function get2(){
        await dispatch(getReactionItinerary2({idItinerary2,token}))
    }

    useEffect(()=>{
        get();
        get2();
    },[idItinerary,idItinerary2])

  

  return (<>
   <header class="header5">
	            <div class="text-box5">
		            <h1 class="heading-primary5">
			            <span class="heading-primary-main5">City Itinerary </span>
			            <span class="heading-primary-sub5">The incredible activities that await you</span>
		            </h1>
	            </div>
    </header>
    <h2 className='heading-primary-main3'>City</h2>
    <SectionDetailsUno name={name} population={population} photo={photo} continent={continent}/>
		{ (show[0]!=undefined||show[1]!=undefined)?<h2 className='heading-primary-main3'>Itineraries</h2>:null}
    {(show[1]!=undefined && logged )?< Reaction2 array={reactionsItineray2} /> : null} 
		{(show[1]!=undefined )?<SectionDetailsDos name={show[1]?.name} photo={show[1]?.photo[0]} description={show[1]?.description} price={show[1]?.price} duration={show[1]?.duration}/>:null}
    {(show[0]!=undefined && logged )?< Reaction array={reactionsItinerary} /> : null} 
    {(show[0]!=undefined)?<SectionDetailsTres name={show[0]?.name} photo={show[0]?.photo[0]} description={show[0]?.description} price={show[0]?.price} duration={show[0]?.duration}/>:null}
  </>)
}
