import React,{useState,useEffect} from 'react'
import "./headerHotels.css"
import Searchbar from '../../components/SearchBar/Searchbar'
import Checkbox from '../../components/Checkbox/Checkbox'
import Cards from '../../components/Cards/Cards'
import axios from 'axios';
import {BASE_URL} from '../../api/url';
import Select from '../../components/Select/Select'

export default function Hotels() {
    let [hotels,sethotels]=useState([])
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
    console.log(hotels)
  return (<>
    <header class="header3">
	            <div class="text-box3">
		            <h1 class="heading-primary3">
			            <span class="heading-primary-main7">My itinerary - Hotels </span>
			            <span class="heading-primary-sub3">The adventure begins, choose your hotel</span>
		            </h1>
	            </div>
    </header>
    <div className='container-searchAndChecks'>
            <div className="box-select">
                <Select event={onFilterValueSelected}/>
            </div>
            <div className=''>
                <Searchbar event={onFilterValueSelected} />
            </div>
    </div>
    <div className='body-container-Cards-general'>
        <div class="box">
            {
                hotels.map(element=><Cards key= {element._id} name={element.name} continent={element.capacity} id={element._id} photo={element.photo[0]} location={"hotelsDetails"} text={"Capacity"} clas1={"fontsize-h2Card"} clas2={"fontsize-spanCard"}></Cards>)
                                
                }
        </div>
    </div>
  </>)
}
