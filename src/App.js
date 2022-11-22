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


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/newcity" element={<NewCity />} />
        <Route path="/newhotel" element={<NewHotel/>}/>
        <Route path="/detailsCities/:id" element={<Citiesdetails/>}/>
        <Route path="/detailsHotels" element={<Hoteldetails/>} />
        <Route path="/mycities" element={<MyCities/>}></Route>
        <Route path="/myitineraries" element={<MyItineraries/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
