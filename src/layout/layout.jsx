import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import AutoToTop from "../components/AutoToTop"
import ScrollToTop from "../components/ScrollToTop"
import { useState } from "react"


const Layout = ({ children,role }) => {
  let [boolean,setBoolean]=useState(null)  

  let listen=(logged)=>{
    setBoolean(logged)
  }  
  
  return (
      <>
        <AutoToTop />
        <NavBar listen={listen}/>
        <main>{children}</main>
        <ScrollToTop />
        <Footer logged={boolean} role={role}/>
      </>
    )
  }
  
  export default Layout