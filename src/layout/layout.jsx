import React from "react"
import NavbarOne from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import AutoToTop from "../components/AutoToTop"
import BackToTopButton from "../components/BackToTopButton/BackToTopButton"
/* import ScrollToTop from "../components/ScrollToTop" */

const Layout = ({ children,logged,role }) => {
    return (<>
        <AutoToTop />
        <NavbarOne role={role}/>
        <main>{children}</main>
        {/* <ScrollToTop/> */}
        <BackToTopButton/>
        <Footer logged={logged} role={role}/>
    </>)
  }
  
  export default Layout