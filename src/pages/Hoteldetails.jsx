import React from 'react'
import { useParams } from 'react-router-dom'
import "../citiesDetails.css"

export default function Hoteldetails(props) {
    
  return (<>
    <div className='c-containerDetailsOld'>
    <div className="card1">
    <div className="face1 front1">
        <img src="https://images.pexels.com/photos/7526378/pexels-photo-7526378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h3>wea1</h3>
    </div>
    <div className="face1 back1">
        <h3>wea1</h3>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit sapiente similique nihil, cupiditate ipsa harum. Qui beatae dolorem atque sed, fugit officia asperiores repellendus? Maxime?</h4>
            <div className="link1">
            </div>
    </div>
    </div>
</div>
<div className='c-containerDetailsYoung'>
    <div className="card2">
    <div className="face2 front2">
        <img src="https://images.pexels.com/photos/7526378/pexels-photo-7526378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h3>wea1</h3>
    </div>
    <div className="face2 back2">
        <h3>wea1</h3>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit sapiente similique nihil, cupiditate ipsa harum. Qui beatae dolorem atque sed, fugit officia asperiores repellendus? Maxime?</h4>
            <div className="link2">
            </div>
    </div>
    </div>
    <div className="card2">
    <div className="face2 front2">
        <img src="https://images.pexels.com/photos/7526378/pexels-photo-7526378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <h3>wea1</h3>
    </div>
    <div className="face2 back2">
        <h3>wea1</h3>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit sapiente similique nihil, cupiditate ipsa harum. Qui beatae dolorem atque sed, fugit officia asperiores repellendus? Maxime?</h4>
            <div className="link2">
            </div>
    </div>
    </div>
</div>
</>)
}
