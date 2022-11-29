import React from 'react'
import "./myItineraries.css"
import { useDispatch,useSelector } from 'react-redux';
import itinerariesActions from '../../redux/actions/itinerariesActions';
import MyCitiesCard from '../../components/MyCitiesCard';
import { useState,useRef } from 'react';
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'
import Modal from '../../components/Modal/Modal'
import { useEffect } from 'react';
import toDoActions from '../../redux/actions/toDoActions.js';


export default function MyItineraries(props) {

    let {getItinerariesUser,getAndDestroy,getAndEdit,itineraryCreation}=itinerariesActions

    let {getCities}=toDoActions
    
    let {id}=props
    let form = useRef()

    console.log(id)

    const dispatch= useDispatch()

    const {itinariesAdmin} = useSelector((state) => state.itinerary);
    const {cities} = useSelector((state) => state.cities);
    let {token}= useSelector((token)=>token.usuario)

    console.log(token)

    const [go, setGo] = useState('')
    let [cityIdGO,setCityIdGO]= useState('')
    let [city,setCity]=useState('')

    const [isOpen, setIsOpen] = useState(false)

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');

    let { alerta } = alertActions

    async function get(){
      await dispatch(getItinerariesUser(id))
    } 

    useEffect(()=>{
      get()
    },[])

    async function getCitiesF(){
      await dispatch(getCities())
    } 

    useEffect(()=>{
      getCitiesF()
    },[])
    

    let listenEditGO = (id) => {
        
        setGo(id)

    }

    let cityIdGo=(cityId)=>{
      setCityIdGO(cityId)
    }

    let listenEdit = async (event) => {
            event.preventDefault()
            let cityid=cityIdGO
           

            let data = {token, itinerary: {name,cityid,photo,price,description,duration}}
            
            
            if (name === '' || photo === '' || photo === null || description === '' || duration === '' || price === '') {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must complete all fields !',
              })
            } else {
              
              
            try {
              let res = await dispatch(getAndEdit({go, data}))
              console.log(res.payload.success)
              if (res.payload.success){
                Swal.fire({
                  title: `${name} city has been updated`,
                  imageUrl: photo,
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: 'image',
                })
                setIsOpen(false)
                dispatch(getItinerariesUser(id))
              } else {
                dispatch(alerta(
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.payload.response,
                  })))
        
        
              }
        
            } catch(error) {
              console.log(error.message)
            }
          }

    }

      let listenDeleted= (idItinerary, e)=>{
        
        let ItineryId=idItinerary
        
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your Itinerary has been deleted.',
              'success'
            )
            console.log(id)
            
           
                dispatch(getAndDestroy({ItineryId,token}))
                dispatch(getItinerariesUser(id))
              
                
            }
              dispatch(getItinerariesUser(id))  
          })
    
      }
      
      let a=(e)=>{

          setCity(e.target.value)
      
      }
      
      

      async function creation (event) {

        event.preventDefault()
    
        let data = {}
        Array.from(form.current).forEach(input=>{
            if(input.name) {
                data[input.name] = input.value.trim()
            }
           
        })
        if(city){
          data.cityId=city;
        }else{
          data.cityId=cities[0]._id  
        }
        
        data.userId=id;
        
        try{
            const res = await dispatch(itineraryCreation({data,token}))
            if(res.payload.success){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
               event.target.reset()
               dispatch(getItinerariesUser(id))
            }
            else{
               
                dispatch(alerta(Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.payload.response,
                  })))
                  console.log(res)
            }
        }
        catch(error){

            console.log(error)
        }
        
        console.log(data)
    }
    


    
  return (<>
    <div className='container-mycities'>
         { itinariesAdmin!==undefined 
          ? itinariesAdmin.map(e=><MyCitiesCard key={e._id} cityId={e.cityId} name={e.name} event1={listenDeleted} event2={()=> setIsOpen(true)} go={listenEditGO} cityIdGo={cityIdGo} id={e._id} img={e.photo[0]} />)
          : <h2>No hay Resultados</h2> } 
    </div>
    <Modal editId={go} open={isOpen} onClose={()=> setIsOpen(false)}>
    <div className='edit-form-container' >
      <input htmlFor='name' className='new-input input' name='name' type="text"
        placeholder='Enter city name' required 
        onChange={(e) => setName(e.target.value)} />
        <input htmlFor='photo' className='new-input input' name='photo' type="text"
        placeholder='Enter Itinerary photos' required 
        onChange={(e) => setPhoto(e.target.value)} />
        <input htmlFor='price' className='new-input input' name='price' type="number"
        placeholder='Enter Itinerary price' required 
        onChange={(e) =>Number(setPrice(e.target.value))} />
        <input htmlFor='description' className='new-input input' name='description' type="text" min="0"
        placeholder='Enter Itinerary description' required
        onChange={(e) => setDescription(e.target.value)} />
        <input htmlFor='duration' className='new-input input' name='duration' type="number"
        placeholder='Enter Itinerary duration' required 
        onChange={(e) =>Number(setDuration(e.target.value))} />
        <button type='submit'
        className='edit-new-button input' onClick={listenEdit}>
            Save
            </button>  
      </div>
    </Modal>
    <div className='flex j-center a-center total bg column'>

        <h1 className='new-title-SignUp'>Create Itinerary</h1>
        <form onSubmit={creation} ref={form} className='New-container'>
                <select className='New-text' onClick={a}>
                  { cities.map(e=><option className='New-text' name={e.name} value={e._id}>{e.name}</option>) }
                </select>
                <input type='text' name='name' placeholder='Enter name' className='New-text'/>
                <input type='text' name='photo' placeholder='Enter photo' className='New-text'/>
                <input type='text' name='description' placeholder='Enter description of itinerary' className='New-text'/>
                <input type='number' name='price' placeholder='Enter price of itinerary' className='New-text'/>
                <input type='number' name='duration' placeholder='Enter duration of itinerary' className='New-text'/>
                <input type="submit" className='New-title-Submit' required value='register!' />
        </form>
                
    </div>
  </>)
}
