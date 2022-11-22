import {useEffect,useState, useRef,React} from 'react'
import Select from '../components/Select'
import HotelCards from '../components/HotelCards'
import SearchBar from '../components/SearchBar'
import { useDispatch , useSelector } from 'react-redux';
import hotelActions from '../redux/actions/hotelActions';

export default function Hotels() {
    
  
    let [searched,setSearched]=useState('')
    let [order,setOrder]=useState('')
    let [Aproved, setAproved ] = useState(true)



    let{ getHotels, getHotelsFilter } = hotelActions

    const dispatch= useDispatch()

    const {hotels} = useSelector(state => state.hotels);
    
    
    useEffect(()=>{

        if (getHotels && Aproved) {
            dispatch(getHotels())
            setAproved(false)

          }else {
            dispatch(getHotelsFilter({hotels:'hotels',searched:searched ,order:order}))
        }
    },[searched,order]) 

    console.log(order)
    console.log(searched)



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
            {hotels?.map(hotel=><HotelCards key={hotel?.id} id={hotel?._id} name={hotel?.name} capacity={hotel?.capacity} photo={hotel?.photo[0]}/>)} 
        </div>
    </div>
    )   
} 