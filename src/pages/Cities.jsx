import {useEffect,useState,React} from 'react'
import CitiesCards from '../components/CitiesCards.jsx'
import "../cities.css"
import { useDispatch,useSelector } from 'react-redux';
import toDoActions from '../redux/actions/toDoActions.js';

export default function Cities() {

    let {getCitiesFilter,getCities}=toDoActions
    const dispatch= useDispatch()
    
   const {cities} = useSelector((state) => state.cities);
   const {categories} = useSelector((state) => state.cities); 

   
    let [checked,setChecked]=useState([])
    let [searched,setSearched]=useState('')
    
    useEffect(()=>{
        dispatch(getCities('cities'))
    },[]) 
    
    useEffect(()=>{
        dispatch(getCitiesFilter({cities:'cities',search:searched,check:checked}))
    },[checked,searched]) 

    function listen(value) {
        if (checked.length < 1) {
            setChecked(['&continent=' + value.target.value])
        } else {

            if (value.target.checked) {
                if (value.target.type === "checkbox") {
                    setChecked(checked.concat("&continent=" + value.target.value))
                }
            } else {
                setChecked(checked.filter(element => element !== "&continent=" + value.target.value))
            }
        }

        if (value.target.type === "text") {
            setSearched(value.target.value)
    }
}
    console.log(cities)
    console.log(checked)

    

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
               
                   { categories.map(element => <label key={element}><input onClick={listen} type="checkbox" id={element} value={element} /> {element}</label>)}
               
                </div>
            </div>
            <div className='w-100 grow'>
                { cities.map(city=><CitiesCards key={city._id} id={city._id} name={city.name} photo={city.photo}/>)}
            </div>
        </div>
    </div>
    )
}
