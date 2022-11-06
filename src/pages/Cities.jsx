import {useEffect,useState,React} from 'react'
import CitiesCards from '../components/CitiesCards.jsx'
import "../cities.css"
import { useRef } from 'react'


export default function Cities() {

    let [cities,setcities]=useState([])
    let [checked,setChecked]=useState([])
    let [searched,setSearched]=useState([])

    useEffect(()=>{
        fetch('./data/dataCities.json')
        .then(cities=>cities.json())
        .then(cities=>setcities(cities))
        .catch(error=>console.log(error))
    },[])
 
    let checkboxH = (event) => {
        let array = [...checked]
        if(event.target.checked){
            array.push(event.target.value)
        }else {
            array = array.filter(element => element !== event.target.value)
        }
        setChecked(array)
        console.log(array)
    }
    
    let searchImput = (event) => {
        setSearched (event.target.value)
    }

    const dataFiltered = useRef (null)
    dataFiltered.current = (checked + " " + searched)

    console.log(dataFiltered)
    console.log(checked)
    console.log(searched)
    console.log(setSearched)
    console.log(setChecked)

  return ( 
    <div className=''>
        <div className='flex column  w-100'>
            <div className='flex w-100 column '>
                <div className='flex w-100 j-center'>
                            <input
                        type="text"
                        placeholder="Search"
                        onChange={searchImput}
                                />
                </div>
                <div className='w-100 flex j-center'>
                    {
                        Array.from(new Set(cities.map(city => city.continent))).map(element => {
                            return (
                                <label key={element}><input onClick={checkboxH} type="checkbox" id={element} value={element} /> {element}</label>
                            )
                        })
                    }
                </div>
            </div>
            <div className='w-100 grow'>
                {cities.map(city=><CitiesCards key={city?.id} name={city?.name} photo={city?.photo}/>)}
            </div>
        </div>
    </div>
    )
}