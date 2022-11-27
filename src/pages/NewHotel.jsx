import React from 'react'
import Input from '../components/Input';
import { useRef, } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../api/url';
import "../newcity.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import hotelActions from '../redux/actions/hotelActions.js';
import alertActions from '../redux/actions/alertaCity';
import Swal from 'sweetalert2'



export default function NewHotel() {
    const hotelNameImputElement = useRef(null)
    const photoImputElement = useRef(null);
    const capacityInputElement = useRef(null);
    const cityIdInputElement = useRef(null);
    const userIdImputElement = useRef(0);
    let [form,setForm]=useState({})

    let nav=useNavigate()

    let {newHotel}=hotelActions
    let {alerta}=alertActions

    const dispatch= useDispatch()
    const {hotels} = useSelector((state) => state.hotels);
    

    let handleCreateHotel = async (event) => {
        event.preventDefault();
        const data = {
            name: hotelNameImputElement.current?.value,
            photo: photoImputElement.current?.value,
            capacity: capacityInputElement.current?.value,
            cityId: cityIdInputElement.current?.value,
            userId: userIdImputElement.current?.value,
        };

        try{
            let res= await dispatch(newHotel(data))
            if(res.payload.success){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
                nav(`/detailsHotels/:${res.payload.id}`)
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
    <div className='flex j-center a-center total bg'>
        <div className='flex P80 j-center a-center column'>
        <h1>Whant to add a new hotel?</h1>

        <form className='flex column'>
            <div className='flex column g-10 '>
                <Input ref={hotelNameImputElement} type='text' id='hotelName' placeholder='Hotel Name:'/>
                <Input ref={photoImputElement} type='text' id='photo' placeholder='photo url:'/>
                <Input ref={capacityInputElement} type='text' id='Capacity' placeholder='Capacity:'/>
                <Input ref={cityIdInputElement} type='text' id='cityName' placeholder='City ID:'/>
                <Input ref={userIdImputElement} type='text' name='admin' value='' placeholder='admin code'/>
                <div className='flex j-between'>
                    <input className='w-50 fs-2' type="reset" value="Clear Form" />
                    <input className='w-50 fs-2' onClick={handleCreateHotel} type="submit" value="Submit" />
                </div>
            </div>
        </form>
        </div>
    </div>
  )


}
