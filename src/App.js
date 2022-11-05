import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/layout";
import React from 'react'
import {Routes,Route} from "react-router-dom"
import NotFound from "./pages/NotFound";

function App() {
  return (

      
    <Layout>
      <Routes>
          <Route path="/index" element={<Home/>}/>
          <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </Layout>


    );
}

export default App;
