import React from 'react'
import "./MyProfile.css"
import { useSelector , useDispatch} from 'react-redux'
import Swal from "sweetalert2";
import ModalHotel from "../../components/Modal/Modal";
import { useState,useEffect } from 'react'
import userActions from '../../redux/actions/userActions'

function MyProfile(props) {
  
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [lastName, setlastName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

let{getOneUser,editUser}= userActions

let {id}= props
console.log(id);
let dispatch = useDispatch()


let {profile} = useSelector(((state) => state.usuario))
console.log(profile);

async function getUsers(){
  
  await dispatch(getOneUser(id))
}


useEffect( ()=>{

  getUsers()
},[])


let listenEdit = async (event) => {
  event.preventDefault()

  let data = {name,photo,lastName}
console.log(data);
  try {
    let res = await dispatch(editUser({id, data}))

    if (res.payload.success){
      Swal.fire({
        title: `${name} has been updated`,
        imageUrl: photo,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'image',
      })
      dispatch(getOneUser(id))
    } else {
      dispatch((
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: res.payload.response,

        })))
    }

  } catch(error) {
    console.log(error.message)
  }
}


  return (
<> 
<div className='full-height'>

<div className="content-profile-page">
   <div className="profile-user-page card">
      <div className="img-user-profile">
        <img className="profile-bgHome" src="https://images.photowall.com/products/44351/island-paradise.jpg?h=699&q=85" />
        <img className="avatar" src={profile[0]?.photo} alt="jofpin"/>
           </div>

          <div className="user-profile-data">
           
            <p>{profile[0]?.name }</p>
            <button className="bt-nav-c" onClick={() => (setIsOpen(true))}>Edit profile</button>
          </div> 
        
      
      </div>
    </div>
    <ModalHotel  open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="edit-form-container">
            <input
              htmlFor="name"
              className="new-input"
              type="text"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
              <input
                htmlFor="photo"
                type="text"
                className="new-input"
                name="lastname"
                placeholder="Last Name"
                onChange={(e) => setlastName(e.target.value)}
              />
            <input
              htmlFor="photo"
              type="text"
              className="new-input"
              name="photo"
              placeholder="Photo"
              onChange={(e) => setPhoto(e.target.value)}
            />
          
            <div className="edit-button">
              <button onClick={listenEdit}  type="submit">Edit</button>
            </div>
          </div>
          </ModalHotel>
</div>


 </>

  )
}
export default MyProfile