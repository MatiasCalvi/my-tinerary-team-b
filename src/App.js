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
import Dcities from "./pages/Dcities"
import City from "./components/City"



function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/city" element={<City />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/newcity" element={<NewCity />} />
        <Route path="/newhotel" element={<NewHotel/>}/>
        <Route path="/dcities" element={<Dcities/>}/>

      </Routes>
    </Layout>
  );
}

export default App;
