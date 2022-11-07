import React from 'react'
import Input from '../components/Input';
import "../newcity.css"
import { useRef } from 'react';


export default function CreateNewCity() {

    const cityNameImputElement = useRef(null)
    const continentimputElement = useRef(null);
    const photoImputElement = useRef(null);
    const populationImputElement = useRef(null);
    const adminImputElement = useRef(null);
    

    let handleCreateCity = (event) => {
    event.preventDefault();
        const data = {
            name: cityNameImputElement.current?.value,
            continent: continentimputElement.current?.value,
            photo: photoImputElement.current?.value,
            population: populationImputElement.current?.value,
            admin: adminImputElement.current?.value,
        };

    localStorage.setItem('new-city', JSON.stringify(data))

    alert("You have submited a city!")

    cityNameImputElement.current.value=''
    continentimputElement.current.value=''
    photoImputElement.current.value=''
    populationImputElement.current.value=''
    adminImputElement.current.value=''

    event.target.reset()
    
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
                <div >
                    <h2>Access your admin code to proceed </h2>
                    <Input ref={cityNameImputElement} type='text' name='admin' value='' placeholder='admin code'/>
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