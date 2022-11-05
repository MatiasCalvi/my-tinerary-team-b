import React from "react"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import AutoToTop from "../components/AutoToTop"
import ScrollToTop from "../components/ScrollToTop"

const Layout = ({ children }) => {
    return (
      <>
        <AutoToTop />
        <NavBar />
        <main>{children}</main>
        <ScrollToTop />
        <Footer />
      </>
    )
  }
  
  export default Layout