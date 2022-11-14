import {useEffect,useState,React} from 'react'
import Select from '../components/Select'
import HotelCards from '../components/HotelCards'
import SearchBar from '../components/SearchBar'
import axios from 'axios';
import {BASE_URL} from '../api/url';


export default function Hotels() {
    let [hotels,sethotels]=useState([])
    let [print,setPrint]=useState(false)
    let [searched,setSearched]=useState([])
    let [order,setOrder]=useState('')
 
    
    useEffect(()=>{
        axios.get(`${BASE_URL}/hotels?order=${order}&name=${searched}`)
        .then(response=>sethotels(response.data.allhotels))
    },[order,searched])

    function onFilterValueSelected(value){
        
        
            
        if(value.target.type==="text"){
            setSearched(value.target.value)
        }

        if(value.target.name==="hotelsSelect"){
            
                    if (value.target.value == '1') {
                    setOrder("asc")
                  
                     }
                    if (value.target.value == '2') {
                    setOrder("desc")
                    
                    }
                    if(value.target.value == '3') {
                    setOrder ("")
                    
                    }
            
            }
        }
    
    
    return (
    <div className='c-container-hotels'>
        <div className='c-container-hotels-inputs'>
            <Select value={onFilterValueSelected}/>
            <SearchBar value={onFilterValueSelected}/>
        </div>
        <div>
        {(!print)
        ? hotels.map(hotel=><HotelCards key={hotel?.id} name={hotel?.name} capacity={hotel?.capacity} photo={hotel?.photo[0]}/>)
        : hotels.map(hotel=><HotelCards key={hotel?.id} name={hotel?.name} capacity={hotel?.capacity} photo={hotel?.photo[0]}/>)}
        </div>
    </div>
    )   
} 