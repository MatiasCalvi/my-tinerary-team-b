import React from 'react'
import "../MyItineraries/myItineraries.css"
import { useDispatch,useSelector } from 'react-redux';
import itinerariesActions from '../../redux/actions/itinerariesActions';
import reactionsActions from '../../redux/actions/reactionsActions';
import { useState,useRef } from 'react';
import alertActions from '../../redux/actions/alertaCity';
import Swal from 'sweetalert2'
import Modal from '../../components/Modal/Modal'
import { useEffect } from 'react';

export default function NewReaction() {

    

    let dispatch=useDispatch()
    let {getItinerariesAll}=itinerariesActions
    let {newReactionCreation}=reactionsActions
    let [itinerary,setItinerary]=useState('')
    let form = useRef()
    
    const {itinariesAdmin} = useSelector((state) => state.itinerary);
    const {id,token}=useSelector((state)=>state.usuario)
    const {alerta}=alertActions
    
    
    async function get(){
        await dispatch(getItinerariesAll())
    } 
  
    useEffect(()=>{
        get()
    },[])


    let a=(e)=>{

        setItinerary(e.target.value)
    
    }
    
     function creation (event) {

        event.preventDefault()
        
        let data = {}
        Array.from(form.current).forEach(input=>{
            if(input.name) {
                data[input.name] = input.value.trim()
            }
           
        })
        if(itinerary){
          data.itineraryId=itinerary;
        }else{
          data.itineraryId=itinariesAdmin[0]._id  
        }
        
        data.userId=id; 
        
            
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, create it!'
            })
            .then(async(result)=>{
                if (result.isConfirmed) {

                    try{
                        const res = await dispatch(newReactionCreation({data,token}))
                        console.log(res)
                        if(res.payload.success){
                                Swal.fire(
                                    'Create',
                                    'Your reaction has been created.',
                                    'success'
                                )                
                                event.target.reset()
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
            })                      
        }
       
     

        return (
        <div className='flex j-center a-center total bg column'>

        <h1 className='new-title-SignUp'>Create new Reaction</h1>
        <form onSubmit={creation} ref={form} className='New-container'>
                <select className='New-text' onClick={a}>
                  { itinariesAdmin.map(e=><option className='New-text' name={e.name} value={e._id}>{e.name}</option>) }
                </select>
                <input type='text' name='name' placeholder='Enter name' className='New-text'/>
                <input type='text' name='icon' placeholder='Enter icon' className='New-text'/>
                <input type='text' name='iconBack' placeholder='Enter iconBack' className='New-text'/>
                <input type="submit" className='New-title-Submit' required value='register!' />
        </form>
                
        </div>
    )
    
}
