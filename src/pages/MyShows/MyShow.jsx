import React from 'react'
import "./MyShow.css"
import { useDispatch,useSelector } from 'react-redux';
import showActions from '../../redux/actions/showActions';
import MyHotelsCard from '../../components/MyHotelsCard';
import { useState, useRef , useEffect } from 'react';
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'
import Modal from '../../components/modals/ModalsHotel'
import hotelActions from "../../redux/actions/hotelActions"


export default function MyShow(props) {
    let {getShowsUser,getAndDestroy,getAndEdit,showCreator}=showActions
    let {getHotels}=hotelActions

    let {id}=props
    let form = useRef()

    console.log(id)

    const dispatch= useDispatch()

    const {showUsers} = useSelector((state) => state.shows);
    const {hotels} = useSelector((state) => state.hotels);
    
    
    const [go, setGo] = useState('')
    let [hotel,setHotel]=useState('')
    
    const [isOpen, setIsOpen] = useState(false)

    const [name, setName] = useState('');
    const [hotelId,  setHotelId] = useState('')
    const [photo, setPhoto] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    let { alerta } = alertActions
    
    async function get(){
      await dispatch(getShowsUser(id))
    } 

    useEffect(()=>{
      get()
    },[])

    async function obtainHotels(){
      await dispatch(getHotels())
    } 

    useEffect(()=>{
      obtainHotels()
    },[])


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
                dispatch(getShowsUser(id))
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

    let listenDeleted= (idd)=>{
      

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
          
         
              dispatch(getAndDestroy({id: idd}))
              dispatch(getShowsUser(id))
          }
          dispatch(getShowsUser(id))
          })
  
          
    }


    let a=(e)=>{

      setHotel(e.target.value)
  
      console.log(e.target.value)
  }

  console.log(hotel)

  async function creation (event) {
    event.preventDefault()
    console.log(hotel)
    console.log(id)
    let data = {}
    Array.from(form.current).forEach(input=>{
        if(input.name) {
            data[input.name] = input.value.trim()
        }
       
    })
    if(hotel){
      data.hotelId=hotel;
    }else{
      data.hotelId=hotel[0]._id  
    }
    
    data.userId=id;
    try{
        const res = await dispatch(showCreator(data))
        if(res.payload.success){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Created',
                showConfirmButton: false,
                timer: 1500
              })
           event.target.reset()
           dispatch(getShowsUser(id))
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




console.log(showUsers)


  return (<>

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
    <div className='flex j-center a-center total bg column'>

    <h1 className='new-title-SignUp'>Create Shows</h1>
    <form onSubmit={creation} ref={form} className='New-container'>
            <select className='New-text' onClick={a}>
              { hotels.map(e=><option className='New-text' name={e.name} value={e._id}>{e.name}</option>) }
            </select>
            <input type='text' name='name' placeholder='Enter name' className='New-text'/>
            <input type='text' name='photo' placeholder='Enter photo' className='New-text'/>
            <input type='text' name='description' placeholder='Enter description of the show' className='New-text'/>
            <input type='number' name='price' placeholder='Enter price of the show' className='New-text'/>
            <input type='date' name='date' placeholder='Enter date of the show' className='New-text'/>
            <input type="submit" className='New-title-Submit' required value='register!' />
    </form>
            
    </div>
    
  </>)
}