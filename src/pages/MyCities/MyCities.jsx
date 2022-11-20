import React from 'react'
import "./MyCities.css"
import { useDispatch,useSelector } from 'react-redux';
import toDoActions from '../../redux/actions/toDoActions';
import MyCitiesCard from '../../components/MyCitiesCard';
import { useState,useRef } from 'react';
import Input from '../../components/Input';
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'

export default function MyCities() {
    let {getCitiesUser,EditCity}=toDoActions
    const dispatch= useDispatch()

    let {alerta}=alertActions

    let [boton,setBoton]=useState('')
    const cityNameImputElement = useRef(null)
    const continentimputElement = useRef(null);
    const photoImputElement = useRef(null);
    const populationImputElement = useRef(null);
    const adminImputElement = useRef(0);
    let [id,setId]=useState("")

    
    const {cities} = useSelector((state) => state.cities);

    let listenEdit=(id,e)=>{

        setId(id) 
    }

    let listenDeleted=()=>{
        console.log("chau")
    }

    let listenInput=()=>{

        if(boton.length != 24){
            alert('no se pudo')
        }else{
            dispatch(getCitiesUser({userId:boton}))
        }
        
        
    }

    let handleCreateCity = async (event) => {
        event.preventDefault();
        console.log(id)
        const data = {
            name: cityNameImputElement.current?.value,
            continent: continentimputElement.current?.value,
            photo: photoImputElement.current?.value,
            population: populationImputElement.current?.value,
            userId: adminImputElement.current?.value
        };
        try{
            let res= await dispatch(EditCity({id,data}))
            if(res.payload.success){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            else{
               
                dispatch(alerta(Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.payload.response,
                  })))
            }
        }
        catch(error){

            console.log(error)
        }
    }

    console.log(cities)
  return (<>
    <div className='inputSearch-mycities'>
        <input type="text"  onChange={e=>setBoton(e.target.value)}   placeholder="CodeAdmin..." />
        <button type='submit'
        className='save-new-button' onClick={listenInput}>
            send adminCode
         </button> 
    </div>
    <div className='container-mycities'>
         { cities.map(e=><MyCitiesCard name={e.name} event1={listenEdit} id={e._id} img={e.photo}/>)} 
    </div>
    <div className='containerForm-mycities'>
        <form className='form-mycities'>
                <div className='flex column'>
                    <Input ref={cityNameImputElement} type='text' id='name' placeholder='City Name:'/>
                    <Input ref={continentimputElement} type='text' id='lastName' placeholder='Continent:'/>
                    <Input ref={photoImputElement} type='text' id='email' placeholder='photo url:'/>
                    <Input ref={populationImputElement} type='text' id='population' placeholder='Population:'/>
                    <Input ref={adminImputElement} type='text' id='userId' placeholder='AdminCode:'/>
                    <div className='flex j-between'>
                        <input className='w-50 fs-2' type="reset" value="Clear Form" />
                        <input className='w-50 fs-2' onClick={handleCreateCity} type="submit" value="Submit" />
                    </div>
                </div>
        </form>
    </div>
  </>)
}
