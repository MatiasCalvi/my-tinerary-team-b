import React from 'react'
import Input from '../components/Input';
import { Link as Navlink } from 'react-router-dom';
import '../Signiu.css';
import { useRef } from 'react';
import "../newcity.css"
import { useDispatch } from 'react-redux';
import alertActions from '../redux/actions/alertaCity';
import Swal from 'sweetalert2'
import Modal from '../components/Modal/Modal'
import usersActions from '../redux/actions/usersActions';
import { useState } from 'react';

export default function BoxSignUp() {

    let form = useRef()
    let [state,setState]=useState()
    let dispatch = useDispatch()
    let { alerta } = alertActions

    let { userCreation } = usersActions 
    

      async function register (event) {
        
        event.preventDefault()
        console.log(event)
        let data = {}
        Array.from(form.current).forEach(input=>{
            if(input.name) {
                data[input.name] = input.value.trim()
            }
        })
        data.role='user'
        try{
            const res = await dispatch(userCreation(data))
            if(res.payload.success){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Created',
                    showConfirmButton: false,
                    timer: 1500
                  })
               event.target.reset()
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
    return (
    <div className='flex j-center a-center total bg column'>

        <h1 className='new-title-SignUp'>Sign Up</h1>
        <form onSubmit={register} ref={form} className='New-container'>
                <input type='text' name='name' placeholder='Enter your name' className='New-text'/>
                <input type='text' name='lastName' placeholder='Enter your lastname' className='New-text'/>
                <input type='text' name='photo' placeholder='Enter your photo' className='New-text'/>
                <input type='number' name='age' placeholder='Enter your age' className='New-text'/>
                <input type='mail' name='email' placeholder='Enter your e-mail' className='New-text'/>
                <input type='password' name='password' placeholder='Enter your password' className='New-text'/>
                <input type="submit" className='New-title-Submit' required value='register!' />
        </form>
                
    </div>
  )
}