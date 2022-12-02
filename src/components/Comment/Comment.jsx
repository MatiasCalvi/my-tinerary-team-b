import React from 'react'
import './comment.css'
import commentActions from '../../redux/actions/commentActions';
import { useSelector , useDispatch} from 'react-redux'
import { useState,useEffect, useRef } from 'react'
import Swal from "sweetalert2";
import userActions from '../../redux/actions/userActions'
import axios from 'axios';
import { BASE_URL } from '../../api/url';
import New_comment from './New_Comment'
import ModalHotel from '../modals/ModalsHotel'



function Comments (props)  {
    let{showId}=props
    
    
    let { getComments ,deleteComment, editComment} = commentActions;
    let [reload , setReload] = useState(false)
    const [comment, setComment] = useState('');
    const [idEdit, setIdEdit] = useState()
    const [isOpen, setIsOpen] = useState(false);
   

    let { logged ,id,token, photo,} = useSelector(store => store.usuario)

    console.log(logged)
    console.log(id)
    console.log(token)
    console.log(photo)
  
    let dispatch = useDispatch()
    
    function reload2 (){
        setReload (!reload)
    }
    
    async function getcomentaries(){
         let comentariosID = await dispatch(getComments(showId))
         setComentarioslocales(comentariosID.payload)
         console.log(comentariosID)
    }
    
    let [comentariosLocales,setComentarioslocales] = useState( )

    console.log(comentariosLocales)

    useEffect( ()=>{
        
        getcomentaries()

    },[reload])

    const [open, setOpen] = useState(false)
    
    const handleOpen = () => {
        open ?
            setOpen(false)
            : setOpen(true)
    }

    const handleDelete = async (idDelete) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              })
          
          
         await dispatch(deleteComment({idDelete,token}))
         
          setReload(!reload)
          
        } catch (error) {
          console.log(error);
        }

        };

        let listenEdit = async (event) => {
            event.preventDefault()
            console.log(event)
            let data = {comment}
        console.log(data);
        
        if ( comment === ''  ) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You must complete all fields !',
          })
        } else {
            try {
              let res = await dispatch(editComment({idEdit, data,token}))    
              if (res.payload.success){
                Swal.fire({
                  title: ` Comment has been updated`,
  
                })
                setIsOpen(false)
               await dispatch(getComments(id))
               setReload(!reload)
              }       
              else {

                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: res.payload.response,
                  })
              }
            } catch(error) {
              console.log(error.message)
            }
          }}
  
    const commentView = (comments) => {
        return (
            <div className='Comment-card'> 
              
                {id === comments.userId ?  
                <div className="comment-avatare">
                    <img src={comments.photo}/>
                </div> :   
                <div className="comment-avatar">
                    <img src={comments.photo}/>
                </div>}

                <div className='Comment-description'>
                    <div className='Comment-user'>
                        <p>{comments.date.slice(0, 10)}</p>
                    </div>
                    <div className='Comment-info'>
                        <p>{comments.comment}</p>
                    </div>
                    {id === comments.userId ?<div className="comments-buttons">
                        <button  onClick={() => (setIdEdit(comments._id),(setIsOpen(true)))}>Edit</button>
                         <button onClick={() => handleDelete(comments._id)}>Delete</button>
                    </div>:<h2 className='display-none'>.</h2>}
            
                </div>
                <ModalHotel  open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="edit-form-container">
                    <input
                    htmlFor="Comment"
                    className="new-input"
                    type="text"
                    name="Comment"
                    placeholder="Comment"
                    onChange={(e) => setComment(e.target.value)}
                    />
                
                
                    <div className="edit-button">
                    <button onClick={listenEdit}  type="submit">Edit</button>
                    </div>
                </div>
                </ModalHotel>
            </div>
        )
    }
    

    return (
        <div className='Comments-container'>
            <button type="button" className='comments-button' onClick={handleOpen}>
                {open ? "Close" : "Make a Comment!"}
            </button>
            {open ?
                <div className='Comments-cards'>
                    <New_comment showId={showId} reload={reload2}  />
                    {comentariosLocales?.map(commentView)}
                </div>
                : null
            }
        </div>
    )
}
export default Comments