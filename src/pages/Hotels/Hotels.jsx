import React,{useState,useEffect} from 'react'
import "./headerHotels.css"
import Searchbar from '../../components/SearchBar/Searchbar'
import Checkbox from '../../components/Checkbox/Checkbox'
import Cards from '../../components/Cards/Cards'
import axios from 'axios';
import {BASE_URL} from '../../api/url';
import Select from '../../components/Select/Select'
import { useDispatch , useSelector } from 'react-redux';
import hotelActions from '../../redux/actions/hotelActions';

export default function Hotels() {
   
    let [searched,setSearched]=useState('')
    let [order,setOrder]=useState('')
    let [Aproved, setAproved ] = useState(true)
    let [message,setMessage]=useState('')



    let{ getHotels, getHotelsFilter } = hotelActions

    const dispatch= useDispatch()

    const {hotels,messageError} = useSelector(state => state.hotels);
    
    
    useEffect(()=>{

        if (getHotels && Aproved) {
            dispatch(getHotels())
            setAproved(false)

          }else {
            setMessage(dispatch(getHotelsFilter({hotels:'hotels',searched:searched ,order:order})))
        }
    },[searched,order]) 



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
            {messageError.payload===undefined
                ? hotels?.map(element=><Cards key= {element._id} name={element.name} continent={element.capacity} id={element._id} photo={element.photo[0]} location={"hotelsDetails"} text={"Capacity"} clas1={"fontsize-h2Card"} clas2={"fontsize-spanCard"}></Cards>)
                : <h2>{messageError.payload}</h2>              
                }
        </div>
    </div>
  </>)
}
