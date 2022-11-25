import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/layout";
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Hotels from "./pages/Hotels";
import Cities from "./pages/Cities"
import NewCity from "./pages/NewCity"
import NewHotel from "./pages/NewHotel";
import Citiesdetails from "./pages/Citiesdetails";
import Hoteldetails from "./pages/Hoteldetails";
import MyCities from "./pages/MyCities/MyCities";
import MyItineraries from "./pages/MyItineraries/MyItineraries";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch,useSelector } from "react-redux";



import { useDispatch, useSelector } from "react-redux";
import userActions from './redux/actions/userActions';
import { useEffect } from 'react';

function App() {
  let {enterAgain}= userActions
let dispatch = useDispatch()
let { logged } = useSelector(store => store.usuario)
  useEffect(()=>{
    let token = JSON.parse(localStorage.getItem("token"))

    if (token){
      dispatch(enterAgain(token.token.user))
    }
  },[])


  console.log(logged)

  return (
    <Layout>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={""} reDirect={"/"} />}>
          <Route path="/" element={<Home />}/>
          <Route path="/*" element={<NotFound />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/detailsCities/:id" element={<Citiesdetails/>}/>
          <Route path="/myitineraries" element={<MyItineraries/>}></Route>
          <Route path="/detailsHotels/:id" element={<Hoteldetails/>} /> 
        </Route>
        

        <Route path="/newcity" element={<NewCity />} />
        <Route path="/newhotel" element={<NewHotel/>}/>
        <Route path="/mycities" element={<MyCities/>}></Route>
        
        
      </Routes>
    </Layout>
  );
}

export default App;
