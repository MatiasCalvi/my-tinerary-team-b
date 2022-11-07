import React from 'react'
import Input from '../components/Input';
import { Link as Navlink } from 'react-router-dom';
import '../Signiu.css';
import { useRef } from 'react';


export default function SignUp() {

    const nameImputElement = useRef(null)
    const lastNameImputElement = useRef(null)
    const emailInputElement = useRef(null);
    const passwordInputElement = useRef(null);
    

    let handleSignUp = (event) => {
    event.preventDefault();
        const data = {
            name: nameImputElement.current?.value,
            lastName: lastNameImputElement.current?.value,
            email: emailInputElement.current?.value,
            password: passwordInputElement.current?.value
        };

    localStorage.setItem('user-registered', JSON.stringify(data))

    alert("You are signed up!")

    nameImputElement.current.value=''
    lastNameImputElement.current.value=''
    emailInputElement.current.value=''
    passwordInputElement.current.value=''

    event.target.reset()
    
    }

    return (
    <div className='flex jc-center column al-item-c form-h'>
        <h1>Sign Up</h1>
        <form className='flex column al-item-c g-10'>
            <div className='c-form-inputs flex column g-10'>
                <Input ref={nameImputElement} type='text' id='name' placeholder='Name:'/>
                <Input ref={lastNameImputElement} type='text' id='lastName' placeholder='Last Name:'/>
                <Input ref={emailInputElement} type='email' id='email' placeholder='Email:'/>
                <Input ref={passwordInputElement} type='password' id='password' placeholder='Password:'/>
                <div className='flex ac-spabet'>
                <button type='submit' onClick={handleSignUp} className='SU-buttons'>Sign Up</button>
                <h6>or</h6>
                <Navlink to="#"><button>Register with Google</button></Navlink>
                </div>
            </div>
            <div className='flex column g-10'>
                <p>Have an account already?</p>
                <Navlink to='/signin'><button >Sign In</button></Navlink>
            </div>
        </form>
    </div>
  )
}