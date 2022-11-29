import {useEffect,useState,React} from 'react'
import CitiesCards from '../components/CitiesCards.jsx'
import "../cities.css"
import { useRef } from 'react'
import axios from 'axios';
import {BASE_URL} from '../api/url';


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
    console.log(checked)
    console.log(filter)

  return ( 
    <div className=''>
        <div className='flex column  w-100'>
            <div className='flex w-100 column '>
                <div className='flex w-100 j-center'>
                            <input
                        type="text"
                        placeholder="Search"
                        onChange={listen}
                                />
                </div>
                <div className='w-100 flex j-center'>
                    {
                        Array.from(new Set(cities.map(city => city.continent))).map(element => {
                            return (
                                <label key={element}><input onClick={listen} type="checkbox" id={element} value={element} /> {element}</label>
                            )
                        })  
                    }
                </div>
            </div>
            <div className='w-100 grow'>
                { filter.map(city=><CitiesCards key={city?._id} id={city?._id} name={city?.name} photo={city?.photo}/>)}
            </div>
        </div>
    </div>
    )
}