import React from 'react'
import Input from '../components/Input';
import "../newcity.css"
import { useRef,useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {BASE_URL} from '../api/url';

export default function CreateNewCity() {

    const cityNameImputElement = useRef(null)
    const continentimputElement = useRef(null);
    const photoImputElement = useRef(null);
    const populationImputElement = useRef(null);
    const adminImputElement = useRef(0);
    let [form,setForm]=useState({});

    console.log(form)

    let handleCreateCity = async (event) => {
    event.preventDefault();
        const data = {
            name: cityNameImputElement.current?.value,
            continent: continentimputElement.current?.value,
            photo: photoImputElement.current?.value,
            population: populationImputElement.current?.value,
            userId: adminImputElement.current?.value
        };
    
        axios.post((`${BASE_URL}/cities`),data)
        .then(respon=>console.log(respon))
        .catch(err=>{console.log(err)})
    }

    return (
    <div className='flex j-center a-center total bg'>
        <div className='flex P80 j-center a-center column'>
        <h1>Whant to add a City?</h1>

        <form className='flex column'>
            <div className='flex column '>
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
    </div>
  )


}