import React from 'react'
import Input from '../components/Input';
import { useRef,useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../api/url';
import "../newcity.css"



export default function NewHotel() {
    const hotelNameImputElement = useRef(null)
    const photoImputElement = useRef(null);
    const capacityInputElement = useRef(null);
    const cityIdInputElement = useRef(null);
    const userIdImputElement = useRef(0);
    let [form,setForm]=useState({})
    

    let handleCreateHotel = async (event) => {
    event.preventDefault();
        const data = {
            name: hotelNameImputElement.current?.value,
            photo: photoImputElement.current?.value,
            capacity: capacityInputElement.current?.value,
            cityId: cityIdInputElement.current?.value,
            userId: userIdImputElement.current?.value,
        };

        axios.post((`${BASE_URL}/hotels`),data)
        .then(respon=>console.log(respon))
        .catch(err=>{console.log(err)})
    
    }

    return (
    <div className='flex j-center a-center total bg formContainer-newHotels'>
        <div className='flex P80 j-center a-center column'>
        <h1>Whant to add a new hotel?</h1>

        <form className='flex column m20'>
            <div className='flex column g-10 '>
                <Input ref={hotelNameImputElement}  type='text' id='hotelName' placeholder='Hotel Name:'/>
                <Input ref={cityIdInputElement}  type='text' id='cityName' placeholder='City Name:'/>
                <Input ref={photoImputElement}  type='text' id='photo' placeholder='photo url:'/>
                <Input ref={capacityInputElement}  type='text' id='Capacity' placeholder='Capacity:'/>
                <Input ref={userIdImputElement}  type='text' name='admin' value='' placeholder='admin code'/>
                <div className='flex j-between'>
                    <input className='w-50 fs-2 input-form-newHotel' type="reset" value="Clear Form" />
                    <input className='w-50 fs-2 input-form-newHotel' onClick={handleCreateHotel} type="submit" value="Submit" />
                </div>
            </div>
        </form>
        </div>
    </div>
  )


}
