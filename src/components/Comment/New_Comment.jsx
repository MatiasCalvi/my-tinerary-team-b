import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import Swal from 'sweetalert2'
import commentAction from "../../redux/actions/commentActions";

function New_Comment (props) {
    let {addComments}= commentAction
    let dispatch = useDispatch()
    let idOfShow = props
    let showId = idOfShow

  
 
    let { id,logged,photo} = useSelector(store => store.usuario)
    let userId = id
    const [comment, setComment] = useState('');
    let actualdate = new Date
    let date = actualdate.toISOString()
    
    console.log(props)
    console.log(id)
    console.log(logged)
   console.log(userId)
    

    async function SubmitComments(event){
        event.preventDefault() 

        if (comment.length < 3 ) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "text to short",
          })
        }else   Swal.fire({
          title: 'Are you sure you want to post a comment?',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, post it!'
        })
        let data = {
          comment
          ,...showId
          ,date
          ,userId
          ,photo
          }


          
        console.log(data)
         try {       
            await dispatch(addComments(data))
         props.reload()
           
    } catch (error) {
        console.log(error);
    }  

    }

    

  return (<>

 <div onSubmit={SubmitComments}>
 
 <div>
   <form  >
     <div >
        <div >
            <input   onChange={(e) => setComment(e.target.value)} placeholder="Add a comment" type="text" className="input"/>
        </div>
     </div>
     <div >
        <input  type="reset" value="Clear Form" />
        <input onClick={SubmitComments} type="submit" value="Submit" />
     </div>
   </form>
 </div>
 </div> 

  </>)
}
export default New_Comment 
