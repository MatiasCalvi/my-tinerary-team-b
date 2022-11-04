import React from 'react'
import '../App.css'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import ScrollToTop from '../components/ScrollToTop'

export default function Home2() {
  return (<>
    <div className='home2'>
      <ScrollToTop></ScrollToTop>
      <Carousel></Carousel>
    </div>
    <Footer></Footer>
    </>)
}
