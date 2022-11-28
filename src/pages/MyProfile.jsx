
import React from 'react'
import MyProfile from '../../src/components/Myprofile/MyProfile'
import { useDispatch } from 'react-redux'

function MyProfilePage(props) {

  let dispatch= useDispatch()


  let {id} = props
  return (
    <MyProfile id={id}/>
  )
}

export default MyProfilePage
