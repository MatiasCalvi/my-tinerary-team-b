import React from 'react'
import Input from '../components/Input';
import { Link as Navlink } from 'react-router-dom';
import { useRef } from 'react';

export default function BoxSignUp() {

    const emailInputElement = useRef(null);
    const passwordInputElement = useRef(null);
    
    let handleSubmit = (event) => {
    event.preventDefault();
        const data = {
            email: emailInputElement.current?.value,
            password: passwordInputElement.current?.value
        };

    localStorage.setItem('user-registered', JSON.stringify(data))

    alert("Welcome to MyTinerary!")

    emailInputElement.current.value=''
    passwordInputElement.current.value=''
    }

    return (
    <div className='c-form-signIn'>
        <h1>Log In</h1>
        <form className='c-form-form-signIn'>
            <div className='c-form-inputs'>
                <Input ref={emailInputElement} type='email' placeholder='Email:'/>
                <Input ref={passwordInputElement} type='password' placeholder='Password:'/>
            </div>
            <div className='c-form-form-signIn-buttons'>
                <button type='submit' onClick={handleSubmit} className='c-access'>Sign In</button>
                <p>Don't have an account yet?</p>
                <Navlink to='/signUp'><button >Register now</button></Navlink>
                <h6>or</h6>
                <Navlink to="#"><button>Access with Google</button></Navlink>
            </div>
        </form>
    </div>
  )
}