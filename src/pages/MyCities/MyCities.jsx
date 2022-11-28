import React from 'react'
import "./MyCities.css"
import { useDispatch,useSelector } from 'react-redux';
import toDoActions from '../../redux/actions/toDoActions';
import MyCitiesCard from '../../components/MyCitiesCard';
import { useState,useRef,useEffect } from 'react';
import Input from '../../components/Input';
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'
import Modal from '../../components/Modal/Modal'


export default function MyCities(props) {
    let {getCitiesUser,getAndDestroy,getAndEdit}=toDoActions
    const dispatch= useDispatch()

    let [userId,setUserId]=useState('')
    let {id}=props

    console.log(id)

    const {citiesAdmin} = useSelector((state) => state.cities);

    const [go, setGo] = useState('')

    const [isOpen, setIsOpen] = useState(false)

    const [name, setName] = useState('');
    const [continent,  setContinent] = useState('')
    const [photo, setPhoto] = useState('');
    const [population, setPopulation] = useState('');

    let { alerta } = alertActions

    async function get(){
      await dispatch(getCitiesUser(id))
    }
    
    useEffect(()=>{
      get()
    },[])

    let listenEditGO = (id) => {
        
        setGo(id)

    }

    let listenEdit = async (event) => {
            event.preventDefault()
        
            let data = { name,continent,photo,population}
        
            if (name === '' || continent === '' || photo === '' || photo === null || population === '') {
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
                dispatch(getCitiesUser(id))
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

      let listenDeleted= (idCities, e)=>{
        
        console.log(idCities)
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
              'Your city has been deleted.',
              'success'
            )
            console.log(id)
            
           
                dispatch(getAndDestroy({cityId: idCities}))
                dispatch(getCitiesUser(id))
            }
            dispatch(getCitiesUser(id))
            })
    
            
      }
    

    console.log(citiesAdmin)
  return (<>
    {/* <div className='inputSearch-mycities'>
        <input type="text"  onChange={e=>setUserId(e.target.value)}   placeholder="CodeAdmin..." />
        <button type='submit'
        className='save-new-button' onClick={listenInput}>
            send adminCode
         </button> 
    </div> */}
    <div className='container-mycities'>
         { citiesAdmin!==undefined 
          ? citiesAdmin.map(e=><MyCitiesCard key={e._id} name={e.name} event1={listenDeleted} event2={()=> setIsOpen(true)} go={listenEditGO} id={e._id} img={e.photo}/>)
          : <h2>No hay Resultados</h2> } 
    </div>
    <Modal editId={go} open={isOpen} onClose={()=> setIsOpen(false)}>
    <div className='edit-form-container' >
      <input htmlFor='title' className='new-input input' name='title' type="text"
        placeholder='Enter city name' required 
        onChange={(e) => setName(e.target.value)} />
        
        <input htmlFor='image' className='new-input input' name='image' type="text"
        placeholder='Enter city photo' required 
        onChange={(e) => setPhoto(e.target.value)} />
        <input htmlFor='continent' className='new-input input' name='continent' type="text"
        placeholder='Enter city continent' required 
        onChange={(e) => setContinent(e.target.value)} />
        <input htmlFor='population' className='new-input input' name='population' type="number" min="0"
        placeholder='Enter city population' required
        onChange={(e) => Number(setPopulation(e.target.value))} />
        <button type='submit'
        className='edit-new-button input' onClick={listenEdit}>
            Save
            </button>  
      </div>
    </Modal>
  </>)
}
