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
import MyHotels from "./pages/MyHotels/MyHotels"
import MyShow from "./pages/MyShows/MyShow"
/* import MyProfile from "./components/MyProfile/MyProfile"; */



import { useDispatch, useSelector } from "react-redux";
import userActions from './redux/actions/userActions';
import { useEffect } from 'react';

function App() {
  let {enterAgain}= userActions

  let dispatch = useDispatch()

  let { logged, role ,id } = useSelector(store => store.usuario)


  useEffect(()=>{
    let token = JSON.parse(localStorage.getItem("token"))
    
    if (token){
      dispatch(enterAgain(token.token.user))
    }
  },[])

  return (
    <Layout role={role}>
      <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/*" element={<NotFound />} />
          <Route path="/signin"  element={<SignIn/>}/>  
          <Route path="/signup" element={<SignUp />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/detailsCities/:id" element={<Citiesdetails/>}/>
          <Route path="/detailsHotels/:id" element={<Hoteldetails/>} />

    
           
              
        <Route path='/mycities' element={
          <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <MyCities id={id}/></ProtectedRoute>}
        ></Route>
        <Route path='/newcity' element={
          <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <NewCity id={id}/></ProtectedRoute>} 
        ></Route>
        <Route path='/newhotel' element={
          <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <NewHotel/></ProtectedRoute>}
        ></Route>
        <Route path='/myhotels' element={
          <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <MyHotels id={id}/></ProtectedRoute>}
        ></Route>  




      <Route element={<ProtectedRoute isAllowed={!!logged} reDirect={"/"} />}>
        <Route path="/myitineraries" element={<MyItineraries id={id}/>}></Route>
      </Route>
        <Route path='/myshows' element={
          <ProtectedRoute isAllowed={!!logged} reDirect={"/"}> <MyShow id={id}/></ProtectedRoute>}
        ></Route>  
        {/* <Route path='/myprofile' element={
          <ProtectedRoute isAllowed={!!logged} reDirect={"/"}> <MyProfile id={id}/></ProtectedRoute>}
        ></Route>  */}



        
      </Routes>
    </Layout>
  );
}

export default App;
     
        

        



