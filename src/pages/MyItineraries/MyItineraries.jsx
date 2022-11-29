import React from 'react'
import "./myItineraries.css"
import { useDispatch,useSelector } from 'react-redux';
import itinerariesActions from '../../redux/actions/itinerariesActions';
import MyCitiesCard from '../../components/MyCitiesCard';
import { useState } from 'react';
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'
import Modal from '../../components/Modal/Modal'


export default function MyItineraries() {
    let {getItinerariesUser,getAndDestroy,getAndEdit}=itinerariesActions

    const dispatch= useDispatch()

    let [userId,setUserId]=useState('')

    const {itinariesAdmin} = useSelector((state) => state.itinerary);

    const [go, setGo] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    const [name, setName] = useState('');
    const [cityId,  setCityId] = useState('')
    const [photo, setPhoto] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState('');

    let { alerta } = alertActions


    let listenEditGO = (id) => {
        
        setGo(id)

    }

    let listenEdit = async (event) => {
            event.preventDefault()
        
            let data = { name,cityId,photo,price,description,duration}
        
            if (name === '' || cityId === '' || photo === '' || photo === null || description === '' || duration === '' || price === '') {
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
                dispatch(getItinerariesUser(userId))
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

      let listenDeleted= (id, e)=>{
        
        console.log(id)
        console.log(userId)

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
              'Your city has been deleted.',
              'success'
            )
            console.log(id)
            
           
                dispatch(getAndDestroy({ItineryId: id}))

                
                if (userId.length !== 24){
                    alert('el admin id es invalido')
                    dispatch(getItinerariesUser())
                }
                dispatch(getItinerariesUser(userId))
            }
            dispatch(getItinerariesUser(userId))
            })
    
            
      }

    let listenInput=()=>{

        if(userId.length != 24){
            alert('no se pudo')
        }else{
            dispatch(getItinerariesUser(userId))
        }
        
        
    }

    

    console.log(itinariesAdmin)
  return (<>
    <div className='inputSearch-mycities'>
        <input type="text"  onChange={e=>setUserId(e.target.value)}   placeholder="CodeAdmin..." />
        <button type='submit'
        className='save-new-button' onClick={listenInput}>
            send adminCode
         </button> 
    </div>
    <div className='container-mycities'>
         { itinariesAdmin!==undefined 
          ? itinariesAdmin.map(e=><MyCitiesCard key={e._id} name={e.name} event1={listenDeleted} event2={()=> setIsOpen(true)} go={listenEditGO} id={e._id} img={e.photo[0]} />)
          : <h2>No hay Resultados</h2> } 
    </div>
    <Modal editId={go} open={isOpen} onClose={()=> setIsOpen(false)}>
    <div className='edit-form-container' >
      <input htmlFor='name' className='new-input input' name='name' type="text"
        placeholder='Enter city name' required 
        onChange={(e) => setName(e.target.value)} />
        <input htmlFor='cityId' className='new-input input' name='cityId' type="text"
        placeholder='Enter Itinerary CityID' required 
        onChange={(e) => setCityId(e.target.value)} />
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
  </>)
}
