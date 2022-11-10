import React from 'react'
import Input from '../components/Input';
import { Link as Navlink } from 'react-router-dom';
import { useRef } from 'react';
import "../newcity.css"

export default function BoxSignIn() {

    const emailInputElement = useRef(null);
    const passwordInputElement = useRef(null);
    
    let handleSubmit = (event) => {
    event.preventDefault();
        const data = {
            email: emailInputElement.current?.value,
            password: passwordInputElement.current?.value
        };

    localStorage.setItem('user-access', JSON.stringify(data))

    alert("Welcome to MyTinerary!")

    emailInputElement.current.value=''
    passwordInputElement.current.value=''
    }

    return (
    <div className='flex j-center a-center total bg column'>
        <h1>Log In</h1>
        <form className='flex column g-10'>
            <div className='flex column g-10'>
                <Input ref={emailInputElement} type='email' placeholder='Email:'/>
                <Input ref={passwordInputElement} type='password' placeholder='Password:'/>
            </div>
            <div className='c-form-form-signIn-buttons'>
                <button type='submit' onClick={handleSubmit} className='c-access'>Sign In</button>
                <p>Don't have an account yet?</p>
                <Navlink to='/signup'><button >Register now</button></Navlink>
                <h6>or</h6>
                <Navlink to="#"><button>Access with Google</button></Navlink>
            </div>
        </form>
    </div>
  )
}