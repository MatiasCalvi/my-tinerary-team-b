import React from 'react'

export default function MyCitiesCard(props) {
  
  let {name,img,id,event1, event2, go, cityId,cityIdGo}=props  

  let listen=(e)=>{
    event1(id,e)
  }

  let listenEdit=(e)=>{
    event2(id,e)
    go(id)
    cityIdGo(cityId)
  }

  return (
    <div class="card-My">
            <h3 onClick={listenEdit} className='option-mycities-edit'>Edit</h3>
            <div className='containerImage-mycities'><img src={img} className='image-mycities' alt={name} /></div>
            <h4 className='name-mycities'>{name}</h4>
            <h3 onClick={listen} className='option-mycities-delet'>Delete</h3>
    </div>
  )
}
