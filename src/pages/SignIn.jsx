
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'

import Swal from "sweetalert2";
import userActions from '../redux/actions/userActions'

function SignIn() {
let dispatch = useDispatch()
let navigate = useNavigate()


  let {enter}=userActions
  let form = useRef()


  async function singIn(event) {
    event.preventDefault()
    let data = {}
    Array.from(form.current).forEach(input=>{
        if(input.name) {
            data[input.name] = input.value.trim()
            console.log(data);
        }
    })
    try {
        let res = await dispatch(enter(data))
        console.log(res)
        if (res.payload.success) {
            console.log(res);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Welcome" + " " + res.payload.response.user.name,
                showConfirmButton: false,
                timer: 2000
              })
              navigate(`/`)

        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Enter valid credentials or verify your email',
                footer: 'Try Again'
              })
        }
    } catch(error) {
        console.log(error.message)
    }
}

    

  return (<>
    <div className='cute-input-container'>
        <div className='bg-next'>
{/*             <h2>Viajes</h2> */}
        </div>
        <div className='container-input'>
        <h2 className='text-sign'>Welcome Again!</h2>
        <div className='img-circle'></div>
                <form onSubmit={singIn} ref={form}>
                    <div className='container-input-box'>
                        <label htmlFor="email">
                            <div className='input-space'>
                                <input className='input-signup' name='email' id='email' placeholder='Email' type='email'></input>
                            </div>
                        </label>
                        <hr />
                        <label htmlFor='password'>
                            <div className='input-space'>
                                <input className='input-signup' name='password' id='password' placeholder='Password' type='password'></input>
                            </div>
                        </label>
                        <hr />
                        <button type='submit' className="button-signup">Sign In</button>
                        <button className='btn-google'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAepJREFUSEvlVu1NAkEUnAl7Cf/UCoQOsAK1AzoQK1A6gArUCsQKtAO1A+gAK5CfJLvkmbeHgWN37w7UEOL7B/d2533OLLEn455wcXjAkmUdrRatHe9StdoZizEXELkC2QVwXAATmYJ8gTEPnM+ndQKpBPaZidwBuKhzIURGWCz6BGZl/qXAkmW9JWgxw+oIZnCuXQaeBF6CPlZjRDzIa1o72jrjZXlfg17mN01AjqF9ze3Y913k1P+qAerdYlGJMW8AziPfhnRukDgzADmtyvT7bAAsjUYX5HNwOXm26+rEAg2Bs2zk12bdyD6tvd+p34lDIbAxugZHa/4TOufJ4jetACw6KMZ8bmT7RGt7ib5KzWCC2SgCKzsBOs0rKymzGHPgwJpmkAX596VeAheHS2TKxaKd6HHI32QLIkXGi5BKvXUCksSxGZAYo2t3U/jfuZNN3o6tUzhgORVWEkiCaqPruC1lDujcMFr2tJJd0jml4OKyJC5RDVbndSLJXXPRV4HILxNpea3W3ob2TueiOp6WxRRn12QMkB+wtpPS5PKHQE4oL9HMywNQ6eyViUr106fZbME5FfWYTIbw5BOsvf3R02f9Vv/YA1QyV6K/cpj4nhtz/2uPvVRFVVCqsirrRmWp687Stn7/D/gLxTzYH1closIAAAAASUVORK5CYII="/></button>
                    </div>
                </form>  
        </div>
    </div>

  </>)
}

export default SignIn