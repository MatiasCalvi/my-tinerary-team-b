import React from "react"
import "./home1.css"
import CallToAction from "../../components/CallToAction"
import Carousel from "../../components/Carousel/Carousel"

export default function Home1 () {
    return (
            <>
            <header class="header">
	
	            <div class="text-box">
		            <h1 class="heading-primary">
			            <span class="heading-primary-main">My itinerary</span>
			            <span class="heading-primary-sub">Adventure Awaits, Go Find It.</span>
		            </h1>
                    <div class="text-box-buttons">
		                
                        <CallToAction className="btn btn-white btn-animated" page="Find your next destiny" rute="/cities"/>
                        <CallToAction className="btn btn-white btn-animated" page="Find the best hotels" rute="/hotels"/>  
                    </div>
	            </div>
           </header>
           <div className="carrousel-container">
            <Carousel/>
           </div>
             </>

    )
}