import React from 'react'
import "./reaction.css"
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import reactionsActions from '../../redux/actions/reactionsActions'


export default function Reaction(props) {
   let {array}=props

   let idItinerary2=array[0]?.itineraryId

   console.log(idItinerary2)
    console.log(array)

   const [reload, setReload] = useState(true)

   let { feedbackReaction, getReactionItinerary2 } = reactionsActions

   let dispatch = useDispatch()

   let { id , token } = useSelector(store=>store.usuario)


    useEffect(() => {
        updateReaction()
    }, [reload])

    async function updateReaction() {

        await dispatch(getReactionItinerary2({idItinerary2,token}))
    }


    async function giveReaction(e) {
       
      
        console.log(e.target.alt)

        let name = e.target.alt
        
        
                try {
                    await dispatch(feedbackReaction({token: token, name: name, itineraryId: idItinerary2}))

                    setReload(!reload)
                } catch (error) {
                    console.log(error)
                }
        
        

    }
    

  return (<> 
            <div className='itinerary-reaction-container'>
        {  
        array.map(x=>{
            let user = x.userId.find(user => user === id)
            let quantity = x.userId.length

            return (
                <div>
                    <div key={x.name}>
                        {
                            user ? (
                                <div className='double-reaction-container'>
                                    <div >
                                        <img id={x._id} onClick={giveReaction} name={x.name} className='reaction-image' src={x.icon} alt={x.name} />
                                        <p>{quantity}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className='double-reaction-container'>
                                    <div  >
                                        <img id={x._id} onClick={giveReaction} name={x.name} className='reaction-image' src={x.iconBack} alt={x.name} />
                                        <p>{quantity}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            )
        } )
      } 
      </div>
    </>)
}

