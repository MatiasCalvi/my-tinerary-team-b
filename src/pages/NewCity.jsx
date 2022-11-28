import React from 'react'
import Input from '../components/Input';
import "../newcity.css"
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import toDoActions from '../redux/actions/toDoActions.js';
import alertActions from '../redux/actions/alertaCity';
import Swal from 'sweetalert2'

export default function CreateNewCity(props) {

    const cityNameImputElement = useRef(null)
    const continentimputElement = useRef(null);
    const photoImputElement = useRef(null);
    const populationImputElement = useRef(null);
    const adminImputElement = useRef(0);
    let [form,setForm]=useState({});
    let nav=useNavigate()
    
    let{id}=props
    console.log(id)


    let {newCity}=toDoActions
    let {alerta}=alertActions

    const dispatch= useDispatch()
    const {cities} = useSelector((state) => state.cities);


    let handleCreateCity = async (event) => {
        event.preventDefault();
        const data = {
            name: cityNameImputElement.current?.value,
            continent: continentimputElement.current?.value,
            photo: photoImputElement.current?.value,
            population: populationImputElement.current?.value
        };
        data.userId=id
        try{
            let res= await dispatch(newCity(data))
            if(res.payload.success){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                nav(`/detailsCities/:${res.payload.id}`)
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

    return (
    <div className='flex j-center a-center total bg '>
        <div className='flex P80 j-center a-center column'>
        <h1>Whant to add a City?</h1>

        <form className='flex column m20'>
            <div className='flex column g-10 '>
                <Input ref={cityNameImputElement} type='text' id='name' placeholder='City Name:'/>
                <Input ref={continentimputElement} type='text' id='lastName' placeholder='Continent:'/>
                <Input ref={photoImputElement} type='text' id='email' placeholder='photo url:'/>
                <Input ref={populationImputElement} type='text' id='population' placeholder='Population:'/>
                <div className='flex j-between'>
                    <input className='w-50 fs-2 input-form-newHotel' type="reset" value="Clear Form" />
                    <input className='w-50 fs-2 input-form-newHotel' onClick={handleCreateCity} type="submit" value="Submit" />
                </div>
            </div>
        </form>
        </div>
    </div>
  )


}