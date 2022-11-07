import React from 'react'
import Input from '../components/Input';
import { useRef } from 'react';
import "../newcity.css"


export default function NewHotel() {
    const hotelNameImputElement = useRef(null)
    const cityInputElement = useRef(null);
    const photoImputElement = useRef(null);
    const capacityInputElement = useRef(null);
    const adminImputElement = useRef(null);
    

    let handleCreateCity = (event) => {
    event.preventDefault();
        const data = {
            name: hotelNameImputElement.current?.value,
            continent: cityInputElement.current?.value,
            photo: photoImputElement.current?.value,
            population: capacityInputElement.current?.value,
            admin: adminImputElement.current?.value,
        };

    localStorage.setItem('new-hotel', JSON.stringify(data))

    alert("You have submited a city!")

    hotelNameImputElement.current.value=''
    cityInputElement.current.value=''
    photoImputElement.current.value=''
    capacityInputElement.current.value=''
    adminImputElement.current.value=''

    event.target.reset()
    
    }

    return (
    <div className='flex j-center a-center total bg'>
        <div className='flex P80 j-center a-center column'>
        <h1>Whant to add a new hotel?</h1>

        <form className='flex column'>
            <div className='flex column g-10 '>
                <Input ref={hotelNameImputElement} type='text' id='hotelName' placeholder='Hotel Name:'/>
                <Input ref={cityInputElement} type='text' id='cityName' placeholder='City Name:'/>
                <Input ref={photoImputElement} type='text' id='photo' placeholder='photo url:'/>
                <Input ref={capacityInputElement} type='text' id='Capacity' placeholder='Capacity:'/>
                <div >
                    <h2>Access your admin code to proceed </h2>
                    <Input ref={hotelNameImputElement} type='text' name='admin' value='' placeholder='admin code'/>
                </div>
                <div className='flex j-between'>
                    <input className='w-50 fs-2' type="reset" value="Clear Form" />
                    <input className='w-50 fs-2' onClick={handleCreateCity} type="submit" value="Submit" />
                </div>
            </div>
        </form>
        </div>
    </div>
  )


}
