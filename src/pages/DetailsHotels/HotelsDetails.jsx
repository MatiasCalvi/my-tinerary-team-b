import {useEffect,useState,React} from 'react'
import { useParams } from 'react-router-dom'
import "../DetailsCities/headerDetails.css"
import axios from 'axios';
import {BASE_URL} from '../../api/url';
import SectionDetailsCuatro from '../../components/SectionDetails/SectionDetailsCuatro';
import SectionDetailsCinco from '../../components/SectionDetails/SectionDetailsCinco';
import SectionDetailsSeis from '../../components/SectionDetails/SectionDetailsSeis';

export default function HotelsDetails() {
  let [filter,setFilter]=useState({})
  let [shows,setShows]=useState([])
  let user=[]
  let a=useParams()
  let [photos,setPhotos]=useState([])

  useEffect(()=>{
    axios.get(`${BASE_URL}/hotels`)
    .then(response=>{
          setFilter(response.data.allhotels.find((x) => x._id === a.id))
          return response.data.allhotels.find((x) => x._id === a.id)})
    .then(response=>setPhotos(response.photo[0]))
     },[])

useEffect (()=>{
  axios.get(`${BASE_URL}/shows`)
  .then(response=>setShows(response.data.shows))
},[])

/* user.push(filter.userId) */

let show=shows.filter(e=>e.hotelId==a.id)


  return (<>
    <header class="header5">
	            <div class="text-box5">
		            <h1 class="heading-primary5">
			            <span class="heading-primary-main5">Hotel Shows </span>
			            <span class="heading-primary-sub5">The incredible shows that await you</span>
		            </h1>
	            </div>
    </header>
    <h2 className='heading-primary-main3'>Hotel</h2>
    <SectionDetailsCuatro name={filter?.name} photo={photos} capacity={filter.capacity}/> 
		{(show.length!=0)?<h2 className='heading-primary-main3'>Shows</h2>:null}
    {(show[0])?<SectionDetailsSeis name={show[0]?.name} photo={show[0]?.photo} description={show[0]?.description} date={show[0]?.date} price={show[0]?.price}/>:null}
		{(show[1])?<SectionDetailsCinco name={show[1]?.name} photo={show[1]?.photo} description={show[1]?.description} date={show[1]?.date} price={show[1]?.price}/>:null}
    

  </>)
}
