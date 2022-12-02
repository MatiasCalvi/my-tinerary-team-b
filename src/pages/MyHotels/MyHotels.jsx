import React from 'react'
import "./MyHotels.css"
import { useDispatch,useSelector } from 'react-redux';
import MyHotelsCard from '../../components/MyHotelsCard';
import { useState, useEffect } from 'react';
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/ModalsHotel'
import hotelsActions from '../../redux/actions/hotelActions';



export default function MyHotels(props) {
    let {getHotelUser,getAndDestroy,getAndEdit}=hotelsActions
    const dispatch= useDispatch()

    let {id}=props
    console.log(id)
    /* let [userId,setUserId]=useState('') */

    const {hotelAdmin} = useSelector((state) => state.hotels);
   
    /* console.log(userId) */
    const [go, setGo] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [capacity,  setCapacity] = useState('')
    const [user, setUser] = useState('');

    let { alerta } = alertActions

    async function get(){
      await dispatch(getHotelUser(id))
    } 

    useEffect(()=>{
      get()
    },[])


    let listenEditGO = (id) => {
        
        setGo(id)

    }

    let listenEdit = async (event) => {
            event.preventDefault()
        
            let data = { name,capacity,photo,user}
        
            if (name === '' || capacity === '' || photo === '' || photo === null || user === '') {
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
                  title: `${name} hotel has been updated`,
                  imageUrl: photo,
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: 'image',
                })
                setIsOpen(false)
                dispatch(getHotelUser(id))
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

      let Delete= (idd)=>{
        
        console.log(id)
        console.log(id)

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
              'Your hotel has been deleted.',
              'success'
            )
            console.log(id)
            
           
                dispatch(getAndDestroy({id: idd }))
                
                    dispatch(getHotelUser(id))
            
            }
                dispatch(getHotelUser(id))
            })
    
            
      }

  return (<>

    <div className='container-mycities'>
         { hotelAdmin!==undefined 
          ? hotelAdmin.map(e=><MyHotelsCard key={e._id} name={e.name} event1={Delete} event2={()=> setIsOpen(true)} go={listenEditGO} id={e._id} img={e.photo}/>)
          : <h2>no result</h2> } 
    </div>
    <Modal editId={go} open={isOpen} onClose={()=> setIsOpen(false)}>
    <div className='edit-form-container' >
      <input htmlFor='title' className='new-input input' name='title' type="text"
        placeholder='Enter Hotel name' required 
        onChange={(e) => setName(e.target.value)} />
        
        <input htmlFor='image' className='new-input input' name='image' type="text"
        placeholder='Enter hotel photo' required 
        onChange={(e) => setPhoto(e.target.value)} />
        <input htmlFor='capacity' className='new-input input' name='capacity' type="text"
        placeholder='Enter hotel capacity' required 
        onChange={(e) => setCapacity(e.target.value)} />
        <input htmlFor='user' className='new-input input' name='user' type="userID" min="0"
        placeholder='Enter user ID' required
        onChange={(e) => setUser(e.target.value)} />
        <button type='submit'
        className='edit-new-button input' onClick={listenEdit}>
            Save
            </button>  
      </div>
    </Modal>
  </>)
}