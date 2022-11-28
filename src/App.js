import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
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
/* import MyCities from "../pages/MyCities/MyCities";
import MyItineraries from "../pages/MyItineraries/MyItineraries"; */
import ProtectedRoute from "../src/components/protectedRoute";
import MyShow from "./pages/MyShows/MyShow";
import MyHotels from "../src/pages/MyHotels/MyHotels"




import { useDispatch, useSelector } from "react-redux";
import userActions from './redux/actions/userActions';
import { useEffect } from 'react';

function App() {
  let {enterAgain}= userActions

  let dispatch = useDispatch()

  let { logged, role  } = useSelector(store => store.usuario)

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

          <Route path='/signin' element={logged ? <Home></Home>:<SignIn/>}></Route>
          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/detailsCities/:id" element={<Citiesdetails/>}/>
          <Route path="/detailsHotels/:id" element={<Hoteldetails/>} />


          <Route element={<ProtectedRoute isAllowed={logged ? true : false} reDirect={"/"} />}>
              {/* <Route path="/myitineraries" element={<MyItineraries/>}></Route>  */}
              <Route path="/myshows" element={<MyShow />} />
          </Route>
        
          <Route path='/newcity' element={
            <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <NewCity/></ProtectedRoute>} 
        ></Route>
          <Route path='/newhotel' element={
            <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <NewHotel/></ProtectedRoute>}
          ></Route>  
    
{/*           <Route path='/mycities' element={
            <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <MyCities/></ProtectedRoute>}
          ></Route> */} 
          <Route path='/myhotels' element={
            <ProtectedRoute isAllowed={!!logged && role === "admin"} reDirect={"/"}> <MyHotels/></ProtectedRoute>}
          ></Route>
        

      </Routes>
    </Layout>
  );
}

export default App;

