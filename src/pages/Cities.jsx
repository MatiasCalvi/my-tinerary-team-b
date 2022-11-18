import {useEffect,useState,React} from 'react'
import CitiesCards from '../components/CitiesCards.jsx'
import "../cities.css"
import { useRef } from 'react'
import axios from 'axios';
import {BASE_URL} from '../api/url';
import { useDispatch,useSelector } from 'react-redux';
import toDoActions from '../redux/actions/toDoActions.js';

export default function Cities() {

    let {getCitiesFilter,getCities}=toDoActions
    const dispatch= useDispatch()
    
   const {cities} = useSelector((state) => state.cities); 

    /* let [cities,setcities]=useState([]) */
    let [checked,setChecked]=useState([])
    let [searched,setSearched]=useState('')
    let check=[]
    
    useEffect(()=>{
        dispatch(getCitiesFilter({cities:'cities',search:searched,check:checked}))
    },[checked,searched])
    
    useEffect(()=>{
        dispatch(getCities('cities'))
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
            console.log()
        }
       
    }
    
 /*   useEffect(()=>{
        console.log(searched)
        axios.get(`${BASE_URL}/cities?name=${searched}`)
        .then(response=>setFilter(response.data.allcities))
    },[checked,searched])  */

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
                { cities.map(city=><CitiesCards key={city._id} id={city._id} name={city.name} photo={city.photo}/>)}
            </div>
        </div>
    </div>
    )
}