import React from 'react'

export default function MyCitiesCard(props) {
  
  let {name,img,id,event1}=props  

  let listen=(e)=>{
    event1(id,e)
  }

  return (
    <div class="card-My">
            <h3 onClick={listen} className='option-mycities-edit'>Edit</h3>
            <div><img src={img} className='image-mycities' alt={name} /></div>
            <h4 className='name-mycities'>{name}</h4>
            <h3 onClick='' className='option-mycities-delet'>Delete</h3>
    </div>
  )
}
