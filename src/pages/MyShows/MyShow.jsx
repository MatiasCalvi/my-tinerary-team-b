import React from 'react'
import "./MyShow.css"
import { useDispatch,useSelector } from 'react-redux';
import showActions from '../../redux/actions/showActions';
import MyHotelsCard from '../../components/MyHotelsCard';
import { useState } from 'react';
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/ModalsHotel'


export default function MyShow() {
    let {getShowsUser,getAndDestroy,getAndEdit}=showActions

    const dispatch= useDispatch()

    let [userId,setUserId]=useState('')

    const {showUsers} = useSelector((state) => state.shows);

    const [go, setGo] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    const [name, setName] = useState('');
    const [hotelId,  setHotelId] = useState('')
    const [photo, setPhoto] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    let { alerta } = alertActions


    let listenEditGO = (id) => {
        
        setGo(id)

    }

    let listenEdit = async (event) => {
            event.preventDefault()
        
            let data = { name,hotelId,photo,price,description,date}
        
            if (name === '' || hotelId === '' || photo === '' || photo === null || description === '' || date === '' || price === '') {
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
                  title: `${name} show has been updated`,
                  imageUrl: photo,
                  imageWidth: 400,
                  imageHeight: 200,
                  imageAlt: 'image',
                })
                setIsOpen(false)
                dispatch(getShowsUser(userId))
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

      let listenDeleted= (id)=>{
        

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
              'Your show has been deleted.',
              'success'
            )
            console.log(id)
            
           
                dispatch(getAndDestroy({id: id}))

                
                if (userId.length !== 24){
                    alert('invalid admin')
                    dispatch(getShowsUser())
                }
                dispatch(getShowsUser(userId))
            }
            dispatch(getShowsUser(userId))
            })
    
            
      }

    let listenInput=()=>{

        if(userId.length !== 24){
            alert('rejected')
        }else{
            dispatch(getShowsUser(userId))
        }
        
        
    }

    

    console.log(showUsers)
  return (<>
    <div className='inputSearch-mycities'>
        <input type="text"  onChange={e=>setUserId(e.target.value)}   placeholder="CodeAdmin..." />
        <button type='submit'
        className='save-new-button' onClick={listenInput}>
            send user code
         </button> 
    </div>
    <div className='container-mycities'>
         { showUsers!==undefined 
          ? showUsers.map(e=><MyHotelsCard key={e._id} name={e.name} event1={listenDeleted} event2={()=> setIsOpen(true)} go={listenEditGO} id={e._id} img={e.photo} />)
          : <h2>No Results</h2> } 
    </div>
    <Modal editId={go} open={isOpen} onClose={()=> setIsOpen(false)}>
    <div className='edit-form-container' >
      <input htmlFor='name' className='new-input input' name='name' type="text"
        placeholder='Enter show name' required 
        onChange={(e) => setName(e.target.value)} />
        <input htmlFor='showId' className='new-input input' name='showId' type="text"
        placeholder='Enter the show HotelID' required 
        onChange={(e) => setHotelId(e.target.value)} />
        <input htmlFor='photo' className='new-input input' name='photo' type="text"
        placeholder='Enter show photos' required 
        onChange={(e) => setPhoto(e.target.value)} />
        <input htmlFor='price' className='new-input input' name='price' type="number"
        placeholder='Enter show price' required 
        onChange={(e) =>Number(setPrice(e.target.value))} />
        <input htmlFor='description' className='new-input input' name='description' type="text" min="0"
        placeholder='Enter show description' required
        onChange={(e) => setDescription(e.target.value)} />
        <input htmlFor='date' className='new-input input' name='date' type="date"
        placeholder='Enter show date' required 
        onChange={(e) =>Number(setDate(e.target.value))} />
        <button type='submit'
        className='edit-new-button input' onClick={listenEdit}>
            Save
            </button>  
      </div>
    </Modal>
  </>)
}