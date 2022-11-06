import {useEffect,useState,React} from 'react'
import Select from '../components/Select'
import Cards from '../components/Cards'
import SearchBar from '../components/SearchBar'

let aplied={}

export default function Hotels() {
    let [hotels,sethotels]=useState([])
    let [newHotels,setNewHotels]=useState([])
    let [print,setPrint]=useState(false)
    useEffect(()=>{
        fetch('./data/dataHousing.json')
        .then(hotels=>hotels.json())
        .then(hotels=>sethotels(hotels))
        .catch(error=>console.log(error))
    },[])

    function onFilterValueSelected(FilterValue,especialist){

        aplied[especialist] = FilterValue;
        
        console.log(aplied)
        
        for(let date in aplied){
            
            if(date==="searchBar"){
                if(aplied["searchBar"] !== ''){
                    setNewHotels(newHotels.filter(element=>element.name.toLowerCase().includes(aplied[date].toLowerCase())))
                } 
                newHotels=hotels
            }
            if(date==="select"){
                
                if (aplied["select"] === '1') {
                    setNewHotels(hotels.sort(function (a, b) {
                        if (a.capacity > b.capacity) {
                            return -1;
                        } else if (a.capacity < b.capacity) {
                            return 1; 
                        } else {
                            return 0;
                        }
                        }).filter(hotel=>hotel.capacity<=3000))
                } 
                if (aplied["select"] === '2') {
                    setNewHotels(hotels.sort(function (a, b) {
                        if (a.capacity < b.capacity) {
                            return -1;
                        } else if (a.capacity > b.capacity) {
                            return 1; 
                        } else {
                            return 0;
                        }
                        }).filter(hotel=>hotel.capacity>3000))
                    }
                
                }
                
            if(newHotels.length===0){
                console.log("vacio")
            }
        }
        setPrint(true)
    }

    console.log(newHotels)
    
    return (
    <div className='c-container-hotels'>
        <div className='c-container-hotels-inputs'>
            <Select functionFilter={onFilterValueSelected}/>
            <SearchBar functionFilter={onFilterValueSelected}/>
        </div>
        <div>
        {(!print)
        ? hotels.map(hotel=><Cards key={hotel?.id} name={hotel?.name} capacity={hotel?.capacity} photo={hotel?.photo[0]}/>)
        : newHotels.map(hotel=><Cards key={hotel?.id} name={hotel?.name} capacity={hotel?.capacity} photo={hotel?.photo[0]}/>)}
        </div>
    </div>
    )
}
