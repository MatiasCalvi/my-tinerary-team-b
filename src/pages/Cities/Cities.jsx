import {useEffect,useState,React} from 'react'
import "./cities.css"
import "./headerCities.css"
import { useRef } from 'react'
import Searchbar from '../../components/SearchBar/Searchbar'
import Checkbox from '../../components/Checkbox/Checkbox'
import Cards from '../../components/Cards/Cards'
import axios from 'axios';
import {BASE_URL} from '../../api/url';


export default function Cities() {

    let [cities,setcities]=useState([])
    let [checked,setChecked]=useState([])
    let [searched,setSearched]=useState([])
    let [filter,setFilter]=useState([])

    useEffect(()=>{
        axios.get(`${BASE_URL}/cities`)
        .then(response=>setcities(response.data.allcities))
    },[])


    function listen(value){
        
        if(value.target.checked){
            if(value.target.type==="checkbox"){
            setChecked(checked.concat("&continent="+value.target.value))
        }
        }else{
            setChecked(checked.filter(element=>element!=="&continent="+value.target.value))
        }

        if(value.target.type==="text"){
            setSearched(value.target.value)
        }
       
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/cities?name=${searched}${checked.join('')}`)
        .then(response=>setFilter(response.data.allcities))
    },[checked,searched])
   
    console.log(filter)

  return (<>
    <header class="header2">
	            <div class="text-box2">
		            <h1 class="heading-primary2">
			            <span class="heading-primary-main2">My itinerary - Cities </span>
			            <span class="heading-primary-sub2">The adventure begins, choose your city</span>
		            </h1>
	            </div>
    </header>
    <div className=''>
        <div className='container-searchAndChecks'>
            <div className=''>
                <Searchbar event={listen}/>
            </div>
            <div className="box-checkbox">
                {   Array.from(new Set(cities.map(city => city.continent))).map(element => {
                    return (
                        <Checkbox key={element} id={element} event={listen} value={element} name={element}/>)}) 
                }
            </div>
        </div>
    </div>
    <div className='body-container-Cards-general'>
        <div class="box">
            {
                filter.map(element=><Cards key= {element._id} name={element.name} location={"citiesDetails"} continent={element.continent} id={element._id} photo={element.photo} ></Cards>)
                                
                }
        </div>
    </div>
   </>)
}
        