import React from 'react'
import './myReactions.css'


function MyReactions(props) {

    let { name, icon,id, deleteReaction, photo,iconName } = props
    let color='border-'+iconName

    
    return (
       <div className='my-reaction-card-container'>
            <div className={color} >
               
                    <img className="icon-margin" src={icon} alt={name} width='30px' />
                        <div className='user-reaction-container'>
                        <img className='my-reaction-img' src={photo} alt={name} />
                        <h4 className='reaction-title'>{name}</h4>
            
                        <img className='delete-reactions' src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png" alt="trash" name={id} width='40px' onClick={deleteReaction} />
                
                    </div>
            </div>

       </div>
    )
 }


export default MyReactions